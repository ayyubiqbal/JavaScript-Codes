function sayHi(n) {
    if (n === 0) {
        return
    }
    console.log(`Hi, I am Calling, ${n}`);

    sayHi(n - 1)
}

sayHi(10)

// -------------------------------
console.log('-------------------------------');

function sum(n) {
    if (n === 1) {
        return 1;
    }
    console.log(n, n - 1);
    return n + sum(n - 1)
}
console.log(sum(10));

// -------------------------------
console.log('-------------------------------');


function factorial(n) {
    if (n === 1) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(4));

// -------------------------------
console.log('-------------------------------');

var arr = [1, 2, 3, 4, 5]

function sumOfArray(arr, lastIndex) {
    if (lastIndex < 0) {
        return 0;
    }
    return arr[lastIndex] + sumOfArray(arr, lastIndex - 1)
}

console.log(sumOfArray(arr, arr.length - 1));