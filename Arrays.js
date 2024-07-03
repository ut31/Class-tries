/* const oddNumsArray = [1, 3, 5, 7, 9];

for (let i = 0; i < oddNumsArray.length; i++) {
  console.log(oddNumsArray[i]);
}

const seaAnimals = ['FISH', 'SHRIMP', 'SHARK', 'OCTOPUS', 'SQUID', 'WHALE'];

const lowerCaseSeaAnimals = seaAnimals.map(function(seaAnimal) {
  return seaAnimal.toLowerCase();
});

console.log(lowerCaseSeaAnimals); //prints ['fish', 'shrimp', 'shark', 'octopus', 'squid', 'whale']
*/
const names=['AYA','MARY','DOAA','HADEEL'];
function getlower(params){
    for(var i =0;i<params.length;i++){
        console.log(params[i].toLowerCase);
    }
}

getlower(names);

const numbers = [1, 2, 0, -44, 50, 100, 30, -59, -66];

const positiveNums = numbers.filter(function(number) {
  return number >= 0;
});

console.log(positiveNums); // prints [1, 2, 0, 50, 100, 30]

const planets = [
    {
      name: 'earth',
      distance: '150 million km'
    },
    {
      name: 'neptune',
      distance: '4.50 billion km'
    },
    {
      name: 'mars',
      distance: '228 million km'
    }
  ];
  
  const allPlanetsObj = planets.reduce(function(accumulator, planetObj) {
    accumulator[planetObj.name] = planetObj.distance;
    return accumulator;
  }, {});
  
  console.log(allPlanetsObj); 
  // logs the following object
  // {
  //   earth: '150 million km',
  //   neptune: '4.50 billion km',
  //   mars: '228 million km'
  // }


  const text1 = 'Hello, World!';
  console.log(text1.length); // Output: 13
  const text2 = 'Hello, World!';
console.log(text2.charAt(0)); // Output: 'H'
const text3 = 'Hello, World!';
console.log(text3.charAt(0)); // Output: 'H'

const text4 = 'Hello, World!';
const words = text4.split(' ');//we will have an array
console.log(words); // Output: ['Hello,', 'World!']

const text5 = 'Hello, World!';
const newText = text5.replace('World', 'JavaScript');
console.log(newText); // Output: 'Hello, JavaScript!'
const text = '    Hello, World!    ';
console.log(text.trim()); // Output: 'Hello, World!'