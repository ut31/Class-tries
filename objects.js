const person = {
    name: 'Ahmad',
    age: 21,
    occupation: 'Bus Driver',
    drive: function() {
      console.log('Ahmad drives');
    }
  };

person.drive();
person.name = 'Shireen'; // using dot-notation to change person's name from Ahmad to Shireen
person['city'] = 'Hebron'; // using bracket-notation to add a new key 'city' with a value of 'Hebron'
console.log(person['city']); // logs 'Hebron' to the console.

console.log(person['name']);

function Employee(name, salary, position) {
    this.name = name;
    this.salary = salary;
    this.position = position;
  }
console.log(Employee.name);

const developer = new Employee('Shaun Erik', 60000, 'developer');
console.log(developer); // logs {name: "Shaun Erik", salary: 60000, position: "developer"} to the console.

function greet(name = "World") {
    console.log(`Hello, ${name}!`);
  }

  greet(); // logs "Hello, World!"
  greet("Alice"); // logs "Hello, Alice!"

function sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    console.log(total);
  }
  
  sum(1, 2, 3); // logs 6
  sum(4, 5, 6, 7); // logs 22