// A variable without value always store "undefine"
var abc
function undeFunc(a, b, c) {
    console.log(arguments);
}
undeFunc()


// A variable with unknown value can store "null"
var xyz = null

console.log(abc)
console.log(xyz)