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

console.log('-----------------------');

const greetFn = new Function(
    'name',
    'email',
    `
    const fName = name.split(' ')[0];
    console.log('Hello', fName, 'Good Morning! your email is', email);
    return fName;
    `
)

const fName = greetFn('Ayyub Iqbal', 'abuayubiqbal@gmail.com')
console.log('Your first Name is', fName);
// console.log();

console.log('-----------------------');


const operations = [
    {
        params: ['a', 'b'],
        args: [5, 6],
        body: 'console.log(a + b)',
    },
    {
        params: ['a', 'b'],
        args: [15, 6],
        body: 'console.log(a - b)',
    }
]

operations.forEach((operation) => {
    const fn = new Function(...operation.params, operation.body)
    fn(...operation.args)
})