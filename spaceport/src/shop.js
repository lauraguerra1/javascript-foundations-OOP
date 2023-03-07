var Part = require("./part");
var Ship = require("./ship");

class Shop {
  constructor(shop) {
    this.name = shop.name;
    this.inventory = {};
  }
  addInventory(part) {
    if (part instanceof Part) {
      this.inventory[part.type] = part;
    }
  }
  outfitShip(ship, part) {
    var partValue = this.inventory[part].value;
    if (!ship.captain) {
      return `cannot outfit a ship without a captain`;
    } else if (ship.captain.credits < partValue) {
      var diff = partValue - ship.captain.credits;
      return `you require ${diff} more credits to make this purchase`;
    } else {
      ship.captain.credits -= partValue;
      ship.updatePart(this.inventory[part]);
      this.inventory[part] = undefined;
      return `shell added to ship`;
    }
  }
}

module.exports = Shop;
