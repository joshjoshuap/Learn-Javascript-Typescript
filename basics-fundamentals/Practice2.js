let hello = "Hello World";
console.log(hello);

let firstName = "Joshua";
let secondName = "Pautanes";
console.log(`${firstName} ${secondName}`);

let num1 = 100;
let num2 = 1000;
console.log(`Total: ${num1 + num2}`);

let randomNumber = Math.random();
let randomInteger = Math.round(randomNumber * 100);
let randomOfFive = Math.floor((Math.random() * randomInteger) / 2) * 2;
console.log(`Random Number: ${randomNumber}`);
console.log(`Random Number: ${randomInteger}`);
console.log(`Random Number: ${randomOfFive}`);

let lowToUp = "uppercase";
let upToLow = "lowercase";
console.log(upToLow.toLowerCase());
console.log(lowToUp.toUpperCase());

let age = 18;
if (age < 18) {
  console.log("Minor");
} else if (age >= 18) {
  console.log("Legal");
} else {
  console.log("Invalid Age");
}

switch (age) {
  case age < 18:
    console.log("Minor");
    break;
  case age >= 18:
    console.log("Legal");
    break;
  default:
    console.log("Invalid Age");
}

let i = 0;
do {
  console.log("Print me 3 times");
  i++;
} while (i < 3);

for (i = 0; i < 3; i++) {
  console.log("Print me 3 times");
}

for (i = 0; i <= 10; i += 2) {
  console.log(i);
}

for (i = 1; i < 10; i += 2) {
  console.log(i);
}

let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]);
for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let name = [
  ["Jose", "Juan"],
  ["Rizal", "Tamad"],
];

for (let i = 0; i < name.length; i++) {
  for (let j = 0; j < name[i].length; j++) {
    console.log(name[i][j] + name[i][j]);
  }
}

let person = {
  firstName: "Joshua",
  lastName: "Pautanes",
  age: 21,
  Hobbies: ["Programming", "Kpop"],
};

console.log(
  `My Name is ${person.firstName} ${person.lastName} i am ${person.age} years old and i spend my time on ${person.Hobbies[0]} ${person.Hobbies[1]}`
);

let number = [1, 2, 3];
console.log(`Original Array \n${number}`);

number.push(4);
console.log(number);
number.pop();
number.pop();
console.log(number);
number.unshift(0);
console.log(number);
number.pop();
number.shift();
console.log(number);

let fruit = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruit.slice(2));
console.log(fruit.slice(1, 3));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even = numbers.filter((num) => {
  return num % 2 == 0;
});

let odd = numbers.filter((num) => {
  return num % 2 == 1;
});

console.log(even);
console.log(odd);

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i <= number.length; i += 2) {
  console.log(i);
}

for (let i = 1; i <= number.length; i += 2) {
  console.log(i);
}

let persons = [
  { firstName: "Jose", lastName: "Rizal" },
  { firstName: "Andres", lastName: "Bonifacio" },
];

persons.map((person) => {
  console.log(`Fullname: ${person.firstName} ${person.lastName}`);
});

let numbers = [1, 2, 5, 6, 8, 10];

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

console.log(total);

let num1 = [1,2,3];
let num2 = [4,5];
let numbers = num1.concat(num2);
console.log(numbers);

let name = {
  fullname: function (firstName, secondName) {
    return console.log(`${firstName} ${secondName}`);
  }
}

name.fullname('Joshua', 'Pautanes');

let person = {
  firstName: 'Joshua',
  lastName: 'Pautanes'
}

let {firstName, lastName} = person;
console.log(`${firstName} ${lastName}`);

let fullName = ({firstName, lastName}) => {
  console.log(`${firstName} ${lastName}`);
}

fullName(person);

let personAge = {
  jose: 100,
  juan: 0,
  joshua: 21
}

for (let person in personAge) {
  console.log(`${person} : ${personAge[person]}`);
}