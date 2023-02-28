class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.timesAte = 0;
    this.greet = function () {
      return `Hi, ${rider}!`;
    };
  }
  eat() {
    this.timesAte += 1;
    if (this.timesAte === 3) {
      this.hungry = false;
      this.timesAte = 0;
    }
  }
  fly() {
    this.hungry = true;
  }
}

module.exports = Dragon;
