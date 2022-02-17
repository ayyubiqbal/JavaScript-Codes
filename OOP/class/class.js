class Person { //parent class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Developer extends Person { //sub-class
    constructor(name, age, stack, country) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.stack = stack;
        this.country = country;
    }

    play() {
        console.log(`${this.name} is playing`);
    }
}

const ayyub = new Developer('Ayyub', 23, 'MERN Stack', 'Bangladesh');

console.log(ayyub);
ayyub.eat()
ayyub.play()

const iqbal = new Person('Iqbal', 24)
console.log(iqbal);
iqbal.eat()
// iqbal.play()