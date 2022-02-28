// first class function features
// we can treat function as value
// 10, 'string', true, function

function add(a, b) {
    return a + b;
}

// 1. function can be stored in a variable
var sum = add;
console.log(sum === add);
console.log(sum(10, 30));

// 2. function can be stored in an array
var arr = []
arr.push(add)
console.log(arr);
console.log(arr[0](25, 35));

// 3. function can be stored in an object
var obj = {
    sum: add,
}
console.log(obj);
console.log(obj.sum(4, 5));

// 4. we can create function as we need
setTimeout(function () {
    console.log('I will log after three sec');
}, 3000)
// 5. w can pass function as an argument
// 6. we can return function from another function 