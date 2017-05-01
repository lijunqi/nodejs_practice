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
