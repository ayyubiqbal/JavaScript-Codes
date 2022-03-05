// var symbol1 = Symbol('I am Symbol 1') //Symbol with description
// var symbol2 = Symbol('I am Symbol 2')

// console.log(symbol1);
// console.log(symbol2);

// var symbol1 = Symbol.for('I am Symbol 1')
// var symbol2 = Symbol.for('I am Symbol 1')
// console.log(symbol1 === symbol2);  //true
// console.log(symbol2);


// ---------------------------

/* var job = Symbol('software engineer')

var hisGander = 'gander';

var student = true;

var object = {
    name: 'Ayyub Iqbal',
    location: 'Bangladesh',
    [job]: 'at Google',
    [hisGander]: 'male',
    // student: student,
    student,
}

console.log(object); */


// ------------------------

/* var obj = {}

obj.name = 'JavaScript';
obj.estd = 1995;

obj[Symbol('founder')] = 'Brendan Eich';

console.log(obj);
console.log(JSON.stringify(obj)); //{"name":"JavaScript","estd":1995}


for (let key in obj) {
    console.log(key, obj[key]);
} */

// --------------------------

/* var includes = Symbol("my includes method");

Array.prototype[includes] = (value) => {
    console.log(`hello world, this is my own include method, I push it into prototype, and I can pass value as well, ${value}`);
}

// console.log(Array.prototype);

var myArr = [1, 2, 3, 4, 5, 6, 7]
console.log(myArr);
console.log(myArr.includes(2));
console.log(myArr['includes'](2));

var myNewArr = myArr['map'](i => i * 2)
console.log(myNewArr);

myArr[includes](300)

var testArr = []
testArr[includes](200) */


// --------------------

// title = String("JavaScript")
// check the Symbol.search() at Sting.prototype

// var title = 'JavaScript';
// console.dir(String)
// console.dir(title.search('Script'))

/* class Product {
    constructor(title) {
        this.title = title;
    }

    // implement search
    [Symbol.search](sting) {
        return sting.indexOf(this.title) >= 0 ? 'found' : 'not found'
    }
}

const laptop = new Product('laptop')
console.log(laptop);

console.log('Dell laptop'.search(laptop)) */

// var a = 'hello world'
// console.log(a.indexOf('world'));


// --------------------

function myFunction() {
    const PVT = Symbol('my private value')

    return {
        modify(obj) {
            obj[PVT] = true;
        },
        output(obj) {
            return obj[PVT]
        }
    }
}

const value = myFunction()
const obj = { a: 1, b: 2 }

delete obj[Symbol('my private value')]
value.modify(obj)
console.log(value.output(obj));
console.log(obj);