'use strict'

// Deprecated: new Buffer(string[, encoding])
// Use Buffer.from(string[, encoding]) instead
var buf = Buffer.from('hello', 'binary');

console.log('buf = ', buf);

var str = buf.toString();

console.log('str = ', str);

var binBuf = new Buffer(str, 'binary');

console.log('binBuf = ', binBuf);

// Deprecated: new Buffer(size)
// Use Buffer.alloc(size[, fill[, encoding]]) instead
// fill: avalue to pre-fill the new Buffer with. Default:0
const zeroBuf = Buffer.alloc(5);
console.log(zeroBuf)
