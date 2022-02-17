class PersonwithNew {
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

const ayyub = new PersonwithNew('Ayyub', 25);
const mahfuz = new PersonwithNew('Mahfuz', 23);
ayyub.play()