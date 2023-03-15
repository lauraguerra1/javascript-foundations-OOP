class Settler {
  constructor(settler) {
    this.name = settler.name;
    this.age = settler.age;
    this.nationality = settler.nationality || "unknown";
    this.ailments = [];
    this.status = "healthy";
  }
  experienceDistress(ailment) {
    if (this.status === "dead") {
    } else if (this.ailments.length > 1) {
      this.ailments.push(ailment);
      this.status = "dead";
    } else if (this.ailments.length) {
      this.ailments.push(ailment);
      this.status = "poor";
    } else {
      this.ailments.push(ailment);
      this.status = "fair";
    }
  }
  heal() {
    if (this.status === "dead") {
      return `Sorry, we can't heal a corpse. ${this.name} needs a proper burial!`;
    } else {
      this.ailments = [];
      this.status = "healthy";
    }
  }
}

module.exports = Settler;
