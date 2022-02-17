// ------------------------------
/* let person = {}

person.name = 'Iqbal';
person.age = 25;

person.eat = function () {
    console.log(`Iqbal is eating`);
}

person.sleep = function () {
    console.log(`Iqbal is sleeping`);
}

console.log(person); */

// ------------------------------

// ------------------------------
/* const personMethods = {
    eat() {
        console.log(`Iqbal is eating`);
    },
    sleep() {
        console.log(`Iqbal is sleeping`);
    },
    play() {
        console.log(`Iqbal is playing`);
    },
};


function Person(name, age) {
    let person = Object.create(personMethods)
    // console.log(person);

    person.name = name;
    person.age = age;

    return person;
}


const tamim = Person('Tamim', 25);
const iqbal = Person('Iqbal', 23);
console.log(tamim);
tamim.play() */
// ------------------------------

// ------------------------------
// constructor function
function Person(name, age) {
    // let this = Object.create(Person.prototype)

    this.name = name;
    this.age = age;

    // return this;
}

Person.prototype = {
    eat() {
        console.log(`Person is eating`);
    },
    sleep() {
        console.log(`Person is sleeping`);
    },
    play() {
        console.log(`Person is playing`);
    },
}



const ayyub = new Person('Ayyub', 25);
const mahfuz = new Person('Mahfuz', 23);
ayyub.sleep()
console.log(ayyub);

// ------------------------------

/* const captain = {
    name: 'Sakib',
    age: 32,
    country: 'Bangladesh',
}

// player child, captain parent
const player = Object.create(captain)

console.log(player.name); */

// ------------------------------

/* function test() { }

console.dir(test) */