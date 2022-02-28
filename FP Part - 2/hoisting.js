var a = 200;

// newPrint(a)

print(100)

var newPrint = print

newPrint(150)

function print(a) {
    console.log(a);
}
print(a)

// Creational Phase
/*
a = undefined
newPrint = undefined
print = function ref
*/

// Executional Phase
// a = 200
// newPrint = function ref