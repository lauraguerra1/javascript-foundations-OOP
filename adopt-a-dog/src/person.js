var Dog = require("./dog.js");

class Person {
  constructor(name, dog) {
    this.name = name;
    this.dog = dog;
  }
  fillFoodBowl() {
    this.dog.hungry = false;
  }
  throwBall() {
    this.dog.fetchBall();
    return `${this.dog.name} loves playing fetch!`;
  }
  introduceNewFriends(dog) {
    this.dog.friends.push(dog.name);
  }
  adoptAPup(name, age) {
    var newDog = new Dog({ name: name, age: age });
    if (this.dog === undefined) {
      this.dog = newDog;
    } else {
      return `You can't adopt ${newDog.name}. You already have ${this.dog.name}!`;
    }
  }
}

module.exports = Person;
