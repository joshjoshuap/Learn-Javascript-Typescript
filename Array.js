// Array
// One Dimensional
let fruits = ["Apple", "Banana", "Orange"];

console.log(`${fruits[0]} and ${fruits[1]}`);

// Multi Dimensional
let numbers = [
  [1, 2, 3],
  [0.2, 0.5, 0.9],
];

console.log(`Total: ${numbers[0][0] + numbers[1][0]}`);

// Looping One Dimensional Array
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Looping Two Dimensional Array
let numbers = [
  [2, 4, 6, 8, 19],
  [1, 3, 5, 7, 9],
];
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers[i].length; j++) {
    console.log(numbers[i][j]);
  }
}

// Push
let numbers = [2, 3, 4, 5];
numbers.push(6);
console.log(numbers);

// Pop
let numbers = [2, 3, 4, 5];
numbers.pop();
console.log(numbers);

// Unshift
var num = [1, 2, 3];
num.unshift(0);

console.log(num);

// Shift
var num = [1, 2, 3];
num.shift(0);

console.log(num);

// Pop and get first array and last array
let letters = [1, 2, 3, 4, 5];
console.log(`${letters}`);
let firstLetter = letters[0];
let lastLetter = letters[letters.length - 1];
for (let i = 0; i < letters.length + 4; i++) {
  letters.shift();
  letters.pop();
}
letters.unshift(firstLetter);
letters.push(lastLetter);
console.log(`${letters}`);

// Slice Array
let name = ["Joshua", "Juan", "Emilio", "Maria", "Jose"];
let slicedArray = name.slice(1, 4);
console.log(slicedArray);

// Splice Adding data in array
let name = ["a", "b", "c", "d"];
name.splice(1, 0, "5"); // 1, 2 is a index range want to delete
console.log(name);

// Destructing Array
let subject = ["Math", "Science", "English"];

let [firstSubject, secondSubject, thirdSubject] = subject;
console.log(firstSubject);

// Filter Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let odd = numbers.filter((nums) => {
  return nums % 2 === 0;
});

let even = numbers.filter((nums) => {
  return nums % 2 === 1;
});

let SixtoTen = numbers.filter((nums) => {
  return nums >= 6;
});

let OnetoFive = numbers.filter((nums) => {
  return nums <= 5;
});

console.log(odd);
console.log(even);
console.log(SixtoTen);
console.log(OnetoFive);

// Finding Index
let subject = ["Math", "Science", "English"];
console.log(subject.indexOf("Science"));

// Checking if Exist
let subject = ["Math", "Science", "English"];

if (subject.includes("Math")) {
  console.log("Subject Exist");
} else {
  console.log("Not Exist");
}

// Spread Operator ...
let number = [3, 4, 5];
console.log(number);
let newNumber = [1, 2, ...number];
console.log(newNumber);
let addNumber = [1, 2, ...number, 6, 7];
console.log(addNumber);

// Multiple Spread Operator
let firstNum = [1, 2, 3, 4, 5];
let secondNum = [6, 7, 8, 9, 10];
let thirdNum = [20, 30, 40];

let combinedNum = [...firstNum, ...secondNum, ...thirdNum];
console.log(combinedNum);

// Sets
let name = new Set(["Joshua", "Jose", "Juan", "Jose", "Jose", "Jose", "Jose"]);
console.log(name);
for (let person of name) {
  console.log(person);
}
