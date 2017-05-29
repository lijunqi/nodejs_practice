'use strict'

function Ninja() {
    var feints = 0;
    this.getFeints = function() {
        return feints;
    };

    this.feint = function() {
        feints++;
    };
}

var ninja1 = new Ninja();
ninja1.feint();
ninja1.feint();

if (ninja1.feints === undefined) {
    console.log('Private data is inaccessible to us.');
}

if (ninja1.getFeints() === 2) {
    console.log('We are able to access the internal feint count.');
}


var ninja2 = new Ninja();
if (ninja2.getFeints() === 0) {
    console.log('The second ninja object gets its own feints variable.');
}