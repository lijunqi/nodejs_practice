'use strict';

function juggle() {
    var result = 0;
    for (var n = 0; n < arguments.length; n++) {
        result += arguments[n];
    }
    this.result = result;
}

var ninja1 = {};
var ninja2 = {};

juggle.apply(ninja1, [1,2,3,4]);
juggle.call(ninja2, 5, 6, 7, 8);

if (ninja1.result === 10) {
    console.log("juggled via apply");
}

if (ninja2.result === 26) {
    console.log("juggled via call");
}

// forcing the function context in callbacks
function forEach(list, callback) {
    for (var n = 0; n < list.length; n++) {
        callback.call(list[n], n);
    }
}

var weapons = [
    { type: 'shuriken' },
    { type: 'katana' },
    { type: 'nunchucks' }
];

forEach(weapons, function(index){
    if (this === weapons[index]){
        console.log('Got the expected value of ' + weapons[index].type);
    }
});

/*
 * Arrow functions pick up the value of the this parameter at the moment of their creation. 
 * 
 * Arrow functions don't get their own implicit this parameter when we call them;
 * instead they remember the value of the this parameter at the time they were created.
 * 
 * But standard function not.
 */
console.log('========= Arrow function callback =========');
var elem = {
    handler: function (btnClick) {
        btnClick();
    }
};

function Button() {
    this.clicked = false;
    this.click = () => {
        this.clicked = true;
    }
}
var btn1 = new Button();
elem.handler(btn1.click);
if (btn1.clicked === true) {
    console.log('Arrow function Context is Button this.');
}

var btnObj1 = {
    clicked: false,
    click: () => {
        if (this === undefined) {
            console.log('Undefined: Object literal Arrow function this === undefined.');
        }
        else {
            this.clicked = true;
        }
    }
}
elem.handler(btnObj1.click);
if (btnObj1.clicked === true) {
    console.log('Arrow function Context is Object literal this.');
}
else {
    console.log('Arrow function Context is NOT Object literal this.');
}


// standard function
console.log('========= Standard function callback =========');

function Button2() {
    this.clicked = false;
    this.click = function () {
        if (this === undefined) {
            console.log('Undefined: Button2 standard function this === undefined.');
        }
        else {
            this.clicked = true;
        }
    }
}
var btn2 = new Button2();
elem.handler(btn2.click);
if (btn2.clicked === true) {
    console.log('Standard function use Button2 this.');
}


var btnObj2 = {
    clicked: false,
    click: function () {
        if (this === undefined) {
            console.log('Undefined: Object literal standard function this === undefined.');
        }
        else {
            this.clicked = true;
        }
    }
}
elem.handler(btnObj2.click);
if (btnObj2.clicked === true) {
    console.log('Standard function Context is Object literal this.');
}

/* 
 * Bind function creates a new function. This function has the same body,
 * but its context is always bound to a certain object, regardless of the way we invoke it.
 */
elem.handler(btnObj2.click.bind(btnObj2));
if (btnObj2.clicked === true) {
    console.log('Bind Standard function Context is Object literal this.');
}