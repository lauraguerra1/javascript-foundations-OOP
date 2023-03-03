var Skier = require('./Skier');

class Lift {
  constructor(limit) {
    this.inService = true; 
    this.limit = limit; 
    this.skiers = [];
    this.safetyBar = 'up';
  }
  admitSkier(name, ticket) {
    if (this.skiers.length < this.limit && ticket === true) {
        this.skiers.push(new Skier(name, ticket));
    } else if (ticket === false) {
        return `Sorry, ${name}. You need a lift ticket!`;
    } else {
        return `Sorry, ${name}. Please wait for the next lift!`;
    }
  }
  startLift() {
    var skiersNeeded = this.limit - this.skiers.length;
    if (!skiersNeeded) {
        this.safetyBar = 'down';
    } else if (skiersNeeded > 1) {
        return `We still need ${skiersNeeded} more skiers!`;
    } else {
        return `We still need 1 more skier!`;
    }
  }
}

module.exports = Lift;