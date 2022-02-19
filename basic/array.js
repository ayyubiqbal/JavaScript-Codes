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
console.log(arr);
console.log(arr.length);

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