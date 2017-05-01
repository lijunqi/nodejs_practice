
'use strict';

function whatsMyContext () {
    return this;
}

if (whatsMyContext() === undefined) {
    console.log("whatsMyContext() is undefined.");
}

var getMyThis = whatsMyContext;
if (getMyThis() === undefined) {
    console.log("getMyThis() is undefined.");
}

/* 
 * When we invoke a function as a method of an object,
 * that object becomes the function context and is available
 * within the function via the 'this' parameter.
 */
var ninja1 = {
    getMyThis: whatsMyContext
}
if (ninja1.getMyThis() === ninja1) {
    console.log("ninja1.getMyThis() is ninja1.");
}

var ninja2 = {
    getMyThis: whatsMyContext
}
if (ninja2.getMyThis() === ninja2) {
    console.log("ninja2.getMyThis() is ninja2.");
}

if (ninja1 === ninja2) {
    console.log('equal');
}
else {
    console.log('not equal');
}