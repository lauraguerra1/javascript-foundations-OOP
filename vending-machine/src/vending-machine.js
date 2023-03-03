class VendingMachine {
  constructor(machine) {
    this.id = machine.id;
    this.isBroken = machine.isBroken;
    this.snacks = [];
  }
  addSnacks(newSnack) {
    if (this.snacks.find((snack) => snack.name === newSnack.name)) {
      return `Sorry, that snack is already stocked! Try adding a different snack.`;
    } else {
      this.snacks.push(newSnack);
    }
  }
  purchaseSnack(name, money) {
    var food = this.snacks.find((snack) => snack.name === name);
    if (food.itemsInStock && money >= food.price) {
        food.itemsInStock -= 1;
        return `Success! Here is $${money - food.price} back!`
    } else if (money < food.price) {
        return `Sorry, not enough payment. Please add more money.`
    } else {
        return `Sorry, no items in stock. Try another item.`
    }
  }
}

module.exports = VendingMachine;
