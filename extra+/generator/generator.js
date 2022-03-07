/* let arr = [1, 2, 3, 4]

let iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); */

//-----------------------------

/* function* generator() {
    yield 1; // yield generate the value
    yield 2;
    yield 3;
    return 'I am finished'; //stop the value generation
    yield 4;
}

let iterator = generator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); */

//-----------------------------

// syntax of generator function
// function *myGenerator(){}
// or
// function * myGenerator(){}
// or
// function* myGenerator(){}

// Generator function expression
// const myGenerator = function* () { }

// inside class
// class MyClass {
//     *myGenerator() { }
// }

//-----------------------------

// let object = {
//     num1: 1,
//     num2: 2,
//     num3: 3,
// }

// console.log(Object.entries(object)); //[ [ 'num1', 1 ], [ 'num2', 2 ], [ 'num3', 3 ] ]

// ----------------- iterator implementation in object with [Symbol.iterator] --------------\\
/* Object.prototype[Symbol.iterator] = function () {
    const entries = Object.entries(this);
    let count = entries.length;
    let index = 0;
    return {
        next() {
            if (count > 0) {
                let result = { done: false, value: entries[index][1] };
                count--;
                index++;
                return result;
            }
            return { done: true }
        }
    }
} */

// for (let element of object) {
//     console.log(element);
// }

// console.log([...object]);


// ----------------- iterator implementation in object with Generator function --------------\\

/* let object = {
    num1: 1,
    num2: 2,
    num3: 3,
}

function* generator() {
    const entries = Object.entries(object) //[ [ 'num1', 1 ], [ 'num2', 2 ], [ 'num3', 3 ] ]
    for (let element of entries) {
        yield element[1]
    }
    return 'completed'
}
const iterator = generator()

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// for (let element of iterator) {
//     console.log(element);
// }

console.log([...iterator]);
console.log(typeof generator()); */

//  -------------------

/* function* range(start, end, step) {
    let current = start;

    while (current <= end) {
        yield current;
        // console.log(`hello world`);
        current += step;
    }
}

const iterator = range(1, 100000, 1);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log([...range(1, 100000, 1)]) */

//  -------------------

/* function* generator(a, b) {
    let k = yield a + b;
    let m = yield a + b + k;
    yield a + b + k + m;
}

const gen = generator(20, 30)

console.log(gen.next());
console.log(gen.next(50));
console.log(gen.next(80)); */

// --------------------


/* const takeOrder2 = (customer) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`take order for ${customer}`);
        }, 1000);
    })
}

const processOrder2 = (customer) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Order processed for ${customer}`);
        }, 1000)
    })
}

const completeOrder2 = (customer) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`completed order for ${customer}`);
        }, 1000)
    })
}

async function* generator(customer) {
    yield await takeOrder2(customer);
    yield await processOrder2(customer);
    yield await completeOrder2(customer);
}

const gen = generator('Ayyub')

// console.log(gen.next());

// gen.next().then(({ value }) => console.log(value))
// gen.next().then(({ value }) => console.log(value))
// gen.next().then(({ value }) => console.log(value))

const promises = [gen.next(), gen.next(), gen.next()];

(async () => {
    for await (let element of promises) {
        console.log(element.value);
    }
})() */

// -------------------------------

const myAsyncIterator = {
    *[Symbol.asyncIterator]() {
        yield "hello";
        yield "async";
        yield "world";
        yield "iterator";
    }
};

(async () => {
    for await (let x of myAsyncIterator) {
        console.log(x);
    }
})()

