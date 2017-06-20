'use strict'

/* 
 * In JavaScript, inheritance is implemented with prototyping.
 * 
 * Every object can have a reference to its prototype.
 * The object's prototype property is an internal property
 * that's not directly accessible.
 * 
 * Every object can have a prototype, and an object's prototype
 * can also have a prototype, and so on, forming a prototype chain.
 * 
 * 1. a function, when created, gets a new object
 *    that's assigned to its prototype property
 * 
 * 2. When we use a function as a constructor (by calling new Ninja())
 *    the prototype of the newly constructed object is set to
 *    the object referenced by the constructor function's prototype
 */

/* * * prototype chain * * */
{
    const yoshi = { skulk: true };
    const hattori = { sneak: true };
    const kuma = { creep: true };

    if ("creep" in yoshi) {
        console.log('Yoshi can also creep.');
    }
    else {
        console.log('Yoshi can not creep.');
    }

    // set hattori as prototype of yoshi
    Object.setPrototypeOf(yoshi, hattori);
    Object.setPrototypeOf(hattori, kuma);

    if ("creep" in yoshi) {
        console.log('Yoshi can also creep.');
    }
}


/* * * Instance properties * * */
{
    // This isn't anything we'd advise doing in real-world code.
    function Ninja() {
        this.swung = false;
        this.swingSword = function () {
            console.log(`Instance swingSword. ${!this.swung}`);
        };
    }

    Ninja.prototype.swingSword = function () {
        console.log(`Prototype swingSword. ${this.swung}`);
    }

    const ninja = new Ninja();
    ninja.swingSword();
}

{
    function Ninja() {}
    console.log(`type = ${typeof Ninja}`);
    console.log(`type = ${typeof Ninja.prototype}`);
    var a = [];
    console.log(`type = ${typeof a}`);
}