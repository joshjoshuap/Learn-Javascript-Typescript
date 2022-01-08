// Basics
// Changing Value
let name = "Joshua";
let age = 0;
console.log(`name ${age}`);

name = "Josh";
age = 21;
console.log(`name ${age}`);
// Other Syntax
console.log(name.replace("Joshua", "Josh"));

// Adding Integers
let num1 = 1;
let num2 = 2;

console.log(num1 + num2);

// Combining
let name = "Joshua";
let age = 21;
let city = "Quezon City";

console.log(`Your name is ${name} Age is ${age} lived in ${city}`);

// Mathematics and Numbers
let randomNumber = Math.random();
console.log(`Decimal Random: ${randomNumber}`);
let wholeNumber = Math.round(randomNumber * 10);
console.log(`Whole Number:  ${wholeNumber} `);
let longNumber = Math.round(randomNumber * 99999);
console.log(`Long Random Number: ${longNumber}`);

// lowercase and UPPERCASE
let name = "JosHuA";
let lowerCaseName = name.toLowerCase();
let upperCaseName = name.toUpperCase();

console.log(`Normal: ${name}`);
console.log(`Lowered: ${lowerCaseName}`);
console.log(`Uppercased: ${upperCaseName}`);

// BMI
let markHeight = 1.9;
let markWeight = 78;
let markBMI = markWeight / markHeight ** 2;

let johnHeight = 1.8;
let johnWeight = 92;
let johnBMI = johnWeight / johnHeight ** 2;

console.log(`Mark BMI ${markBMI}`);
console.log(`John BMI ${johnBMI}`);

// Strings Template Literals
let one = "one";
let two = "two";
let three = "three";
let four = "four";
let five = "five";

console.log(`1:${one}\n2:${two}\n3:${three}\n4:${four}\n5:${five}`);

// Converting String to Numbers
let num1 = "1";
let num2 = "2";

console.log(`Not Converted: ${num1 + num2}`);
console.log(`Converted: ${Numbers(num1) + Numbers(num2)}`);

// Converting Numbers to String
let num1 = 1;
let num2 = 2;

console.log(`Not Converted: ${num1 + num2}`);
console.log(`Converted: ${String(num1) + String(num2)}`);
