// Looping

// For Loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// 1 2 3 4 5 6 7 8 9 10

console.log("Even Numbers:");
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
// 2 4 6 8 10

console.log("Odd Numbers:");
for (let i = 1; i < 10; i += 2) {
  console.log(i);
}
// 1 3 5 7 9

// Nested Loop
for (let i = 1; i <= 3; i++) {
  console.log("Number:" + i);
  for (let j = 1; j <= 2; j++) {
    console.log("   No:" + j);
  }
}
/*
Number:1
   No:1
   No:2
Number:2
   No:1
   No:2
Number:3
   No:1
   No:2
*/

// For Loop - Single Array
let country = ["Thailand", "Philippines", "Indonesia", "Malaysia", "Vietnam"];
for (let i = 0; i < country.length; i++) {
  console.log(country[i]);
}
/* 
Thailand
Philippines
Indonesia
Malaysia
Vietnam
*/

// For Loop - Multi Array
let numsCharacter = [
  [1, 2, 3],
  ["A", "B", "C"],
];

for (let i = 0; i < numsCharacter.length; i++) {
  for (let j = 0; j < numsCharacter[i].length; j++) {
    console.log(numsCharacter[i][j]);
  }
}
/* 
1
2
3
A
B
C
*/

// For of - Single Array
let number = [1, 2, 3, 4, 5];

for (let nums of number) {
  console.log(nums);
}
/* 
1
2
3
4
5
*/

// For of - Multi Array
let seatingArrangement = [
  ["Joshua", "Juan"],
  ["Maria", "Angel"],
  ["Andres", "Emilio"],
];

for (let row of seatingArrangement) {
  for (let student of row) {
    console.log(student);
  }
}
/* 
Joshua
Juan
Maria
Angel
Andres
Emilio
*/

// For Each - Single Array
let num = [1, 2, 3, 4];

num.forEach((numbers, i) => {
  console.log(`Index ${i + 1} : ${numbers}`);
});

// For Each - Multi Array
let grades = [
  ["Math", "Science", "English"],
  ["90", "80", "20"],
];

grades.forEach((Items) => {
  Items.forEach((data) => {
    console.log(data);
  });
});
/* 
Math
Science
English
90
80
20 
*/

// For of - Object
let grade = {
  jose: 80,
  maria: 82,
  juan: 90,
  andres: 100,
};

for (let score of Object.values(grade)) {
  console.log(score);
}
/* 
80
82
90
100
*/

// For in - Object
let grade = {
  jose: 80,
  maria: 82,
  juan: 90,
  andres: 100,
};

for (let person in grade) {
  console.log(`${person} : ${grade[person]}`);
}
/* 
jose : 80
maria : 82
juan : 90
andres : 100
*/

// Values - Object
let grade = {
  jose: 80,
  maria: 82,
  juan: 90,
  andres: 100,
};

Object.values(grade).forEach((value) => console.log(value));
/* 
80
82
90
100
*/

// Keys - Object
let grade = {
  jose: 80,
  maria: 82,
  juan: 90,
  andres: 100,
};

Object.keys(grade).forEach((key) => console.log(`${key} : ${grade[key]}`));
/* 
jose : 80
maria : 82
juan : 90
andres : 100
*/

// Entries - Object
let grade = {
  jose: 80,
  maria: 82,
  juan: 90,
  andres: 100,
};

Object.entries(grade).forEach((value) =>
  console.log(`${value[0]} : ${value[1]}`)
);

// Looping Object Array
let personList = [
  { name: "Juan", age: 1, job: "None" },
  { name: "Jose", age: 100, job: "Hero" },
  { name: "Elon", age: 50, job: "CEO" },
];

for (let i = 0; i < personList.length; i++) {
  let personName = personList[i].name;
  let personAge = personList[i].age;
  let personJob = personList[i].job;

  console.log(`Name: ${personName} Age: ${personAge} Job: ${personJob}`);
}

personList.forEach((personDetails) => {
  console.log(
    `Name: ${personDetails.name} Age: ${personDetails.age} Job: ${personDetails.job}`
  );
});

for (let personDetails of personList) {
  console.log(
    `Name: ${personDetails.name} Age: ${personDetails.age} Job: ${personDetails.job}`
  );
}

/* 
Name: Juan Age: 1 Job: None
Name: Jose Age: 100 Job: Hero
Name: Elon Age: 50 Job: CEO
*/

// Mapping Object Array
let personDetails = [
  { name: "Juan", age: 1, job: "None" },
  { name: "Jose", age: 100, job: "Hero" },
  { name: "Elon", age: 50, job: "CEO" },
];

personDetails.map(function (person) {
  console.log(`Name: ${person.name} Age: ${person.age} Job: ${person.job}`);
});
/* 
Name: Juan Age: 1 Job: None
Name: Jose Age: 100 Job: Hero
Name: Elon Age: 50 Job: CEO
*/
