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
console.log(obj6);