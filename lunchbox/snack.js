class Snack {
    constructor(type) {
        this.type = type; 
        this.deliciousLevel = 'extra';
        this.amount = 100;
        this.isInLunchBox = false;
     }
     getEaten(){
        this.amount -= 10;
        if(this.amount <= 20) {
            this.cuttingItClose = true
        } else {
            this.cuttingItClose = false;
        }
     }
     checkForHealthy() {
        if (this.type.toLowerCase().includes('fruit')) {
            return true;
        } else {
            return false;
        }
     }
}

module.exports = Snack;
