/*
on propose 3 ingrédients de manière aléatoires
tant qu'il n'a pas sélectionné 3 ingrédients, on lui propose des ingrédients
quand il y a 3 ingrédients, on calcule la recette la plus proche
on affiche la / les recettes (de la plus près à la plus lontaine) :
 - recette 1  : celle qui comporte le plus d'ingrédients parmis les 3 selectionnés sera proposé en priorité
 On pourra ajouter des coefficeints sur les ingrédients "principal" : ex : riz pour paella
 - slider les autres propositions s'il y en a ;
ON pourra trier les ingrédietns pas type : ex : ingrédients principals et ingrédients secondaire
d'aor faire choisir un ingrédients principal pour avoir la base de la recette
ensuite faire choisir des ingredients secondaires pour l'accompagenement
si le joueur ne choisit aucun ingrédients principal, on passera alors a la liste des ingrédietns secondaires
 */

// on charge le premier ingredient au lancement de la page
/*document.querySelector("#card").addEventListener('load', displayRandomIngrendient);
var arrayIngredient = [
    'chocolat',
    'farine',
    'sucre',
    'oeuf',
    'lait',
    'citron',
    'banane',
    'fruit rouge',
    'fraise',
    'carotte',
    'fromage blanc',
    'poire',
    "poudre d'amande",
    'vanille',
    'pistache',
    'beurre',
    'pâte sablée',
    'creme fraiche',
    'boudoir',
    'pomme',
    'cerise',
    'café'
]
var arrayIngRecipe = new Array;
var numberIng;
var like = true;
chooseIngredient();
/**
 * display and ingredient to the user and insert into a tab
 */
/*function chooseIngredient() {
    do { // demander un choix
        displayRandomIngrendient();
        if (like) {
            arrayIngRecipe.push(ingredientProposed);
            numberIng += 1;
            console.log(arrayIngRecipe);
        }
    } while (numberIng < 3);
    console.log("tableau ok");
}
/**
 * selection a random ingredient into the list of ingredient
 */
/*function displayRandomIngrendient() {
    ingredientProposed = Math.round(Math.random() * (arrayIngredient.length - 1));
    console.log(ingredientProposed);
    var contIngredient = document.createElement('div');
    ingredientProposed = arrayIngredient[ingredientProposed];
    contIngredient.appendChild(document.createTextNode(ingredientProposed));
    document.getElementById("card").appendChild(contIngredient);
}
// check if the recipe has the corresponding ingredient. if yes, we're putting into the ing array
function chooseRecipe() {
    for (let i = 1; i < arrayIngRecipe.length; i++) {
        // si l'ingredient est dans la recette, alors on met la recette dans le tableau
        if (recipeArray['ingredient'])
        arrayIngRecipe.push(ingredientProposed);
    }
}
var monTest = document.getElementById(test);*/

/**
 * allows to generate ingredients, read the json elements
 */
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        myObj.forEach(function (element, index) {
            var card = new Card(index, element.ingredients, element.images);
            card.create();
        });
    }
};
xmlhttp.open("GET", "./js/ingredients.json", true);
xmlhttp.send();


var ingredientList = [];
var counterIngredient = 1;


/**
 * Create constructor for each Card
 */


class Card {
    constructor(index, name, images) {
        this.index = index;
        this.name = name;
        this.images = images;
    }

    /**
 * Create the card with image
 */
    create() {
        var nameContainer = document.querySelector(".cardcontainer");
        var container = document.querySelector(".cardlist");
        var cardContent = document.createElement("li");
        var containerIngredient = document.createElement("p");
        containerIngredient.id = "nameIngredient";
        var contentImage = document.createElement("img");
        /** add class card to be able to use animation */
        cardContent.className = "card";
        /** if it's the first, we add "current" to be used with the animation */
        if (this.index == 0) {
            cardContent.className += " current";
            containerIngredient.textContent += this.name;
        }
        ingredientList.push(this.name);
        localStorage.setItem(this.index, this.name);

        /**add image link */
        contentImage.src = "images/ingredients/" + this.images;
        /** add element to the parent container */
        cardContent.appendChild(contentImage);
        container.appendChild(cardContent);
        nameContainer.appendChild(containerIngredient);
    }
}

