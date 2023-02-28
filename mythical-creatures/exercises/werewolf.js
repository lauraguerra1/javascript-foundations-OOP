var Victim = require("./victim");

class Werewolf {
  constructor(name) {
    this.name = name;
    this.form = "human";
    this.numTransformations = 0;
    this.hungry = false;
  }
  completeTransformation() {
    if (!this.numTransformations) {
      this.numTransformations += 1;
      this.form = "wolf";
      this.hungry = true;
      return `Aaa-Woooo!`;
    } else if (this.numTransformations === 1) {
      this.numTransformations = 0;
      this.form = "human";
      this.hungry = false;
      return `Where are I?`;
    }
  }
  eatVictim(victim) {
    if (this.hungry === true) {
      this.form = "human";
      victim.alive = false;
      return `Yum, ${victim.name} was delicious.`;
    } else {
      return `No way am I eating ${victim.name}, I'd like a burger!`;
    }
  }
}
module.exports = Werewolf;
