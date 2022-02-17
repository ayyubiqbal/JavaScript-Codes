function Person(name, age) {
    this.name = name;
    this.age = age;

    /*     this.eat = function () {
            console.log(`${this.name} is eating`);
        }
    */
}

Person.prototype = {
    eat: function () {
        console.log(`${this.name} is eating`);
    }
}

const ayyub = new Person('Ayyub', 25);
// ayyub.eat()
const iqbal = new Person('Iqbal', 23);

console.log(ayyub);
console.log(iqbal);
// Person {name: 'Iqbal', age: 23, eat: ƒ}



/* const obj = {
    name: 'iqbal',
    age: 23,
}

console.log(typeof obj, obj); */