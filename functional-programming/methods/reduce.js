var arr = [1, 2, 3, 4, 5]

/* var result = arr.reduce(function (acc, cur) {
    return acc += cur;
})

console.log(result); */

function reduceFunc(arr, cb, acc) {
    console.log(`before loop ${acc}`);
    for (var i = 0; i < arr.length; i++) {
        acc = cb(acc, arr[i])
        console.log(`inner loop ${acc}`);
    }
    console.log(`after loop ${acc}`);

    return acc;
}

var result = reduceFunc(arr, function (acc, cur) {
    return acc + cur;
}, 0)

console.log(result);

var max = reduceFunc(arr, function (acc, cur) {
    return Math.max(acc, cur)
}, 0)

console.log(max);

var min = reduceFunc(arr, function (acc, cur) {
    return Math.min(acc, cur)
}, arr[0])