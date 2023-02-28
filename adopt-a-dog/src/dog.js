class Dog {
  constructor(dog) {
    this.name = dog.name;
    this.age = dog.age;
    this.hungry = true;
    this.energyLevel = 5;
    this.friends = [];
  }
  eat() {
    if (this.hungry === true) {
      this.hungry = false;
      return `Yum!`;
    } else {
      return `I refuse to eat.`;
    }
  }
  fetchBall() {
    if (this.energyLevel > 3) {
      this.energyLevel -= 1;
      return `This is fun!`;
    } else {
      return `Nah, I'm going to sleep instead.`;
    }
  }
  sleep() {
    if (this.energyLevel < 10) {
      this.energyLevel += 1;
    } else {
      return `I have too much energy to rest. I'm going to chew something instead.`;
    }
  }
  makeNewFriend(dog) {
    this.friends.push(dog.name);
  }
}

module.exports = Dog;
