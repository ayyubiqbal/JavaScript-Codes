// Execution Context
function a() {
    b()
    console.log('I am function A');
}

function b() {
    d()
    console.log('I am function B');
}

function c() {
    console.log('I am function C');
}
function d() {
    c()
    console.log('I am function D');
}

var x = 100;
a()
console.log('I am Global Context');


// c()
// d()
// b()
// a()
// execution of global context

// execution context happened in two phase
// 1. Creational phase
// 2. Executional phase


// execution context has some own objects