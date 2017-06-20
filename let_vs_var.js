'use strict'

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