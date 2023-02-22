class Sphinx {
    constructor() {
        this.riddles = [];
        this.heroesEaten = 0;
    }
    collectRiddle(riddle) {
        if (this.riddles.length < 3) {
            this.riddles.push(riddle);
        } else {
            this.riddles.shift();
            this.riddles.push(riddle);
        }
    }
    attemptAnswer(answer) {
        var theAnswer = answer
        for (var i = 0; i < this.riddles.length; i++) {
            if (i === this.riddles.length - 1 && this.riddles[i].answer !== answer) {
                this.heroesEaten += 1;
            } else if (i === this.riddles.length - 1 && this.riddles[i].answer === answer) {
                this.riddles.splice(i,1);
                return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${theAnswer}"???`
            } else if (this.riddles[i].answer === answer) {
                this.riddles.splice(i,1);
                return `That wasn't that hard, I bet you don't get the next one`;
            } 
        }
    }
}
module.exports = Sphinx;