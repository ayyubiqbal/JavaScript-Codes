function add(a, b, c) {
    return a + b + c
}
console.log(add(10, 15, 20));

// -------------------------------
console.log('-------------------------------');

function curring(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
// var result = curring(10)(15)(20)
// console.log(result);

var aA = curring(10)
var bB = aA(15)
var cC = bB(20)
console.log(cC);