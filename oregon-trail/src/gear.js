class Gear {
  constructor(type, quantity) {
    this.type = type;
    this.quantity = quantity;
  }
  checkForValidity() {
    if (
      this.type === "food" ||
      this.type === "ammunition" ||
      this.type === "food"
    ) {
      return `Great, we'll need lots of ${this.type}!`;
    } else {
      var storedType = this.type;
      this.type = null;
      return `I don't think a ${storedType} will help us.`;
    }
  }
}

module.exports = Gear;
