var a = 10;

if (true) {
    if (true) {
        if (true) {
            console.log(a);
            var b = 100; //accessible from outer side
            // let c = 1000; // not accessible from outer side 
        }
    }
}
console.log(b);
// console.log(c);

// -------------------------
console.log('---------------------');

var xyz = 30;

function x() {
    // var xyz = 25;
    function y() {
        var xyz = 20;
        console.log('i', xyz);
    }
    console.log('o', xyz);
    y()
}
x()
console.log('---------------------');


// --------------------------
function test(n) {
    function a() {
        return n % 3 === 0;
    }
    function b() {
        return n % 5 === 0;
    }
    if (a() === b()) {
        console.log(`${n} is divisible by 3 and 5`);
    } else {
        console.log('Not a valid number');
    }
}

test(15)
