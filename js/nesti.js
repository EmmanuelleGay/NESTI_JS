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

class Card {
  constructor(name, images) {
    this.name = name;
    this.images = images;
  }
}

(function () {
  var animating = false;

  function animatecard(ev) {
    if (animating === false) {
      var t = ev.target;
      if (t.className === 'but-nope') {
        t.parentNode.classList.add('nope');
        animating = true;
        fireCustomEvent('nopecard',
          {
            origin: t,
            container: t.parentNode,
            card: t.parentNode.querySelector('.card')
          }
        );
      }
      if (t.className === 'but-yay') {
        t.parentNode.classList.add('yes');
        animating = true;
        fireCustomEvent('yepcard',
          {
            origin: t,
            container: t.parentNode,
            card: t.parentNode.querySelector('.card')
          }
        );
      }
      if (t.classList.contains('current')) {
        fireCustomEvent('cardchosen',
          {
            container: getContainer(t),
            card: t
          }
        );
      }
    }
  }

  function fireCustomEvent(name, payload) {
    var newevent = new CustomEvent(name, {
      detail: payload
    });
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
    if (ev.animationName === 'yay') {
      origin.classList.remove('yes');
    }
    if (ev.animationName === 'nope') {
      origin.classList.remove('nope');
    }
    if (origin.classList.contains('list')) {
      if (ev.animationName === 'nope' ||
        ev.animationName === 'yay') {
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

  document.body.addEventListener('deckempty', function (ev) {
    results.classList.add('live');
    ev.detail.container.style.display = 'none';
  });

  window.addEventListener('load', function (ev) {
    // check if template is supported
    // browsers without it wouldn't need to
    // do the content shifting
    if ('content' in document.createElement('template')) {
      // get the template
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

})();