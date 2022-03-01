// Define three example functions
/* function first() {
    console.log(1)
}

function second() {
    console.log(2)
}

function third() {
    console.log(3)
} */

// ---------------------------

// Define three example functions, but one of them contains asynchronous code
/* function first() {
    console.log(1)
}

function second() {
    setTimeout(() => {
        console.log(2)
    }, 0)
}

function third() {
    console.log(3)
}
// ---------------------------

// Execute the functions
first()
second()
third() */

// ---------------------------

// A function
/* function fn() {
    console.log('Just a function')
}

// A function that takes another function as an argument
function higherOrderFunction(callback) {
    // When you call a function that is passed as an argument, it is referred to as a callback
    callback()
}

// Passing a function
higherOrderFunction(fn) */

// ---------------------------

// Define three functions
/* function first() {
    console.log(1)
}

function second(callback) {
    setTimeout(() => {
        console.log(2)

        // Execute the callback function
        callback()
    }, 0)
}

function third() {
    console.log(3)
}

first()
second(third) */


// ---------------------------
