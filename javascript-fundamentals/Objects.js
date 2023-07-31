// Object

// Basics
var person = {
  name: {
    lastname: "Pautanes",
    firstname: "Joshua",
  },
  age: 20,
};

// using dot notation
console.log(
  "My Fullname is " + person.name.firstname + " " + person.name.lastname
);

// using bracket
console.log(`My Lastname is ${person.name["lastname"]}`);
// My Fullname is Joshua Pautanes

// Object with Array
let person = {
  name: {
    firstname: "Joshua",
    lastname: "Pautanes",
    middlename: "Espiloy",
  },
  age: 21,
  city: "Quezon City",
  hobbies: ["Kdrama", "Kpop"],
};

console.log(person.hobbies[1]); // Kpop

// Object with Function
let math = {
  sum: function (num1, num2) {
    return console.log(num1 + num2);
  },

  sub: function (num1, num2) {
    return console.log(num1 - num2);
  },
};

math.sum(1, 2); // 3

// Destructing Object
let student = {
  firstname: "Joshua",
  lastname: "Pautanes",
  Section: "SBIT3Q",
  Grade: 90,
};

let { lastname, grade } = student;
console.log(lastname); // Pautanes

// Destructing Params
let student = {
  firstname: "Joshua",
  lastname: "Pautanes",
  Section: "SBIT3Q",
  Grade: 90,
};

let fullName = ({ firstname, lastname }) => {
  console.log(`${firstname} ${lastname}`);
};

fullName(student); // Joshua Pautanes

// Object Loop - For of
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

// Object Loop - For in
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

// Object Values
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

// Object Keys
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

// Object Entries
let grade = {
  jose: 80,
  maria: 82,
  juan: 90,
  andres: 100,
};

Object.entries(grade).forEach((value) =>
  console.log(`${value[0]} : ${value[1]}`)
);
/* 
jose : 80
maria : 82
juan : 90
andres : 100
*/

// Object Find value using Bracket
let personInfo = {
  firstname: "Joshua",
  lastname: "Pautanes",
  hobbies: "Programming",
};

let getPersonInfo = (getInfo) => personInfo[getInfo];
console.log(getPersonInfo("firstname")); // Joshua

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

// Bracket Notation
let userInfo = () => {
  firstname, lastname, username, password;
};

userInfo["firstname"] = "Joshua";
userInfo["lastname"] = "Pautanes";
userInfo["username"] = "JoshuaP";
userInfo["password"] = "12345";

for (let user in userInfo) {
  console.log(`${user} : ${userInfo[user]}`);
}
/* 
firstname : Joshua
lastname : Pautanes
username : JoshuaP
password : 12345
*/

// Array - Objects Combination
let grade = ["Math", "English", "Science"];
let gradeInfo = {
  [grade[0]]: {
    grade1: 80,
    grade2: 90,
  },
  [grade[1]]: {
    grade1: 75,
    grade2: 100,
  },
  [grade[2]]: {
    grade1: 85,
    grade2: 90,
  },
};

console.log(
  `Your ${grade[0]} Grade is ${gradeInfo.Math.grade1} and ${gradeInfo.Math.grade2}`
);
// Your Math Grade is 80 and 90

// Object Create
let userInfo = {
  addFullname(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  },
};

let user1 = Object.create(userInfo);
user1.age = 21; // add age set to 21
user1.addFullname("Joshua", "Lastname"); // pass data to addFullName method

console.log(`Hello ${user1.firstname} Age ${user1.age}`); // Hello Joshua Age 21
