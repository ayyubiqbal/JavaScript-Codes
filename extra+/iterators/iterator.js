// let array = [1, 2, 3] //iterable

/* let object = {
    num1: 1,
    num2: 2,
    num3: 3,
} */

// let string = 'JavaScript' //iterable

/* for (let element of array) {
    console.log(element);
} */

// console.dir(array)
// console.dir(object)
// console.dir(String)

// let iterator = array[Symbol.iterator]()

// console.log(iterator);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// -----------------------

// console.log([...[1, 2, 3, 4, 5]]);
// console.log([...'hello']);

// -----------------------

/* String.prototype[Symbol.iterator] = function () {
    let count = this.length;
    // console.log(this);
    return {
        next() {
            if (count > 0) {
                count--;
                return { done: false, value: "JS" }
            }
            return { done: true }
        },
    };
};

console.log([...'Bangladesh']); */



/* const fatArrowFunc = () => {
    console.log(this);
}
fatArrowFunc() */

// -------------------------

function range(start, end, step) {
    let current = start;
    return {
        [Symbol.iterator]: function () {
            return {
                next() {
                    let result;
                    if (current <= end) {
                        result = {
                            done: false,
                            value: current
                        };
                        current += step;
                        return result;
                    }
                    return {
                        done: true
                    }
                }
            }
        }
    }
}

console.log([...range(1, 100000, 1)])

