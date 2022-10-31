// Basics

// Changing Value
let name = "Joshua";
let age = 0;
console.log(`age ${age}`); // 0

name = "Josh";
age = 21;
console.log(`age ${age}`); // 21

// Other Syntax
console.log(name.replace("Joshua", "Josh")); // Josh

// Adding Integers
let num1 = 1;
let num2 = 2;

console.log(num1 + num2); // 3

// Combining
let name = "Joshua";
let age = 21;
let city = "Quezon City";

console.log(`Your name is ${name} Age is ${age} lived in ${city}`);
// Your name is Joshua Age is 21 lived in Quezon City

// Mathematics and Numbers
let randomNumber = Math.random();
console.log(`Decimal Random: ${randomNumber}`); // Decimal Random: 0.28325320492395667

let wholeNumber = Math.round(randomNumber * 10);
console.log(`Whole Number:  ${wholeNumber} `); // Whole Number:  3

let longNumber = Math.round(randomNumber * 99999);
console.log(`Long Random Number: ${longNumber}`); // Long Random Number: 28325

// lowercase and UPPERCASE
let name = "JosHuA";
let lowerCaseName = name.toLowerCase();
let upperCaseName = name.toUpperCase();

console.log(`Normal: ${name}`); // Normal: JosHuA
console.log(`Lowered: ${lowerCaseName}`); // Lowered: joshua
console.log(`Uppercased: ${upperCaseName}`); // Uppercased: JOSHUA

// Strings Template Literals
let one = "one";
let two = "two";
let three = "three";
let four = "four";
let five = "five";

console.log(`1:${one}\n2:${two}\n3:${three}\n4:${four}\n5:${five}`);
/*
1:one
2:two
3:three
4:four
5:five
*/

// Converting String to Numbers
let num1 = "1";
let num2 = "2";

console.log(`Not Converted: ${num1 + num2}`); // Not Converted: 12
console.log(`Converted: ${Number(num1) + Number(num2)}`); // Converted: 3

// Converting Numbers to String
let num1 = 1;
let num2 = 2;

console.log(`Not Converted: ${num1 + num2}`); // Not Converted: 3
console.log(`Converted: ${String(num1) + String(num2)}`); // Converted: 12
