var str1 = 'Hello World';
var str2 = "Hello Bangladesh";
var str3 = `Hello World Bangladesh`

var str4 = String('Hello World')
var str5 = String(150)
var str6 = String(3.134)
var num = 10;
var str7 = num.toString()

// console.log(str1, str2, str3, str4, str5, str6, str7)

// Escape Notation
// console.log('Hello,\nI\'m Ayyub \\ Iqbal');
// \r, \v, \b, \f


// String comparison
// var a = 'abc';
// var b = 'cba';

// console.log(a < b);

// a = 0 - z = 26;
// A = 0 - Z = 26;
// but, but small letter always greater than capital letter
// console.log('z' > 'a');
// console.log('Z' > 'A');
// console.log('a' > 'Z');
// console.log('Z' > 'a');

// console.log('001' == 1);
// in the time of comparison, javascript covert string into number using lexicography



// --------------------------------

var a = 'I am';
var b = 'Ayyub Iqbal';

var c = a.concat(' ', b)
// console.log(c);
// var d = c.substring(5, 10)
// var d = c.substr(5, 5)
// console.log(d);

// console.log(c.charAt(5));
// console.log(c.startsWith('I am'));
// console.log(c.endsWith('Iqbal'));
// console.log(c.toUpperCase());
// console.log(c.toLowerCase());
// console.log('     fgfdghtr     '.trimStart());
// console.log('     fgfdghtr     '.trimEnd());
// console.log('     fgfdghtr     '.trim ());

console.log(c.split(' '));


var str = 'Ayyub Iqbal';
//console.log(str.charAt(11));// return '';
var len = 0;
while (true) {
    if (str.charAt(len) == '') {
        break;
    } else {
        len++
    }
}

// console.log(len);
// console.log(str.length);



var num = 0;
while (true) {
    if (num === 100) {
        break
    } else {
        num++
    }
    console.log(num);
}

// console.log(num);