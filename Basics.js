// Basics
// Practice 1: Changing Value
let name = "Joshua";
let age = 0;
console.log(name + "\n" + age);

name = "Josh";
age = 21;
console.log(name + "\n" + age);
// Other Syntax
console.log(name.replace("Joshua", "Josh"));

// Practice 2: Adding Integers
let num1 = 1;
let num2 = 2;

console.log(num1 + num2);

// Practice 3: Combining
let name = "Joshua";
let age = 21;
let city = "Quezon City";

console.log(`Your name is ${name} Age is ${age} lived in ${city}`);

// Practice 4: Mathematics and Numbers
let randomNumber = Math.random();
console.log("Decimal Random: " + randomNumber);
let wholeNumber = Math.round(randomNumber * 10);
console.log("Whole Number: " + wholeNumber);
let longNumber = Math.round(randomNumber * 99999);
console.log("Long Random Number: " + longNumber);

// Practice 5: lowercase and UPPERCASE
let name = "JosHuA";
let lowerCaseName = name.toLowerCase();
let upperCaseName = name.toUpperCase();

console.log("Normal: " + name);
console.log("Lowered: " + lowerCaseName);
console.log("Uppercased: " + upperCaseName);
