var assert = require('chai').assert;
var Mermaid = require('../exercises/mermaid');
var Shell = require('../exercises/shell')
var Woman = require('../exercises/woman')

describe('Mermaid', function() {
    it('should have a name', function() {
        var mermaid = new Mermaid({name: 'Ariel'});

        assert.equal(mermaid.name, 'Ariel')
    });
    it('should have an aquamarine tail by default', function() {
        var mermaid = new Mermaid({name: 'Neptune\'s Daughter'});

        assert.equal(mermaid.name, 'Neptune\'s Daughter');
        assert.equal(mermaid.tail, 'aquamarine')
    });
    it('should be able to have a different colored tail, based on its favorite color', function() {
        var mermaid = new Mermaid({name: 'Alana', favoriteColor: 'purple'});

        assert.equal(mermaid.name, 'Alana');
    });
    it('should start off in mermaid form', function() {
        var mermaid = new Mermaid({name: 'Atargatis'});

        assert.equal(mermaid.form, 'mermaid');
    });

    // SKIP TO BOTTOM TO PASS TESTS FOR SHELL & WOMAN BEFORE MOVING FORWARD
    it('should start with 0 shells and be able to collect shells', function() {
        var mermaid = new Mermaid({});
        var shell = new Shell();

        assert.deepEqual(mermaid.shells, []);

        mermaid.collectShell(shell);

        assert.equal(mermaid.shells.length, 1);
        assert.instanceOf(mermaid.shells[0], Shell);
        assert.equal(mermaid.shells[0].color, 'white');
    });
    it('should not be able to collect more than 10 shells', function() {
        var mermaid = new Mermaid({});
        var pinkShell = new Shell('pink');

        function collectPinkShells() {
            for(var i = 0; i < 10; i++) {
              mermaid.collectShell(pinkShell);
            }
          }
      
          collectPinkShells();

        assert.equal(mermaid.shells.length, 10)
        assert.equal(mermaid.collectShell(pinkShell), `I already have all the shells I need!`);
    }); 
    it('should change to human form after shapeshifting', function() {
        var mermaid = new Mermaid({});

        mermaid.shapeShift(); 

        assert.equal(mermaid.form, 'human');
    })
    it('should change back to mermaid form after shapeshifting', function() {
        var mermaid = new Mermaid({});

        assert.equal(mermaid.form, 'mermaid');

        mermaid.shapeShift(); 
        assert.equal(mermaid.form, 'human');

        mermaid.shapeShift();
        assert.equal(mermaid.form, 'mermaid');
    });
    it('should only be able to shapeshift to goddess form after collecting 10 shells', function() {
        var mermaid = new Mermaid({});
        var yellowShell = new Shell('yellow');
        function collectYellowShells() {
            for(var i = 0; i < 10; i++) {
              mermaid.collectShell(yellowShell);
            }
          }
      
          collectYellowShells();

          mermaid.shapeShift(); 

          assert.equal(mermaid.form, 'goddess');
    });
    it('should only be able to sing when in goddess form', function() {
        var ursula = new Mermaid({name: 'Ursula'});
        var ariel = new Mermaid({name: 'Ariel'});
        var blueShell = new Shell('blue');

        function collectBlueShells() {
            for (var i = 0; i < 10; i++) {
                ariel.collectShell(blueShell);
            }
        }
        collectBlueShells();
        ariel.shapeShift();

        assert.equal(ursula.form, 'mermaid');
        assert.equal(ursula.sing('under the sea'), `Only a true goddess can sing- I don't want to be off pitch!`);
        assert.equal(ariel.form, 'goddess');
        assert.equal(ariel.sing('under the sea'), `~~~UNDERRR THEEE SEAAA~~~`);
    })
    it('should be able to change women into mermaids, and greet new mermaids', function() {
        var ariel = new Mermaid({name: 'Ariel'});
        var aletta = new Woman('Aletta');
        var blueShell = new Shell('blue');

        function collectBlueShells() {
            for (var i = 0; i < 10; i++) {
                ariel.collectShell(blueShell);
            }
        }
        collectBlueShells();
        ariel.shapeShift();
        ariel.makeMermaid(aletta);

        assert.instanceOf(aletta, Woman);
        assert.equal(aletta.form, 'mermaid')
        assert.equal(ariel.makeMermaid(aletta), `Welcome to the sea, Aletta!`)
    })
    it('should not be able to change women into mermaids unless in goddess form', function() {
        var ursula = new Mermaid({name: 'Ursula'});
        var melody = new Woman('Melody');
        
        ursula.makeMermaid(melody);

        assert.equal(melody.form, 'human');
        assert.equal(ursula.makeMermaid(melody), `Only a true goddess with a blue shell can make other mermaids!`); 
    });
    it('should give the woman her first blue shell when making her a mermaid', function() {
        var aletta = new Mermaid({name: 'Aletta'});
        var adella = new Woman('Adella');
        var yellowShell = new Shell('yellow');
        var blueShell = new Shell('blue');
        var pinkShell = new Shell('pink');

        function collectMixedShells() {
            for (var i = 0; i < 10; i++) {
                if (i < 5) {
                    aletta.collectShell(yellowShell); 
                } else if (i < 7) {
                    aletta.collectShell(blueShell);
                } else {
                    aletta.collectShell(pinkShell);
                }
            }
        }

        collectMixedShells();
        aletta.shapeShift();

        assert.equal(aletta.shells.length, 10);
        assert.equal(aletta.shells[5].color, 'blue');
        assert.equal(aletta.shells[6].color, 'blue');

        aletta.makeMermaid(adella);

        assert.equal(adella.form, 'mermaid');
        assert.instanceOf(adella.shells[0], Shell);
        assert.equal(adella.shells[0].color, 'blue');
        assert.equal(adella.shells.length, 1);

        assert.equal(aletta.shells.length, 9);
        assert.equal(aletta.shells[5].color, 'blue');
        assert.equal(aletta.shells[6].color, 'pink');
    })
});

describe('Shell', function() {
    it('should be a function', function() {
        assert.isFunction(Shell);
    });
    it('should instantiate our collectible, Shell', function() {
        var shell = new Shell();

        assert.instanceOf(shell, Shell); 
    });
    it('should be white at default and it can have a different color', function() {
        var shell = new Shell(); 
        var blueShell = new Shell('blue');

        assert.equal(shell.color, 'white');
        assert.equal(blueShell.color, 'blue');
    });
});

describe('Woman', function(){
    it('should be a function', function(){
        assert.isFunction(Woman);
    });
    it('should instatiate our friend, Woman', function() {
        var woman = new Woman();

        assert.instanceOf(woman, Woman);
    });
    it('should have a name', function() {
        var woman = new Woman('Melody');

        assert.equal(woman.name, 'Melody');
    });
    it('should start off in human form', function() {
        var woman = new Woman('Aletta');

        assert.equal(woman.form, 'human');
    });
    it('should start off with 0 shells', function() {
        var woman = new Woman();

        assert.deepEqual(woman.shells, []);
    })
});