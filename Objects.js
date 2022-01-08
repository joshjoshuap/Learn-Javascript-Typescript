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

console.log(person.hobbies[1]);

// Object with Function
let math = {
  sum: function (num1, num2) {
    return console.log(num1 + num2);
  },

  sub: function (num1, num2) {
    return console.log(num1 - num2);
  },
};

math.sum(1, 2);

// Destructing Object
let student = {
  firstname: "Joshua",
  lastname: "Pautanes",
  Section: "SBIT3Q",
  Grade: 90,
};

let { lastname, grade } = student;
console.log(lastname);

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

fullName(student);

// For of Object Loop
let grade = {
  jose: 80,
  maria: 82,
  juan: 90,
  andres: 100,
};

for (let score of Object.values(grade)) {
  console.log(score);
}

// For In Object Loop
let grade = {
  jose: 80,
  maria: 82,
  juan: 90,
  andres: 100,
};

for (let person in grade) {
  console.log(`${person} : ${grade[person]}`);
}

// Mapping Array Objects
let movies = [
  { title: "a", score: 10 },
  { title: "b", score: 11 },
];

movies.map(function (movie) {
  console.log(`Movie: ${movie.title} Rate: ${movie.score}`);
});

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
