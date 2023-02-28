class Bag {
  constructor() {
    this.empty = true;
    this.candies = [];
    this.count = 0;
  }
  fill(candy) {
    this.candies.push(candy);
    this.count = this.candies.length;
    this.empty = false;
  }
  contains(type) {
    var typeCount = 0;
    this.candies.forEach((candy) =>
      candy.type === type ? (typeCount += 1) : typeCount
    );
    if (typeCount > 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Bag;