var arrayIngRecipe = new Array;

(function () {
    var animating = false;

    function animatecard(ev) {
        if (animating === false) {
            var t = ev.target;
            if (t.className === 'but-nope') {
                t.parentNode.classList.add('nope');
                animating = true;
                /**when the user clicked the "no" button */
                fireCustomEvent('nopecard', {
                    origin: t,
                    container: t.parentNode,
                    card: t.parentNode.querySelector('.card')
                });
            }
            if (t.className === 'but-yay') {
                t.parentNode.classList.add('yes');
                animating = true;
                /**when the user clicked the "yes" button */
                fireCustomEvent('yepcard', {
                    origin: t,
                    container: t.parentNode,
                    card: t.parentNode.querySelector('.card')
                });
                /**add ingredient into recette list to propose */
                arrayIngRecipe.push(ingredientList[counterIngredient - 1]);

                console.log(arrayIngRecipe);
            }
            /** actual card => moving */
            if (t.classList.contains('current')) {
                fireCustomEvent('cardchosen', {
                    container: getContainer(t),
                    card: t
                });
            }
        }
    }

    function fireCustomEvent(name, payload) {
        var newevent = new CustomEvent(name, { detail: payload });
        document.body.dispatchEvent(newevent);
    }

    function getContainer(elm) {
        var origin = elm.parentNode;
        if (!origin.classList.contains('cardcontainer')) {
            origin = origin.parentNode;
        }
        return origin;
    }

    function animationdone(ev) {

        animating = false;
        var origin = getContainer(ev.target);
        var infinite = origin.querySelector(".current")
        if (ev.animationName === 'yay') {
            origin.classList.remove('yes');
        }
        if (ev.animationName === 'nope') {
            origin.classList.remove('nope');
        }
        if (origin.classList.contains('list')) {
            if (ev.animationName === 'nope' || ev.animationName === 'yay') {
                origin.querySelector('.current').remove();
                if (!origin.querySelector('.card')) {
                    fireCustomEvent('deckempty', {
                        origin: origin.querySelector('button'),
                        container: origin,
                        card: null


                    });

                } else {
                    origin.querySelector('.card').classList.add('current');
                }
            }
            /**
             * infinite list ingredients
             *  */

            var container = document.querySelector(".cardlist");
            infinite.classList.remove("current");
            container.appendChild(infinite);
        }
        /**
         * allows to display name of ingredients of each click
         */
        var ingredientName = document.querySelector("#nameIngredient");
        ingredientName.innerHTML = ingredientList[counterIngredient];
        counterIngredient++;
        if(counterIngredient == ingredientList.length){
            counterIngredient = 0;
        }
    }
    document.body.addEventListener('animationend', animationdone);
    document.body.addEventListener('webkitAnimationEnd', animationdone);
    document.body.addEventListener('click', animatecard);
    window.addEventListener('DOMContentLoaded', function () {
        document.body.classList.add('tinderesque');
    });
})();

(function () {

    var all = 0;
    var results = document.querySelector('#results');
    var counter = document.querySelector('#counter');

    function updatecounter() {
        --all;
        counter.innerHTML = all;
    }

    document.body.addEventListener('yepcard', function (ev) {
        results.innerHTML += '<li>' + ev.detail.card.innerHTML + '</li>';
        updatecounter();
    });

    document.body.addEventListener('nopecard', function (ev) {
        updatecounter();
    });

    /**
     * when all cards are gone - you can use this to pull new content
     * Ici il faudra afficher les recettes
     */

    document.body.addEventListener('deckempty', function (ev) {
        results.classList.add('live');
        ev.detail.container.style.display = 'none';
    });

    /*
    window.addEventListener('load', function (ev) {
        // check if template is supported
        // browsers without it wouldn't need to
        // do the content shifting
        if ('content' in document.createElement('template')) { // get the template
            var t = document.querySelector('template');
            // get its parent element
            var list = t.parentNode;
            // cache the template content
            var contents = t.innerHTML;
            // kill the template
            list.removeChild(t);
            // add the cached content to the parent
            list.innerHTML += contents;
        }
        var listitems = document.body.querySelectorAll('.card');
        all = listitems.length + 1;
        updatecounter();
    });
*/
})();
