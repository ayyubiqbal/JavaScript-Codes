const promise1 = Promise.resolve('I am Promise 1');

/* const promise1 = new Promise((resole, reject) => {
    setTimeout(() => {
        resole('I am promise 1')
    }, 3000);
}) */

const promise2 = new Promise((resole, reject) => {
    setTimeout(() => {
        resole('I am promise 2')
    }, 2000);
})

// promise1.then((res) => console.log(res))
// promise2.then((res) => console.log(res))

Promise.all([promise1, promise2])
    .then(res => console.log(res))

// [ 'I am Promise 1', 'I am promise 2' ]

Promise.race([promise1, promise2])
    .then(res => console.log(res))
    // I am Promise 1, first result will be our result in 'race' case