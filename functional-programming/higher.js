function add(a, b) {
    return a + b;
}

function manipulate(a, b, func) {
    var c = a + b; // 7
    var d = a - b // 1

    // function multiply() {
    //     var m = func(a, b)
    //     return c * d * m
    // }

    return function () {
        var m = func(a, b) // add function = 7
        return c * d * m // 7 * 1 * 7
    }
}

var multiply = manipulate(4, 3, add)
console.log(multiply());


// --------------------

var times = function () {
    var m = add(4, 3) // add function = 7
    return 7 * 1 * m // 7 * 1 * 7
}

console.log(times());
