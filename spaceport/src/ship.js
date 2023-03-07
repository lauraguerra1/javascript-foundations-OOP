var Being = require("./being");
var Part = require("./part");

class Ship {
  constructor(ship) {
    this.name = ship.name;
    this.type = ship.type;
    this.maxCrew = ship.maxCrew;
    this.odometer = ship.odometer || 0;
    this.fuelCapacity = ship.fuelCapacity || 10;
    this.fuel = 0;
    this.captain = ship.captain;
    this.crew = [];
    this.cargo = [];
    this.parts = ship.parts || {};
  }
  addCrew(beings) {
    beings.forEach((being) => {
      if (being instanceof Being && this.crew.length < this.maxCrew) {
        this.crew.push(being);
      }
    });
  }
  loadCargo(part) {
    if (part instanceof Part) {
      this.cargo.push(part);
    }
  }
  updatePart(part) {
    if (Object.keys(this.parts).includes(part.type)) {
      var oldPart = this.parts[part.type];
      this.parts[part.type] = part;
      var newPart = this.parts[part.type];
      return oldPart.value - newPart.value;
    } else {
      this.parts[part.type] = part;
    }
  }
  checkReadiness() {
    if (!this.captain) {
      this.readyToFly = false;
      return "Cannot fly without a captain";
    } else if (!this.fuel) {
      this.readyToFly = false;
      return `Cannot fly without fuel`;
    } else if (!Object.keys(this.parts).length) {
      this.readyToFly = false;
      return `Cannot fly without parts`;
    } else {
      this.readyToFly = true;
      return `Good to go!`;
    }
  }
}

module.exports = Ship;
