
function fn(a,b){
	console.log('fn..')
	return a + b
}

function* gen(x) {
	console.log("x = " + x)
	let y = yield fn(x,100) + 3
	console.log('not execute first time')
	console.log('y = ' + y)
	return 200
}

let g = gen(1)

console.log('step 1')
var res = g.next()
console.log('step 2')
console.log(res)
console.log('step 3')
console.log(g.next())
console.log('step 4')
console.log(g.next())
console.log('end')

var r = {
	"a": 1,
	"b": 2,
	"c": []
};

var r2 = {
	"a": 3,
	"b": 5,
	"c": []
};

r.c = r2;

console.log('r = ' + JSON.stringify(r));
