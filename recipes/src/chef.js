var Recipe = require("../src/recipe.js");

class Chef {
  constructor(name, recipeBox) {
    this.name = name;
    this.recipeBox = recipeBox;
  }
  tryRecipe(name, rating) {
    var recipe = this.recipeBox.find((recipe) => recipe.name === name);
    recipe.rateRecipe(rating);
  }
  addRecipe(name, ingredients) {
    var recipe = new Recipe({ name: name, ingredients: ingredients });
    this.recipeBox.push(recipe);
  }
  changeRecipe(name, ingredient, amount) {
    var recipe = this.recipeBox.find((recipe) => recipe.name === name);
    recipe.changeIngredientAmount(ingredient, amount);
  }
}

module.exports = Chef;
