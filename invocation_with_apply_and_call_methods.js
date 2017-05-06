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
 * arrow functions don't get their own implicit this parameter when we call them;
 * instead they remember the value of the this parameter at the time they were created.
 */
function Button() {
    this.name = 'button';
    this.click = () => {
        console.log('button name is ' + this.name);
    }
}

var btn1 = new Button();
btn1.click();

var btn2 = {
    name: 'btn2',
    click: () => {
        console.log('btn name is ' + this.name);
    }
}
btn2.click();