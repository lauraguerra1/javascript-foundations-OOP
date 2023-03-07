class Part {
  constructor(part) {
    this.name = part.name;
    this.type = part.type;
    this.value = part.value;
    this.broken = false;
    this.isValid = this.validity();
  }
  checkForValidity() {
    if (!this.name) {
      return `This part needs a name!`;
    } else if (!this.type) {
      return `This part needs a type!`;
    } else if (!this.value) {
      return `This part needs a value!`;
    }
  }
  validity() {
    if (!this.name || !this.type || !this.value) {
      return false;
    } else {
      return true;
    }
  }
}
module.exports = Part;
