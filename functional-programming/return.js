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

var base = power(2)
console.log(base(4));