'use strict';

function Ninja() {
	this.skulk = function () {
		return this;
	};
}

/*
 * When invoked with the keyword new, an empty object instance is created and
 * passed to the function as its function context, the this parameter.
 */
var ninja1 = new Ninja();
var ninja2 = new Ninja();

if (ninja1.skulk() === ninja1) {
	console.log("The 1st ninja is skulking");
}
else {
	console.log("The 1st ninja is not skulking");
}

if (ninja2.skulk() === ninja2) {
	console.log("The 2nd ninja is skulking");
}
else {
	console.log("The 2nd ninja is not skulking");
}



function Ninja2() {
	this.skulk = function () {
		return true;
	};
	return 1;
}

// Error: cannot set property 'skulk' of undefined
// if (Ninja2() === 1) {
// 	console.log("Return value honored when not called as a constructor.");
// }

/* 
 * Constructor return values
 * constructors are intended to initialize newly created objects,
 * and the newly constructed object is returned as a result of
 * a constructor invocation (via the new operator).
 */
var ninja3 = new Ninja2();
if (typeof ninja3 === "object" && typeof ninja3.skulk === "function") {
	console.log("Object returned when called as a constructor.");
}


/*
 * If the constructor returns an object,
 * that object is returned as the value of the whole new expression,
 * and the newly constructed object passed as this to the constructor is discarded
 * 
 * If, however, a nonobject is returned from the constructor,
 * the returned value is ignored, and the newly created object is returned
 */
var puppet = {
	rules: false
};

function Emperor () {
	this.rules = true;
	return puppet;
}

var emperor = new Emperor();
if (emperor === puppet) {
	console.log("The emperor is merely a puppet!");
}
if (emperor.rules === false) {
	console.log("The puppet does not know how to rule!");
}
