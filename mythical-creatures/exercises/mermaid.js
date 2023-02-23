var Shell = require('./shell');

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
        var upperArr = words.split(' ').map(x => x.toUpperCase());
        var singingArr = upperArr.map(x => x + x.slice(x.length - 1) + x.slice(x.length - 1));
        var singingWords = singingArr.join(' ');
        if(this.form === "goddess") {
            return `~~~${singingWords}~~~`;
        } else {
            return `Only a true goddess can sing- I don't want to be off pitch!`;
        }
    }
    makeMermaid(woman) {
        if(this.form === "goddess") {
            var firstBlueShell = this.shells.find(x => x.color === 'blue');
            var index = this.shells.indexOf(firstBlueShell)
            this.shells.splice(index, 1)
            woman.shells.push(firstBlueShell);
            woman.form = 'mermaid';
            return `Welcome to the sea, ${woman.name}!`;
        } else {
            return `Only a true goddess with a blue shell can make other mermaids!`;
        }
    }
}

module.exports = Mermaid;