'use strict'

var buf = new Buffer('hello', 'binary');

console.log('buf = ', buf);

var str = buf.toString();

console.log('str = ', str);

var binBuf = new Buffer(str, 'binary');

console.log('binBuf = ', binBuf);