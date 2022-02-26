var arr = [12, 34, 65, 12, 97, 60, 32, 41, 54, -9, -2, -1, 60]

// arr.sort()
arr.sort(function (a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0
    }
})

console.log(arr);

// -------------------

var result1 = arr.every(function (value) {
    return value >= 1;
})

console.log(result1);

// -------------------

var result2 = arr.some(function (value) {
    return value >= 1;
})

console.log(result2);