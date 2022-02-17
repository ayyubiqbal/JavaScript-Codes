class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`Person is eating`);
    };
    sleep() {
        console.log(`Person is sleeping`);
    };
    play() {
        console.log(`Person is playing`);
    }
}

const ayyub = new Person('Ayyub', 25);
const mahfuz = new Person('Mahfuz', 23);
ayyub.play()
console.log(ayyub);


// ------------------------------

// let persons = [];

let persons = new Array()
persons.push('Iqbal')
console.log(persons);

console.log(Array.prototype)