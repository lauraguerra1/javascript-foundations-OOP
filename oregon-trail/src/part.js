class Part {
  constructor(type) {
    this.type = type;
    this.broken = false;
    this.repairCount = 0;
  }
  break() {
    this.broken = true;
  }
  repair() {
    if (!this.repairCount) {
      this.broken = false;
      this.repairCount += 1;
    } else {
      return `This ${this.type} has seen better days, we'll need a brand new one!`;
    }
  }
}

module.exports = Part;
