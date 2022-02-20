var obj = {}
obj.x = 10;
console.log(obj);
// ------------------
var obj2 = {
    x: 10,
    y: 20
}
obj2.x = 110;
obj2.z = 30;
console.log(obj2);
// ------------------

var obj3 = Object()
obj3.a = 10;
obj3.b = 20;
console.log(obj3);
// ------------------

var obj4 = new Object()
obj4.x = 10;
obj4.y = 20;
console.log(obj4);
// ------------------

var obj5 = {
    x: 10,
    y: 20,
    z: 30,
}

console.log(obj5.x);
console.log(obj5.y + obj5.z);

console.log(obj5['x']);
console.log(obj5['x'] + obj5['y']);

// when we don't know the exact key, we'll use bracket notation
var show = 'y';
console.log(obj5[show]);

var obj6 = {
    x: 10
}
obj6.x = 45;
obj6.a = 15;

console.log(obj6);
console.log(obj6.c);

obj6['y'] = 100;

var prop = 'z'; //cur.name = 'z'
obj6[prop] = 55; //obj6[cur.name] = 55;

// ------------------
delete obj6.x
console.log(obj6);
console.log('------------------');
// ------------------

var obj7 = {
    a: 10,
    b: 20,
}

var obj8 = {
    a: 10,
    b: 30,
}

// console.log(obj7 === obj8);
if (obj7.a === obj8.a && obj7.b === obj8.b) {
    console.log(true);
} else {
    console.log(false);
}
// comparison
console.log(obj7);
console.log(JSON.stringify(obj7) === JSON.stringify(obj8));
console.log('------------------');
// ------------------

var obj9 = {
    x: 23,
    u: 25,
    o: 39,
}
// in operator
// console.log('x' in obj9);

for (i in obj9) {
    console.log(i);
    console.log(obj9[i]);
    console.log(i, obj9[i]);
}
console.log('------------------');

// ------------------

console.log(Object.keys(obj9));
console.log(Object.values(obj9));
console.log(Object.entries(obj9));

console.log('------------------');

// ------------------

// reference value
const userOne = {
    name: 'Ayyub Iqbal',
    age: 23
};
const userTwo = userOne;
console.log(userOne);
console.log(userTwo);
userOne.name = 'Mahfuz';
console.log(userOne);
console.log(userTwo);

// object copy in immutable way
const userThree = Object.assign({}, userOne);
userThree.name = 'Al Amin';
console.log(userOne);
console.log(userThree);