class Centaur {
    constructor(centaur) {
        this.name = centaur.name;
        this.breed = centaur.type;
        this.cranky = false;
        this.standing = true;
        this.layingDown = false;
        this.exercise = 0;
    }
    shootBow() {
      if (this.exercise < 2 && this.standing === true) {
            this.exercise += 1;
            return `Twang!!!`; 
        } else if (this.layingDown === true) {
            return `NO!`
        } else {
            this.cranky = true;
            return `NO!`;
        }
    }
    run() {
        if (this.exercise < 2 && this.standing === true) {
            this.exercise += 1;
            return `Clop clop clop clop!!!`;
        } else if (this.layingDown === true) {
            return `NO!`;
        } else {
            this.cranky = true;
            return `NO!`;
        }
    }
    layDown() {
        this.layingDown = true; 
        this.standing = false; 
    }
    standUp() {
        this.standing = true; 
        this.layingDown = false;
    }
    sleep() {
        if (this.standing === true) {
            return `NO!`;
        } else {
            this.exercise = 0;
            this.cranky = false; 
            return `ZZZZ`;
        }
    }
    drinkPotion() {
        if (this.layingDown === true) {
            return `Not while I'm laying down!`;
        } else {
            this.exercise = 0;
            this.cranky = false;
        }
    }
}
module.exports = Centaur;