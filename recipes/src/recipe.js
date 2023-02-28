class Recipe {
  constructor(recipe) {
    this.name = recipe.name;
    this.ingredients = recipe.ingredients;
    this.attempted = false;
    // this.rating = null;
  }
  rateRecipe(rating) {
    this.attempted = true;
    this.rating = rating;
  }
  changeIngredientAmount(name, amount) {
    var ingredient = this.ingredients.find(
      (ingredient) => ingredient.name === name
    );
    ingredient.amount = amount;
  }
  generateGroceryList() {
    var groceryList = `You need:`;
    this.ingredients.forEach(
      (ingredient) =>
        (groceryList += ` ${ingredient.amount} ${ingredient.name},`)
    );
    return groceryList;
  }
  grammarGroceryList() {
    var groceryList = `You need:`;
    this.ingredients.forEach((ingredient, i) =>
      i < this.ingredients.length - 1
        ? (groceryList += ` ${ingredient.amount} ${ingredient.name},`)
        : (groceryList += ` and ${ingredient.amount} ${ingredient.name}.`)
    );
    return groceryList;
  }
}

module.exports = Recipe;
