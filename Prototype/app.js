// console.log('hello world');


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
tamim.play()
const iqbal = Person('Iqbal', 23); */

// console.log(tamim);

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

function test() { }

console.dir(test)