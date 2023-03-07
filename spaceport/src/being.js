class Being {
  constructor(name, species) {
    this.name = name;
    this.isAlive = true;
    this.species = species;
    this.credits = 0;
  }
  updateCredits(credits) {
    this.credits += credits;
  }
}

module.exports = Being;
