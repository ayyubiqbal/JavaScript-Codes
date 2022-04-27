var arr = [1, 2, 3, 4, 5]

var sum = 0;
arr.forEach(function (value, index, array) {
    sum += value;
    console.log(value);
})

console.log(sum);
console.log(arr);

function forEach(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr)
    }
}

var add = 0;
forEach(arr, function (value, index, array) {
    add += value;
    console.log(value, index, array);
});
console.log(add);

forEach(arr, function (value, index, array) {
    array[index] = value * 5;
})
console.log(arr);