// Closure is when a function is able to remember and access it's lexical scope even when that function executing outside it's lexical scope

// 1. when a function is able to remember and access it's lexical scope
// 2. when that function executing outside it's lexical scope


/* 
function myFunc() {
    var msg = 'Lexical Scope and Closure';

    function sayMsg() {
        console.log(msg);
    }

    sayMsg()
}
myFunc()
 */

/* function myFunc() {
    var msg = 'Lexical Scope and Closure';

    return function () {
        console.log(msg);
    }


}
var sayMsg = myFunc()
sayMsg() */

for (var i = 1; i <= 5; i++) {
    (function (n) {
        setTimeout(function () {
            console.log(n);
        }, 1000 * n)
    })(i)
}