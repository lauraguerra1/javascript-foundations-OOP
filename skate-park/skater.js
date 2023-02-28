class Skater {
    constructor(skater) {
        this.name = skater.name;
        this.skill = skater.skill;
        this.tricks = skater.tricks;
        this.money = skater.cash;
        this.frustration = 0;
    }
    practice(trick) {
        if (this.frustration < 2 && this.tricks[`${trick}`] === false){
            this.frustration += 1;
        } else if (this.tricks[`${trick}`] === false) {
            this.frustration = 0;
            this.tricks[`${trick}`] = true; 
            return `I just learned to ${trick}!!!`
        }
    }
}
module.exports = Skater;