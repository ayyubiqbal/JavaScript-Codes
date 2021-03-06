function Person(name, age) {
    // parent class
    this.name = name;
    this.age = age;

    // this.eat = function () {
    //     console.log(`${this.name} is eating`);
    // }

}

function Developer(name, age, stack, country) {
    // child class
    Person.call(this)
    this.name = name;
    this.age = age;
    this.stack = stack;
    this.country = country;
}

Person.prototype = {
    eat: function () {
        console.log(`${this.name} is eating`);
    }
}

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;
Developer.prototype.play = function () {
    console.log(`${this.name} is playing`);
}

const ayyub = new Developer('Ayyub', 23, 'MERN Stack', 'Bangladesh');
ayyub.eat()
ayyub.play()

const iqbal = new Person('Iqbal', 23);

console.log(ayyub);
console.log(iqbal);

// Person {name: 'Iqbal', age: 23, eat: ƒ}


// -----------------------------

/* const obj = {
    name: 'iqbal',
    age: 23,
}

console.log(typeof obj, obj); */

// -----------------------------

/* const f = function Person() { };
// console.dir(f);

Object.prototype.iqbal = function () {
    console.log('Hi, I\'m Iqbal from prototype');
}

const p = {};
p.iqbal()

console.dir(Object); */

// -----------------------------