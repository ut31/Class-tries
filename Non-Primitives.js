// access "a" property of obj1 and log it to the console:

let obj1 = { a: 5, b: 6 };
let b = obj1.a
console.log(b); // 5

// change "b" property of obj1 and log it to the console:

let obj2 = { a: 5, b: 6 };
obj2["b"] =  10;

console.log(obj2.b); // 10
console.log(obj2); // { a: 5, b: 10 }