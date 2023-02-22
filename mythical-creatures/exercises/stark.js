var Direwolf = require('./direwolf');

class Stark {
    constructor(stark){
        this.name = stark.name;
        this.location = stark.area || 'Winterfell';
        this.safe = false;
    }
    sayHouseWords() {
        if (this.safe === true) {
            return `The North Remembers`;
        } else {
            return `Winter is Coming`;
        }
    }
    callDirewolf(name, home) {
        var direwolf = new Direwolf(name, home); 
        direwolf.home = this.location;
        direwolf.starksToProtect.push(this);
        this.safe = true; 
        return direwolf;
    }
}

module.exports = Stark;