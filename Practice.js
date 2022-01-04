// --- MULTI DIMENSIONAL LOOPING ARRAY ---

// USING FOR
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

// USING FOR OF
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
// Display odd and even arrays
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

// Accessing Objects
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

// -- FUNCTIONS --
//  Return
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

//  Passing Data
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

// Function calling Function
let calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

let checkPassed = (grade1, grade2, grade3) => {
  let totalGrade = calcAverage(grade1, grade2, grade3);

  if (totalGrade >= 75) {
    console.log(`You Passed Grade: ${totalGrade}`);
  } else [console.log(`You Failed Grade: ${totalGrade}`)];
};

checkPassed(80, 85, 100);
