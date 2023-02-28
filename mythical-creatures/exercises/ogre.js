var Human = require("./human");

class Ogre {
  constructor(ogre) {
    this.name = ogre.name;
    this.home = ogre.abode || "Swamp";
    this.swings = 0;
  }
  encounter(human) {
    human.encounterCounter += 1;
    if (human.encounterCounter % 3 === 0 && human.encounterCounter > 5) {
      this.swings += 1;
      human.knockedOut = true;
    } else if (
      human.encounterCounter >= 3 &&
      human.encounterCounter % 3 === 0
    ) {
      this.swings += 1;
    }
  }
  swingAt(human) {
    if (this.swwings < 1) {
      this.swings += 1;
    } else {
      this.swings += 1;
      human.knockedOut = true;
    }
  }
  apologize(human) {
    human.knockedOut = false;
  }
}
module.exports = Ogre;
