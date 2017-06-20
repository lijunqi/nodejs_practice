'use strict'

/**
 * Scoping rules
 * Variables declared by let have as their scope the block in which
 * they are defined, as well as in any contained sub-blocks.
 * The main difference is that:
 * the scope of a var variable is the entire enclosing function:
 */

function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log('var x2 = ', x);  // 2
  }
  console.log('var x1 = ', x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log('let x2 = ', x);  // 2
  }
  console.log('let x1 = ', x);  // 1
}

varTest();
letTest();

const Greeters = [];

for (var i = 0; i < 10; i++)
{
    Greeters.push(function(){
        return console.log(i);
    });
}

// if use 'var i', i still alive, but 'let i' undefined
console.log('i = ', i);

// if use 'let' instead of 'var', result is 0,1,2
Greeters[0](); // 10
Greeters[1](); // 10
Greeters[2](); // 10


/************** Redeclaration **************/
let me = 'foo';
// let me = 'bar'; // SyntaxError: Identifier 'me' has already been declared

var you = 'foo';
var you = 'bar'; // No problem, `me` is replaced.