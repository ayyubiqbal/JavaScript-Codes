// we can treat function as value
// 10, 'string', true, function

// function fn(name) {
//     console.log(`I am ${name}`);
// }

const fn = new Function(
    'name',
    `return name `
);

console.log(fn('Ayyub Iqbal'));

console.log('-----------------------');

/* function myFunc(str) {
    let obj = {}
    for (let s of str) {
        if (s !== ' ') {
            obj[s] = s;
        }
    }
    return obj;
}

console.log(myFunc('Ayyub Iqbal')); */

const myFunc = new Function(
    'str',
    `let obj = {}
    for (let s of str) {
        if (s !== ' ') {
            obj[s] = s;
        }
    }
    return obj;`
)

console.log(myFunc('Ayyub Iqbal'));

console.log('-----------------------');

const fData = {
    params: ['a', 'b'],
    body: ['const r = a+b', 'return r']
}

const fBody = fData.body.reduce((acc, cur) => {
    acc = acc + cur + ';'
    return acc;
}, '')

const sumFunc = new Function(...fData.params, fBody);
console.log(sumFunc(50, 60));