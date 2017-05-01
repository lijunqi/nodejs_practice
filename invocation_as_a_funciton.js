
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
