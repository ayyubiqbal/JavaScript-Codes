/* function paths(n) {
    // console.log(!n)
    // return n + 10;
    return !n || n * paths(n - 1);
}

console.log(paths(5));
console.log(!5)
console.log(!5 || 10); */

// throw new Error("Expected: 28");

// const paths = n => n * paths(n - 1);

// console.log(paths(8));

// setTimeout(() => {
//     console.log("Hello");
// }, 1000);


/* let arr = ['john', 'doe', 'john', 'iqbal', 'ahmed'];
let index = -1;

let name = arr[++index];


setInterval(() => {
    name = arr[index++];
    console.log(name, name.length);

    if (index === arr.length) {
        // index = 0;
    }
}, 1000) */



/* do {
    console.log('Hello World!');
} while (false); */


// Problem - 1 : Convert Ana to Vori

/* function anaToVori(ana) {
    if (ana < 0 || typeof ana != 'number') {
        return "Please input a valid amount";
    }
    else {
        return ana / 16;
    }
}
console.log(anaToVori(10)); */


// Problem - 2 : Return Total Cost

/* function pandaCost(singaraQuantity, samuchaQuantity, jilapiQuantity) {
    if (singaraQuantity < 0 || typeof singaraQuantity != 'number' || samuchaQuantity < 0 || typeof samuchaQuantity != 'number' || jilapiQuantity < 0 || typeof jilapiQuantity != 'number') {
        return "Please input a valid amount";
    }
    const singaraCost = singaraQuantity * 7;
    const samuchaCost = samuchaQuantity * 10;
    const jilapiCost = jilapiQuantity * 15;
    const totalCost = singaraCost + samuchaCost + jilapiCost;
    return totalCost;
}
console.log(pandaCost(10, 10, 10)); */


// Problem - 3 : Return total Pincnic Cost

/* function picnicBudget(people) {
    if (typeof people != 'number') {
        return "Please input a valid number";
    }

    const first100 = 5000;
    const second100 = 4000;
    const rest = 3000;

    if (people <= 100) {
        const totalCost1 = people * first100;
        return totalCost1;
    }
    else if (people > 100 && people <= 200) {
        const restP1 = people - 100; //20
        const first100Cost = (people - restP1) * first100;
        const second100Cost = restP1 * second100;
        const totalCost2 = first100Cost + second100Cost;
        return totalCost2;
    }
    else if (people > 200) {
        restP = people - 200;
        const first200P = (people - restP);
        first100Cost = (first200P - 100) * first100;
        second100Cost = (first200P - 100) * second100;
        const restPeopleCost = restP * rest;
        totalCost = first100Cost + second100Cost + restPeopleCost;
    }
    return totalCost;
}

console.log(picnicBudget(10)); */

// problem - 4 : Return Friend Name(s) that has / have Odd Number of Characters.

/* function oddFriend(FriendNames) {
    let oddName = [];
    if (typeof FriendNames != 'object') {
        return 'Please input an array of names';
    }

    for (const name of FriendNames) {
        if (typeof name != 'string') {
            return 'Please input valid Name(s)';
        }
        else if (name.length % 2 != 0) {
            oddName.push(name);
        }
    }
    return oddName;
} */


/* function solution(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;

}

console.log(solution(10)); */


/* function filter_list(l) {
    // Return a new array with the strings filtered out
    const newArr = []
    for (let i = 0; i < l.length; i++) {

        if (typeof l[i] === 'number') {
            // console.log(l[i])
            newArr.push(l[i])
        }
    }
    return newArr;
}

const flitNum = [1, 2, 'a', 'b'];

console.log(filter_list(flitNum)) */



/* function squareDigits(num) {
    return Math.sqrt(num);
}

console.log(squareDigits(9119)); */



/* while (true) {
    const num = Math.round(Math.random() * 100);
    console.log("Iqbal", num);

    if (num === 100) break;
} */

/* function sq(n) { //O(n2)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

sq(4) */


/* function cube(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                console.log(i, j, k);
            }
        }
    }
}

cube(4) */


/* const arr = []
const arrToObj = {}

for (let i = 0; i < 5000000; i++) {
    const o = {
        id: i,
        value: i,
    }
    arr.push(o);
    arrToObj[i] = o;
} */

// console.log(arr);
/* console.time('arr')
let id = 4999999;
const obj = arr.find((v) => v.id === id);
obj.value = 555;
console.log(obj);
console.timeEnd('arr') */


// console.log(arrToObj);
// console.log(arrToObj[id].value === 999);
// console.time('obj')
// arrToObj[id].value = 999;
// console.log(arrToObj)
// console.timeEnd('obj')

/* function loadData() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}

loadData(); */


