class Skier {
    constructor(name, ticket) {
        this.name = name; 
        this.hasLiftTicket = ticket;
        this.skillLevel = 1;
        this.nextSlope = 'green circle';
    }
    takeLesson() {
        if (this.skillLevel < 5) {
        this.skillLevel += 1;
        }
    }
    pickSlope() {
        if (this.skillLevel > 2 && this.skillLevel < 5) {
            this.nextSlope = 'blue square';
        } else if (this.skillLevel === 5) {
            this.nextSlope = 'black diamond'
        }
    }
}

module.exports = Skier;