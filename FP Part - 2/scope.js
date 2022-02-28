{
    var x = 20;

    function myFunc() {
        // var x = 200;
        // console.log(x);

        function myNestedFunc() {
            var y = 30;
            // console.log(x);
        }

        myNestedFunc()
        // console.log(y);
    }

    myFunc()
    // console.log(x);

}


// scope chain

var a = 10;

function A() {
    var b = 20;

    function B() {
        var c = 30;
        console.log(c);
    }

    function C() {
        var d = 40;
        console.log(d);
    }

    console.log(b);

    D(b)
    B()
    C()
}

function D(n) {
    return n + a
}

// A -> a,b, B(),C(),D()
// B -> a,b,c, B(),C(),D()
// C -> a,b,d, B(),C(),D()
// D -> a,n, A()