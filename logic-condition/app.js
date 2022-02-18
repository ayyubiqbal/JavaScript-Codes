var n = 10;

var str = ''

/* if (n % 2 === 0) {
    str = 'Even'
}
else {
    str = 'Odd'
}

console.log(str); */

var result = n % 2 === 0 ? 'Even Number' : 'Odd Number';
// console.log(result);

//-----------------------------------

var name = ''

var fullName = name || 'Ayyub Iqbal';
// console.log(fullName);

//-----------------------------------

var isTrue = true;
// isTrue && console.log('Everything is Ok');

//-----------------------------------

for (let i = 0; i <= 100; i += 10) {
    // console.log(i, 'Hello world');
}

let sum = 0;
let evenSum = 0;

for (let i = 1; i <= 10; i++) {
    // console.log(i);
    // if (i % 2 === 0) {
    //     console.log(i);
    // }

    // i % 2 === 0 && console.log("Even Number", i);
    // i % 2 !== 0 && console.log("Odd Number", i);
    /* if (i % 2 === 0) {
        console.log(`${evenSum} + ${i} + = ${evenSum + i}`);
        evenSum += i;
    } */
    // if (i % 2 === 0) evenSum += i;
    i % 2 === 0 && (evenSum += i);

    // console.log(`${sum} + ${i} + = ${sum + i}`);
    sum += i;
}

// console.log(`even sum is = ${evenSum}`);
// console.log(`sum is = ${sum}`);


// var i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

var isRunning = true;

while (isRunning) {
    random = Math.round(Math.random() * 10)
    if (random === 10) {
        console.log('Hello, I\'m number 10');
        isRunning = false;
    } else {
        console.log(`hello, I'm number ${random}`);
    }

}