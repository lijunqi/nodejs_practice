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


/************** Emulating private memebers **************/
/*
 * This technique only provides "static" private state
 * in the example, all instances of SomeConstructor will
 * share the same privateScope.
 */
console.log('****** Emulating private memebers ******');
var SomeConstructor;
{
  let privateScope = {}; // static private member

  SomeConstructor = function SomeConstructor() {
    this.someProperty = 'foo';
    privateScope.hiddenProperty = 'bar';
  }

  SomeConstructor.prototype.showPublic = function() {
    console.log('public property: ', this.someProperty); // foo
  }

  SomeConstructor.prototype.showPrivate = function() {
    console.log('private property:', privateScope.hiddenProperty); // bar
  }

  SomeConstructor.prototype.setPublic = function (val) {
    this.someProperty = val;
  }
}

var myInstance = new SomeConstructor();

myInstance.showPublic();
myInstance.showPrivate();

myInstance.setPublic('luna');
myInstance.showPublic();

var yourInst = new SomeConstructor();
yourInst.showPublic();
yourInst.showPrivate();

// console.log(privateScope.hiddenProperty); // error