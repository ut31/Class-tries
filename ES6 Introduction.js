// using let
let x = 10;
console.log(x); // output: 10
if (true) {
   x = 20;
  console.log(x); // output: 20
}

// using const
const PI = 3.14;
PI = 3; // throws an error

// traditional function
function add(a, b) {
    return a + b;
  }
  
  // arrow function
  const add = (a, b) => a + b;

  const name = 'John';
const age = 30;
console.log(`My name is ${name} and I am ${age} years old.`);

// destructuring arrays
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a, b, c); // output: 1 2 3

// destructuring objects
const person = { name: 'John', age: 30 };
/*const { name, age } = person;
console.log(name, age); // output: John 30*/

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  }
  
  const john = new Person('John', 30);
  john.sayHello(); // output: Hello, my name is John.
