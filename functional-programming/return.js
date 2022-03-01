/* function greet(msg) {
    function greetings(name) {
        return `${msg}, ${name}`;
    }
    return greetings
}

var gm = greet('Good Morning');
var gn = greet('Good Night');
console.log(gm('Ayyub Iqbal'));
console.log(gn('Ayyub Iqbal')); */

// -------------------------------

function power(p) {
    return function (n) {
        var result = 1;
        for (var i = 0; i < p; i++) {
            result *= n;
        }
        return result;
    }
}

var sqr = power(2)
var cube = power(3)
console.log(sqr(4));
console.log(cube(4));