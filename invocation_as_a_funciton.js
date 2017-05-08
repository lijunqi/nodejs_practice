
/*
 * - If a function is invoked as a function, the value of the this parameter is usually
 *   the global window object in nonstrict mode, and undefined in strict mode.
 * 
 * – If a function is invoked as a method,
 *   the value of the this parameter is usually the object on which the function was invoked.
 * 
 * – If a function is invoked as a constructor, the value of the this parameter is
 *   the newly constructed object.
 * 
 * – If a function is invoked through call and apply, the value of the this
 *   parameter is the first argument supplied to call and apply.
*/

function ninja() {
    return this; // __proto__ is null
}

function samurai() {
    'use strict';
    return this;
}


if (samurai() === undefined) {
    console.log("In a 'strict' samurai function, the context is undefined");
}
