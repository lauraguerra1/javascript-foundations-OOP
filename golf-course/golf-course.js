class GolfCourse {
    constructor (name, difficulty, openings, features) {
        this.name = name; 
        this.difficulty = difficulty;
        this.openings = openings;
        this.features = features;
        this.currentlyPlaying = [];
    }
    checkInGroup(group) {
        if (this.openings >= group.length) {
            var names = group.map(golfer => golfer.name);
            names.forEach(name => this.currentlyPlaying.unshift(name));
            this.openings -= group.length;
            return `You're checked in. Have fun!`
        } else {
            return `Sorry, we are currently booked! Please come back later.`
        }
    }
}

module.exports = GolfCourse;
