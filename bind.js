
var cli = require("myModule");

cli();


/**************** bind ********************/

this.x = 9;    // this refers to global "window" object here in the browser
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var retrieveX = module.getX;
console.log(retrieveX());
// returns 9 - The function gets invoked at the global scope

// Create a new function with 'this' bound to module
// New programmers might confuse the
// global var x with module's property x
var boundGetX = retrieveX.bind(module);
console.log(boundGetX()); // 81

var boundGetX2 = retrieveX.bind(this);
console.log(boundGetX2()); // 9


/**************** Arrow funciton ********************/

var greet = name => {
	return 'Greetings ' + name;
};

console.log(greet('jacky'));

var defaultGreet = () => { return 'default greet'; }

console.log(defaultGreet());


/**************** rest parameter ********************/
/* By prefixing the last-named argument of a function with
 * an ellipsis(...), we turn it into an array called the rest parameters
 */

function multiMax(first, ...remainNum) {
  var sorted = remainNum.sort(function(a, b) {
    return b - a;
  });
  return first * sorted[0];
}
console.log(multiMax(3, 1, 2, 3));


/**************** argument object ********************/
/* argument object is not an array.
 * use strict mode to avoid arguments aliasing
 */

function infiltrate(person) {
  arguments[0] = 'ninja';
  console.log(person);
}

var p = 'gardener';
infiltrate(p);
console.log(p);