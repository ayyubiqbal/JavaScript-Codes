/* function sample(a, b) {
    var c = a + b;
    var d = a - b;
    var result = sum(c, d)
    return result;

} */

function sum(a, b) {
    return a + b;
}

function sample(a, b, callBack) {
    var c = a + b;
    var d = a - b;
    var result = callBack(c, d) // 30, 20, 125
    return result;
}

var sum = sample(15, 10, sum)
console.log(sum);

var sub = sample(15, 10, function (c, d) {
    return c - d;
})
console.log(sub);

var times = sample(15, 10, function (c, d) {
    return c * d;
})
console.log(times);


