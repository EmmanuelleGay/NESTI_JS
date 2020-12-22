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
document.querySelector("#card").addEventListener('load',displayRandomIngrendient);


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
    "melange d'epice",
    'gelatine',
    'boudoir',
    'pomme',
    'cerise',
    'café'
]

var arrayIngRecipe = new Array;


var numberIng;
var like = true;

chooseIngredient();


// on propose la recette


function chooseIngredient() {

    do { // demander un choix
        displayRandomIngrendient();
        if (like) {
            arrayIngRecipe.push(ingredientProposed);
            numberIng += 1;
            console.log(arrayIngRecipe);
        }
    } while (numberIng < 5);

    console.log("tableau ok");
}

function displayRandomIngrendient() {
    ingredientProposed = Math.round(Math.random() * (arrayIngredient.length - 1));
    console.log(ingredientProposed);
    var contIngredient = document.createElement('div');
    ingredientProposed = arrayIngredient[ingredientProposed];
    contIngredient.appendChild(document.createTextNode(ingredientProposed));
    document.getElementById("card").appendChild(contIngredient);
}

function chooseRecipe(){

}
