var ten = 10;

function logNumber() {
  console.log(ten); // Output: 10
}
logNumber();

console.log(ten*10); // Output: 10
//
var message = "Hi";
alert(message); // H

function sayHi() {
    var phrase; // declaration works at the start...
  
    alert(phrase); // undefined
  
    phrase = "Hello"; // ...assignment - when the execution reaches it.
    alert(phrase);
  }
  
  sayHi();

console.log(typeof(NaN)); // 'number'

let mySymbol = Symbol();

console.log(mySymbol); // 'symbol'

let my1Symbol = undefined;

console.log(typeof(my1Symbol)); 
