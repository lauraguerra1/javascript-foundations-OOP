var Shell = require('./shell');
var Woman = require('./woman');

class Mermaid {
    constructor(mermaid) {
        this.name = mermaid.name; 
        this.tail = mermaid.favoriteColor || 'aquamarine';
        this.form = 'mermaid';
        this.shells = [];
    }
    collectShell(shell) {
        var shell = new Shell(shell.color)
        if (this.shells.length < 10) {
            this.shells.push(shell);
        } else {
            return `I already have all the shells I need!`
        }
    }
    shapeShift() {
        if (this.shells.length === 10) {
            this.form = 'goddess';
        } else if (this.form === 'mermaid') {
            this.form = 'human';
        } else {
            this.form = 'mermaid';
        }
    }
    sing(words) {
        var arr = words.split(' ')
        var singingArr = arr.map(x => x.toUpperCase() + x.slice(x.length - 1).toUpperCase() + x.slice(x.length - 1).toUpperCase())
        var singingWords = singingArr.join(' ');
        if(this.form === "goddess") {
            return `~~~${singingWords}~~~`;
        } else {
            return `Only a true goddess can sing- I don't want to be off pitch!`;
        }
    }
    makeMermaid(woman) {
        if(this.form === "goddess") {
            for (var i = 0; i < this.shells.length; i++) {
                if (this.shells[i].color === 'blue') {
                    console.log(this.shells[i])
                    woman.shells.push(this.shells[i]);
                    this.shells.splice(i, 1);
                    woman.form = 'mermaid';
                    return `Welcome to the sea, ${woman.name}!`;
                }
            }
        } else {
            return `Only a true goddess with a blue shell can make other mermaids!`;
        }
    }
}

module.exports = Mermaid;