// tempalte literals
let college = "Quezon City University";
let course = "Bachelor of Science in Information Technology";
let status = "Graduated";

console.log(`School: ${college} Course: ${course} Status: ${status}`);

// arithmetic
let number1 = 5;
let number2 = 6;
console.log(
  `Add: ${number1 + number2} \nSubtract: $${number1 - number2} \nMultiply: ${
    number1 * number2
  } Divide: ${number1 / number2}`
);

// ramdom number
let randomDice = Math.floor(Math.random() * 6) + 1;
console.log(`Your Dice is ${randomDice}`);

// for loop - single array
let country = ["Thailand", "Philippines", "Indonesia", "Malaysia", "Vietnam"];
for (let i = 0; i < country.length; i++) {
  console.log(country[i]);
}

// for of - single array
let country = ["Thailand", "Philippines", "Indonesia", "Malaysia", "Vietnam"];
for (let world of country) {
  console.log(world);
}

// for each - single array
let country = ["Thailand", "Philippines", "Indonesia", "Malaysia", "Vietnam"];
country.forEach((world) => {
  console.log(world);
});

// for loop - multi array
let numsCharacter = [
  [1, 2, 3],
  ["A", "B", "C"],
];

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers[i].length; j++) {
    console.log(numbers[i][j]);
  }
}

// for of - multi array
let numsCharacter = [
  [1, 2, 3],
  ["A", "B", "C"],
];

for (let set of numsCharacter) {
  for (let items of set) {
    console.log(items);
  }
}

let numsCharacter = [
  [1, 2, 3],
  ["A", "B", "C"],
];

numsCharacter.forEach((set) => {
  set.forEach((items) => {
    console.log(items);
  });
});

let name = {
  person1: "Jose",
  person2: "Juan",
  person3: "Emilio",
};

for (let person in name) {
  console.log(name[person]);
}

for (let person of Object.values(name)) {
  console.log(person);
}

Object.values(name).forEach((person) => {
  console.log(person);
});

Object.keys(name).forEach((keys) => {
  console.log(name[keys]);
});

let countries = [
  { country: "Philippines", Capital: "Manila" },
  { country: "South Korea", Capital: "Seoul" },
  { country: "Japan", Capital: "Tokyo" },
];

countries.map((place) => {
  console.log(`${place.Capital}, ${place.country}`);
});
