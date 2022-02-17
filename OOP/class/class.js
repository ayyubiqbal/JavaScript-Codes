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

// console.log(ayyub);
// ayyub.eat()
// ayyub.play()

const iqbal = new Person('Iqbal', 24)
// console.log(iqbal);
// iqbal.eat()
// iqbal.play()

// --------------------------------------------------
class User {
    constructor(name, age) {
        this.name = name; //property
        this.age = age;
    }

    play() { // method
        console.log(`${this.name} is playing`);
    }

    static isEqualAge(person1, person2) { // static method
        if (person1.age < person2.age) console.log(`user 2 is elder`)
    }

    /* get setName() { //getter
        return this.name;
    }

    set setName(name) { //setter
        this.name = name;
    } */
}

let user1 = new User('Ayyub', 22);
let user2 = new User('Iqbal', 23);

console.log(user1);

User.isEqualAge(user1, user2)

/* 
console.log(user1.setName);
user1.setName = 'Ayyub';
console.log(user1.name);
 */