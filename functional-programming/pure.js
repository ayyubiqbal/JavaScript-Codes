// Pure Function
/* 
`It returns the same result if given the same arguments`
`It does not cause any observable side effects`
*/

function sqr(n) {
    return n * n;
}
console.log(sqr(2));
console.log(sqr(2));
console.log(sqr(2));


// side effects example
var n = 10;
function MyFunc() {
    n = 100;
}
MyFunc()
console.log(n);

var point = {
    x: 10,
    y: 20,
}

function printPoint(point) {
    point.x = 100;
    point.y = 200;
    console.log('inner', point);
}

console.log('outer, before call', point);
printPoint(point)
console.log('outer, after call', point);