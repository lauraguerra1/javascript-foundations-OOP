class TrickOrTreater {
    constructor(costume, bag) {
        this.dressedUpAs = costume.style; 
        this.bag = bag;
        this.hasCandy = false; 
        this.countCandies = 0;
    }
    putCandyInBag(candy) {
        this.hasCandy = true; 
        this.bag.fill(candy);
        this.countCandies = this.bag.count
    }
    eat(candy) {
        var index = this.bag.candies.indexOf(candy)
        this.bag.candies.splice(index, 1)
        this.countCandies = this.bag.candies.length
        if (!this.bag.count) {
            this.bag.empty = true;
        }
    }
}
module.exports = TrickOrTreater;