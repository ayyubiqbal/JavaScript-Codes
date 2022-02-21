// input, output, processing
function myFunction() {
    console.log('Hello, function');
}

function sum() {
    var a = 10;
    var b = 20;
    console.log(a + b);
}

function sub() {
    var a = 20;
    var b = 10;
    console.log(a - b);
}

// console.log(a, b);

// myFunction()
// myFunction()

/* for (var i = 1; i <= 10; i++) {
    myFunction()
} */

sum()
sub()

console.log(sum.name);

console.log('-------------------------');


// parameters - arguments

function add(a, b) {
    var result = a + b;
    console.log(result);
}

add(10, 20)
add(2010, 20050)
console.log('-------------------------');


// ------------------------------------
var arr1 = [1, 2, 3]
var arr2 = [1, 3, 3]
var arr3 = [1, 2, 5]

var sum1 = 0;
for (var i = 0; i < arr1.length; i++) {
    sum1 += arr1[i]
}
console.log(sum1);

var sum2 = 0;
for (var i = 0; i < arr2.length; i++) {
    sum2 += arr2[i]
}
console.log(sum2);

var sum3 = 0;
for (var i = 0; i < arr3.length; i++) {
    sum3 += arr3[i]
}
console.log(sum3);

console.log('-------------------------');

// ------------------------------

function arraySum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum);
}
arraySum(arr1)
arraySum(arr2)
arraySum(arr3)
arraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])