// https://web.compass.lighthouselabs.ca/activities/1138

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  var recipeName = "";

  recipes.forEach(recipe => {
    for ( var i = 0; i < recipe.ingredients.length; i++) {
      if ( (bakeryA.indexOf(recipe.ingredients[i]) > -1) || bakeryB.indexOf(recipe.ingredients[i]) > -1) {
        i++;
        if ( (bakeryB.indexOf(recipe.ingredients[i]) > -1) || bakeryA.indexOf(recipe.ingredients[i]) > -1) {
          recipeName = recipe.name;
        }
      }
    }
  });
  return recipeName;

}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
