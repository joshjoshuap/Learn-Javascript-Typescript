// Functions

// Basics
function HelloWorld() {
  console.log("Hello World");
}

HelloWorld();

// Return Function
function sum(num1, num2) {
  let total = `${num1} + ${num2} = ${num1 + num2}`;
  return total;
}

console.log(sum(1, 3));

// Parameters
function person(FirstName, LastName) {
  console.log(`${FirstName} ${LastName}`);
}

person("Joshua", "Pautanes");

// Nested Function
function math(userNum1, userNum2) {
  function add(num1, num2) {
    console.log(num1 + num2);
  }

  add(userNum1, userNum2);
}

math(2, 2);

// Function inside object
let math = {
  sum(num1, num2) {
    return console.log(num1 + num2);
  },
  sub(num1, num2) {
    return console.log(num1 - num2);
  },
};

math.sum(1, 2);

// Arrow Function
let add = (num1, num2) => {
  console.log(num1 + num2);
};

let subtract = (num1, num2) => {
  console.log(num1 - num2);
};

add(1, 2);
subtract(2, 2);

// Default Parameters, Values
let personGrade = (name, grades = 0, status = "No Grade") => {
  let person = {
    name: name,
    grade: grades,
    status: status,
  };
  console.log(
    `Hello ${person.name} your grade is ${person.grade} means ${status}`
  );
};

personGrade("Joshua");

// Passing Objects in Parameters
let studentName = "Joshua";
let subjectGrade = {
  math: 90,
  science: 100,
  english: 80,
};

let studentInfo = (name, grades) => {
  let student = name;
  let average = (grades.math + grades.science + grades.english) / 3;
  console.log(`Hello ${student} your total grade is ${average}`);
};

studentInfo(studentName, subjectGrade);

// Calling Other Function
let hello = (userName) => {
  return "Hello " + userName;
};

let greet = (inputName) => {
  console.log(hello(inputName));
};

greet("Joshua");

// Function calling Function
let calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

let checkPassed = (grade1, grade2, grade3) => {
  let totalGrade = calcAverage(grade1, grade2, grade3);

  if (totalGrade >= 75) {
    console.log(`You Passed Grade: ${totalGrade}`);
  } else {
    console.log(`You Failed Grade: ${totalGrade}`);
  }
};

checkPassed(80, 85, 100);

// Function Calling Function - Example 2
let addition = (userNums) => {
  let num1 = userNums.num1;
  let num2 = userNums.num2;
  return console.log(num1 + num2);
};

let subtraction = (userNums) => {
  let num1 = userNums.num1;
  let num2 = userNums.num2;
  return console.log(num1 - num2);
};

let solveMath = (userChoose, userNumbers) => {
  if (userChoose == "add") {
    return addition(userNumbers);
  } else if (userChoose == "sub") {
    return subtraction(userNumbers);
  }
};

let nums = {
  num1: 2,
  num2: 3,
};
solveMath("sub", nums);

// Execution Context
let displayName = () => {
  return console.log("Joshua");
};

let searchName = () => {
  return displayName();
};

let myName = () => {
  return searchName();
};

myName();

// Function Expression - Declaration
// Expression
let name = "Joshua";
displayName(); // error can't access displayName

let displayName = () => {
  console.log(name);
};
displayName(); // can access displayName

// Declaration - Both can access displayName
let name = "Joshua";
displayName();

function displayName() {
  console.log(name);
}
displayName();

// Call
let person1 = {
  name: "Juan",
  age: 0,
  mathGrade: 80,
  grade() {
    return (this.mathGrade = 100);
  },
};

let person2 = {
  name: "Joshua",
  age: 99,
  mathGrade: 0,
};

person1.grade.call(person2); // make a copy of grade() value to person2 mathGrade
console.log(`Name: ${person2.name} Grade: ${person2.mathGrade}`);

// Apply
let person1 = {
  name: "Juan",
  age: 0,
  mathGrade: 80,
  grade(grades) {
    return (this.mathGrade = grades);
  },
};

let person2 = {
  name: "Joshua",
  age: 99,
  mathGrade: 0,
};

person1.grade.apply(person2, [100]); // pass the value of 100 to grade() and make copy to person 2 math grade
console.log(`Name: ${person2.name} Grade: ${person2.mathGrade}`);

// Bind
function add(num1, num2) {
  return console.log(num1 + num2); // 5
}

let addNumber = add.bind(this, 3); // this = addNumber(2), num1 = 2 num2 = 3.
addNumber(2);