class LunchBox {
    constructor (lunchbox) {
        this.owner = lunchbox.owner; 
        this.material = lunchbox.madeOf;
        this.shape = lunchbox.shape;
        this.color = lunchbox.color;
        this.snacks = [];
    }
    acquireSnack(snack) {
        this.snacks.push(snack);
        snack.isInLunchBox = true;
    }
    findHealthySnacks() {
        var healthySnacks = []
        this.snacks.forEach((snack) => {
            if (snack.checkForHealthy()) {
                healthySnacks.push(snack.type);
            };
        })
        return healthySnacks;
    }
}

module.exports = LunchBox;
