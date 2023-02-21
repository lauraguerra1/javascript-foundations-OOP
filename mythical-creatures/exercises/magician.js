class Magician {
    constructor(magician) {
        this.name = `The Great ${magician.name}`;
        this.assistant = magician.assistant;
        this.favoriteAccessory = magician.clothing || 'top hat';
        this.confidencePercentage = 10;
    }
    performIncantation(words) {
        return `${words.toUpperCase()}!`;
    }
    performTrick() {
        if (this.confidencePercentage < 100) {
            this.confidencePercentage += 10;
        }
        return `PULL RABBIT FROM ${this.favoriteAccessory.toUpperCase()}`;
    }
    performShowStopper() {
        if (this.confidencePercentage === 100 && this.assistant === true) {
            return `WOW! The magician totally just sawed that person in half!`;
        } else {
            return `Oh no, this trick is not ready!`;
        }
    }
}

module.exports = Magician; 
