'use strict'

// example
console.log('****** closure ******');
var outerValue = 'samurai';
var later;
function outerFunction() {
    var innerValue = 'ninja';
    function innerFunction() {
        if (outerValue === 'samurai'){
            console.log('I can see the samurai.');
        }
        if (innerValue === 'ninja') {
            console.log('I can see the ninja.');
        }
    }

    later = innerFunction;
}
outerFunction();
later();

// example

// Mimicking private member
// ninja1.feints is undefined
console.log('****** Mimicking private member ******');
function Ninja() {
    var feints = 0;
    this.getFeints = function() { // getter
        return feints;
    };

    this.feint = function() { // setter
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


console.log('****** memorize ******');
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


console.log('****** Creating closures in loops: A common mistake ******');
/* 
 * The reason is that the functions assigned to getHelp are closures;
 * they consist of the function definition and
 * the captured environment from the setupHelp function's scope.
 * !!! Three closures have been created by the loop,
 * !!! but each one shares the same single lexical environment,
 * which has a variable with changing values (item.help).
 * The value of item.help is determined when the getHelp are executed.
 * Because the loop has already run its course by that time,
 * the item variable object (shared by all three closures)
 * has been left pointing to the last entry in the helpText list.
 */
var getHelp = {};
function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    let item = helpText[i]; // if use var, all results is 'age'
    getHelp[item.id] = function() {
      console.log(`${item.id} help message: ${item.help}`);
    }
  }
}

setupHelp();
getHelp['email']();
getHelp['name']();
getHelp['age']();