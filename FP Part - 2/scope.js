{
    var x = 20;

    function myFunc() {
        // var x = 200;
        console.log(x);

        function myNestedFunc() {
            var y = 30;
            console.log(x);
        }

        myNestedFunc()
        // console.log(y);
    }

    myFunc()
    // console.log(x);

}