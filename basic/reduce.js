const mixArray = [1, 2, 3, 4, '', false, null, 7, 8, 9]

const result = mixArray.reduce((acc, cur, index) => {
    if (cur) {
        acc.push(cur.toString())
    }
    return acc
}, [])

console.log(result);




// filter and map operation using only reduce method
const arr = []
for (let i = 1; i < 5000000; i++) {
    arr.push(i)
}

console.time('not-op')
const r1 = arr.filter((item) => item % 2 === 0).map((item) => item * 2)
console.log(r1);
// console.timeEnd('not-op')


console.time('op')
const r2 = arr.reduce((acc, cur) => {
    if (cur % 2 === 0) {
        acc.push(cur * 2)
    }
    return acc
}, [])
console.log(r2);
// console.timeEnd('op')



// custom reducer
// console.time('custom-reduce')
function myReduce(arr, callback, initial) {
    let acc = initial;
    for (let i = 0; i < arr.length; i++) {
        acc = callback(acc, arr[i], i, arr);
    }
    return acc;
}
const sum = myReduce([1, 2, 3, 4, 5], (a, b) => a + b, 0);
console.log(sum);

const arr = [1, 2, '', false, 3, NaN, false, 4, 5, NaN, 6]
const result = myReduce(arr, (acc, cur) => {
    if (cur) {
        acc.push(cur * cur)
    }
    return acc;
}, [])
console.log(result)
// console.timeEnd('custom-reduce')


// console.time('built-in reduce')
const result = [1, 2, 3, 4, 5].reduce((acc, cur) => {
    return acc += cur;
}, 0)
console.log(result);
// console.timeEnd('built-in reduce')



const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })