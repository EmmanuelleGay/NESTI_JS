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

var ingredient = [
    'pate',
    'riz',
    'dinde',
    'pate feuilletée',
    'feuille de brick',
    'cabillaud',
    'pomme de terre',
    'poulet',
    'viande hachée',
    'tomate',
    'roquefort',
    'emmental',
    'chevre',
    'mozzarella',
    'lardons',
    'lait',
    'moules',
    'crevettes',
    'chorizo',
    'champignon',
    'marron',
    'ail',
    'vin blanc',
    'roblochon',
    'oignon',
    'creme fraiche',
    'jambon',
    'chapelure',
    'vin rouge',
    'carottes',
    'boeuf',
    'fraise',
    'oeuf',
    'caramel',
    'banane',
    'chocolat',
    'miel'
]

var ing1;
var ing2;
var ing3;
var ing4;
var ing5;
var numberIng;

var maxArray = Array.length;
chooseIngredient();
do {
  // demander un choix
}

while (numberIng < 5);

// on propose la recette


function chooseIngredient(){
console.log (ingredientProposed);

}

function randomIngrendient(maxArray) {
    var min = 0;
    ingredientProposed = Math.random() * (maxArray - min) + min
}

