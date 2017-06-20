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


var fibonacci = function () {
	var memo = [0, 1];
  var fib = function (n) {
  	console.log('memo size = ', memo.length);
    var result = memo[n];
    if (typeof result !== 'number') {
    	result = fib(n - 1) + fib(n - 2);
      memo[n] = result;
    }
    return result;
  }
  return fib;
};


var fn = fibonacci();
console.log(fn(10));