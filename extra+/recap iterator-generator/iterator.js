/* const array = [1, 2, 3, 4, 5]

let index = 0;

function next() {
    return array[index++]
}

console.log(next());
console.log(next());

console.log('hello world');
console.log('hello world');
console.log('hello world');
console.log('hello world');
console.log('hello world');
console.log('hello world');

console.log(next());
console.log(next());
 */

// ---------------------------------------------
// const string = `HelloWorld`

// const iterator = string[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

/* for (let v of iterator) {
    console.log(v);
} */

/* while (true) {
    const data = iterator.next()
    if (data.done) {
        break;
    }
    console.log(data.value);
} */

// ---------------------------------------------

const range = {
    start: 1,
    end: 100,
    step: 1,
    // step: 2,
    // step: 5,
    /* [Symbol.iterator]: function () {
        let current = this.start;
        const end = this.end;
        const step = this.step;
        return {
            next: function () {
                const obj = {
                    value: current,
                    done: current > end,
                }
                current = current + step;
                return obj;
            }
        }
    }, */
}

range[Symbol.iterator] = function () {
    let current = this.start;
    const end = this.end;
    const step = this.step;
    return {
        next: function () {
            const obj = {
                value: current,
                done: current > end,
            }
            current = current + step;
            return obj;
        }
    }
}

for (let v of range) {
    console.log(v);
}

console.log(range);
// const iterator = range[Symbol.iterator]()
// console.log(iterator);
// console.log(iterator.next());

// const i1 = Symbol()
// const i2 = Symbol()

// console.log(i1 === i2);