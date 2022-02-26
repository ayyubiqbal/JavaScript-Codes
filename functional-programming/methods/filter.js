var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/* var filterArr = arr.filter(function (value) {
    return value > 5
})
console.log(filterArr); */


function filter(arr, cb) {
    var filterArr = []
    for (var i = 0; i < arr.length; i++) {
        // if (arr[i] % 2 === 0) 
        if (cb(arr[i], i, arr)) {
            filterArr.push(arr[i])
        }
    }
    return filterArr;
}

console.log(filter(arr, function (value) {
    return value % 2 === 1;
}));
