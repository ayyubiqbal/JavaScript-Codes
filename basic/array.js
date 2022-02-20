var arr = [1, 2, 3, 4, 5]

arr[5] = 6;
arr[2] = 33;
arr.unshift(11)
arr.push(111)
arr.shift()
arr.pop()
arr.splice(2, 1, 333)
// arr[10] = 100;
// console.log(arr[6]);
/* console.log(arr);
console.log(arr.length);
 */
var arr2 = Array(10, 12, 14)
// console.log(arr2);

// first index = arr[0]
// last index = arr.length - 1; //arr[arr.length - 1]  
// if array length is 10, last index will be 9.

//-----------------------------

// traverse array
var arr3 = [1, 2, 3]

for (i = 0; i < arr3.length; i++) {
    // console.log(arr3[i]);
    arr3[i] = arr3[i] * 2;
}
// console.log(arr3);



var arr4 = [1, 2, 3, 4, 5]
sum = 0;
for (i = 0; i < arr4.length; i++) {
    sum = sum + arr4[i];
}
// console.log(sum);

// ----------------------------------------

var arr5 = [23, 56, 70, 10, 25]
var find = 20;
var isFound = false;

for (var i = 0; i < arr5.length; i++) {
    if (find === arr5[i]) {
        console.log('Data is found in index', i);
        isFound = true;
        break;
    }

}
if (!isFound) {
    // console.log(!isFound);
    // console.log('Data is not found');
}

// ----------------------------------------

var arr6 = [
    [12, 34, 56, 78],
    [21, 43, 65, 87],
    [31, 42, 75, 97]
]

for (var i = 0; i < arr6.length; i++) {
    for (var j = 0; j < arr6[i].length; j++) {
        // console.log(arr6[i][j]);
    }
}

// ----------------------------------------


var arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* for (var i = 0; i < (arr7.length / 2); i++) {
    var temp = arr7[i]
    arr7[i] = arr7[arr7.length - 1 - i]
    arr7[arr7.length - 1 - i] = temp;
}
console.log(arr7); */
var reverse = arr7.reverse()
// console.log(reverse);

// ----------------------------------------

var arr8 = [1, 2, 3, 4, 5]
var arr9 = arr8.join(' | ')
// console.log(typeof arr9); //string
// console.log(arr9);

// console.log(arr8.fill(true));
// console.log(arr8.fill(0));

var arr10 = [6, 7, 8]
// way to array adding(+) 
var arr11 = arr8.concat(arr10, 9, 10, 11, 12)
console.log(arr11);

// console.log(Array.isArray(arr11));

// array copy in immutable way
var arr12 = Array.from(arr11)
arr12.push(13)
arr12[13] = 14;
arr12[arr12.length] = 15;
arr12[arr12.length] = 16;
arr12[arr12.length] = 17;
console.log(arr12);
console.log(arr12.length);