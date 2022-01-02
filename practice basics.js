// --- MULTI DIMENSIONAL LOOPING ARRAY ---

// PRACTICE 1: USING FOR
let grades = [
  ["Math", "Science", "English"],
  ["90", "80", "20"],
];

for (let i = 0; i < grades.length; i++) {
  for (let j = 0; j < grades[i].length; j++) {
    console.log(grades[i][j]);
  }
}

// USING FOREACH
let grades = [
  ["Math", "Science", "English"],
  ["90", "80", "20"],
];

grades.forEach((Items) => {
  Items.forEach((data) => {
    console.log(data);
  });
});

// PRACTICE 2: USING FOR OF
let grades = [
  ["Math", "Science", "English"],
  ["90", "80", "20"],
];

for (let item of grades) {
  for (let data of item) {
    console.log(data);
  }
}

// --- ARRAY --

// PRACTICE 3: Basics One Dimensional
let fruits = ["Apple", "Banana", "Orange"];

console.log(`${fruits[0]} and ${fruits[1]}`);

// Multi Dimensional
let numbers = [
  [1, 2, 3],
  [0.2, 0.5, 0.9],
];

console.log(`Total: ${numbers[0][0] + numbers[1][0]}`);

// PRACTICE 4: Push Pop Array
let numbers = [2, 3, 4, 5];

console.log(numbers);

numbers.push(6);
numbers.pop();

console.log(numbers);

// PRACTICE 5: Pop and get first array and last array
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

// PRACTICE 6: Display odd and even arrays
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Array: ${numbers}`);

console.log("Even Array: ");
for (let i = 1; i <= numbers.length - 1; i += 2) {
  console.log(`${numbers[i]}`);
}

console.log("Odd Array: ");
for (let i = 0; i <= numbers.length - 1; i += 2) {
  console.log(`${numbers[i]}`);
}

// PRACTICE 7: Accessing Objects
let userName = "Juan"; // User Input
let userPassword = "000"; // User Input

let users = {
  Joshua: {
    Name: "Joshua",
    Gender: "Male",
    Age: 21,
    Password: "1234",
  },
  Juan: {
    Name: "Juan",
    Gender: "Male",
    Age: 100,
    Password: "000",
  },
};

let welcomeBack = (user) => {
  console.log(`Welcome Back! ${user}`);
};

Object.byString = function (o, s) {
  s = s.replace(/\[(\w+)\]/g, ".$1"); // convert indexes to properties
  s = s.replace(/^\./, ""); // strip a leading dot
  var a = s.split(".");
  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i];
    if (k in o) {
      o = o[k];
    } else {
      return;
    }
  }
  return o;
};

let findUserName = Object.byString(users, userName); // replace userName string to accessing object

try {
  // check if userName is existed
  if (Object.values(findUserName).includes(userName)) {
    if (findUserName.Password == userPassword) {
      console.log("Successfully Login");
      welcomeBack(findUserName.Name); // called welcomeBack and pass findUserName.name
    } else {
      console.log("Password Incorrect");
    }
  } else if (!Object.values(findUserName).includes(userName)) {
    console.log(`Account Doesn't Exist`);
  }
} catch (error) {}

// -- Functions --
// PRACTICE 8: Return
let InputFirstName = () => {
  return "Joshua";
};

let InputLastName = () => {
  return "Pautanes";
};

let FullName = () => {
  return `${InputFirstName()} ${InputLastName()}`;
};

console.log(FullName());

// PRACTICE 9: Passing Data
let userData = {
  userName: "Joshua",
  Password: "123",
};

let userExist = (userPasswordInput) => {
  if (userData.Password == userPasswordInput) {
    console.log("Successfully Login");
  } else {
    console.log("Incorrect Password");
  }
};

let userNotExist = () => {
  console.log("User Not Exist");
};

let UserInput = (userNameInput, userPasswordInput) => {
  if (userData.userName == userNameInput) {
    console.log("User Exist");
    userExist(userPasswordInput);
  } else {
    userNotExist();
  }
};

UserInput("Joshua", "1234");
