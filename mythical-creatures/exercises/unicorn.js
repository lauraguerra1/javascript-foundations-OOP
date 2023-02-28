class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || "white";
    this.says = function (speech) {
      return `**;* ${speech} *;**`;
    };
  }
  isWhite() {
    if (this.color !== "white") {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = Unicorn;
