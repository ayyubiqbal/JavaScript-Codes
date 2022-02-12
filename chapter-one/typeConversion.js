var str = '100';
var num = 100;

console.log(typeof(str * 2))
console.log(typeof(str + 2))
console.log(typeof(Number(str) + 1024))

console.log(num.toString())
console.log(typeof(num.toString()))

console.log(typeof Infinity)

// falsy values
/* 
""
0
null
undefine
NaN
*/

console.log(Boolean(''))
console.log(Boolean('Hello'))
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(NaN))
console.log(Boolean(undefined))
console.log(false)

var x = true;
console.log(x.toString())


// Constructor
String(), Number(), Boolean()