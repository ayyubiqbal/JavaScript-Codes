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

function pyramidOfDoom() {
    setTimeout(() => {
        console.log(1);
        setTimeout(() => {
            console.log(2);
            setTimeout(() => {
                console.log(3);
                setTimeout(() => {
                    console.log(4);
                    setTimeout(() => {
                        console.log(5);
                        setTimeout(() => {
                            console.log(6);
                            setTimeout(() => {
                                console.log(7);
                                setTimeout(() => {
                                    console.log(8);
                                    setTimeout(() => {
                                        console.log(9);
                                        setTimeout(() => {
                                            console.log(10);
                                        }, 10000)
                                    }, 9000)
                                }, 8000)
                            }, 7000)
                        }, 6000)
                    }, 5000)
                }, 4000)
            }, 3000)
        }, 2000)
    }, 1000)
}

pyramidOfDoom()