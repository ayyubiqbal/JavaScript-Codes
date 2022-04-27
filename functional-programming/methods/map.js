// map return a new value, which can be stored/assigned in a variable, on the other hand, forEach don't return any kind of value, it only do some operation to array element.

var arr = [1, 2, 3, 4, 5]

var newArr = arr.map(function (value) {
    return value * value;
})

console.log(arr);
console.log(newArr);

console.log('--------------------');

function map(arr, cb) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        // var temp = arr[i] * arr[i];
        var temp = cb(arr[i], i, arr);
        newArr.push(temp)
    }
    return newArr;
}

var sqr = map(arr, function (value) {
    return value * value;
})
console.log(sqr);

var cube = map(arr, function (value) {
    return value * value * value;
})

console.log(cube);

var tenTimes = map(arr, function (value) {
    return 10 * value;
})

console.log(tenTimes);

var fiveTimes = map(arr, function (value) {
    return value * 5;
})

console.log(fiveTimes);