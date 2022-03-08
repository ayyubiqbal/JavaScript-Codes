/* function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;

}

const iterator = myGenerator() */

// console.log(myGenerator().next());
// console.log(myGenerator().next());
// console.log(myGenerator().next());
/*
{ value: 1, done: false }
{ value: 1, done: false }
{ value: 1, done: false }
*/

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
/*
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: undefined, done: true }
*/

// -----------------------------

/* function* range(start = 1, end = 10000000, step = 1) {
    for (let i = start; i <= end; i = i + step) {
        yield i;
    }
} */
// const iterator = range()

/* for (let element of range()) {
    console.log(element);
} */

// console.log([...range()]);

// console.log('hello');

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// -----------------------------

function* generateId() {
    let index = 1;
    while (true) {
        yield index++
    }
}

const generateUserId = generateId()
const generateProductId = generateId()

console.log(`User`, generateUserId.next().value);
console.log(`User`, generateUserId.next().value);
console.log(`User`, generateUserId.next().value);

console.log(`Product`, generateProductId.next().value);
console.log(`Product`, generateProductId.next().value);
console.log(`Product`, generateProductId.next().value);
console.log(`Product`, generateProductId.next().value);
console.log(`Product`, generateProductId.next().value);
console.log(`Product`, generateProductId.next().value);
console.log(`Product`, generateProductId.next().value);
console.log(`Product`, generateProductId.next().value);
console.log(`Product`, generateProductId.next().value);