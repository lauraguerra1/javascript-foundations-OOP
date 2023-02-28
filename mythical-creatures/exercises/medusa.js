var Person = require("./person");
var Statue = require("./statue");

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(victim) {
    var victim = new Statue(victim.name);
    if (this.statues.length < 3) {
      this.statues.push(victim);
    } else {
      var personName = this.statues[0].name;
      this.statues.shift();
      this.statues.push(victim);
      return new Person(personName, "relieved");
    }
  }
}

module.exports = Medusa;
