//second function's output as a first function's input is called function composition

function print(input) {
    console.log(input);
}

function fiveTimes(n) {
    return 5 * n;
}

function add(a, b) {
    return a + b
}

print(fiveTimes(add(2, 3)))