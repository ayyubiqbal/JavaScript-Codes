// coming data from outer scope to inner scope without (passing data) is called as closure
var a = 10;

function b() {
    var x = 20;

    return function () {
        console.log(x)
    }
}

var abc = b()
console.dir(abc)