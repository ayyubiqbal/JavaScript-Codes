var arr = [4, 5, 2, 9, 10, 16]

/* var find = arr.find(function (value) {
    return value === 10;
})

console.log(find);

var findIndex = arr.findIndex(function (value) {
    return value === 10;
})

console.log(findIndex); */

function myFind(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            // return arr[i]
            return i;
        }
    }
}
console.log(myFind(arr, function (value) {
    return value === 10;
}));
