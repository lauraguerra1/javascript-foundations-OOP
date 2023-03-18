class Wagon {
  constructor(wagon) {
    this.title = wagon.name;
    this.wheels = wagon.wheels || [];
    this.axles = wagon.axles || [];
    this.oxen = wagon.oxen || [];
    this.yokes = wagon.yokes || [];
    this.food = wagon.food || [];
    this.ammunition = wagon.ammunition;
    this.clothes = wagon.clothes;
    this.settlers = wagon.settlers || [];
    this.workingWheels = null;
    this.workingAxles = null;
    this.workingOxen = null;
    this.livingSettler = null;
  }
  addPart(part) {
    var attribute = `${part.type}s`;
    var otherAttribute = `${part.type}en`;
    if (Object.keys(this).includes(attribute)) {
      this[attribute].push(part);
    } else {
      this[otherAttribute].push(part);
    }
  }
  checkWheels() {
    this.wheels.every((wheel) =>
      wheel.broken === false
        ? (this.workingWheels = true)
        : (this.workingWheels = false)
    );
  }
  checkAxles() {
    this.axles.every((axle) =>
      axle.broken === false
        ? (this.workingAxles = true)
        : (this.workingAxles = false)
    );
  }
  checkOxen() {
    this.oxen.every((ox) =>
      ox.broken === false
        ? (this.workingOxen = true)
        : (this.workingOxen = false)
    );
  }
  checkSettlers() {
    this.settlers.forEach((settler) =>
      settler.status !== "dead"
        ? (this.livingSettler = true)
        : this.livingSettler
    );
  }
  canTravel() {
    this.checkWheels();
    this.checkAxles();
    this.checkOxen();
    this.checkSettlers();
    if (
      this.wheels.length === 4 &&
      this.axles.length === 2 &&
      this.oxen.length >= 2 &&
      this.workingWheels === true &&
      this.workingAxles === true &&
      this.workingOxen === true &&
      this.livingSettler === true &&
      this.oxen.length / this.yokes.length === 2
    ) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Wagon;
