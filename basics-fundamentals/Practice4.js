let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Single Array
let multiNumbers = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]] // Multi Array
let people = [
{name: 'Jose', age: 100},
{name: 'Juan', age: 10}
]
    
// Odd & Even
for (let i = 1; i < numbers.length; i+=2) console.log(numbers[i]); // even
for (let i = 0; i < numbers.length; i+=2) console.log(numbers[i]); // odd

for (let num of numbers) if (num % 2 === 0) console.log(num); // even
for (let num of numbers) if (num % 2 === 1) console.log(num); // odd

numbers.filter(num => num % 2 === 0).forEach(num => console.log(num)); // even
numbers.filter(num => num % 2 === 1).forEach(num => console.log(num)); // odd

// Looping Numbers Single Array
for (let i = 0; i < numbers.length; i++) console.log(numbers[i]);

for (let num of numbers) console.log(num);

numbers.forEach(num => console.log(num));

// Looping Number Multi Array
for (let i = 0 ; i < multiNumbers.length; i++) 
for (let j = 0; j < multiNumbers[i].length; j++) 
console.log(multiNumbers[i][j]);

for (let row of multiNumbers) 
for (let num of row) 
console.log(num)

multiNumbers.forEach(row => row.forEach(num => console.log(num)));

// Mapping Array Objects
people.map(person => console.log(person.name, person.age))