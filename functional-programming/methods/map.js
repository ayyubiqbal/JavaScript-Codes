// forEach modify the original array and map return a new array

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