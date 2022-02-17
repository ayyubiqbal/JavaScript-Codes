/* 
// 4 rules of 'this'
implicit binding
explicit binding
new binding
window binding
*/

var iqbal = {
    name: 'Iqbal',
    age: 23,
    printName() {
        console.log(this.name);
    }
}
// iqbal.printName()

var printPlayerNameFunction = function (obj) {
    obj.printPlayerName = function () {
        console.log(this.name);
    }
};

var sakib = {
    name: 'Sakib',
    age: 35,
};

var tamim = {
    name: 'Tamim',
    age: 38,
};
printPlayerNameFunction(sakib)
printPlayerNameFunction(tamim)

// sakib.printPlayerName()
// tamim.printPlayerName()

// ---------------------------------


var Person = function (name, age) {
    return {
        name: name,
        age: age,
        printName() {
            console.log(this.name);
        },
        father: {
            name: 'Mr. XYZ',
            printName() {
                console.log(this.name);
            }
        }
    }
}

var iqbal = Person('Iqbal', 23);
console.log(iqbal);
iqbal.printName()
iqbal.father.printName()