// Conditional
// If Else
let age = 18;

if (age >= 18) {
  console.log("You are allowed");
} else {
  console.log("Minor not allowed");
}

// Nested If Else
let age = 1;

if (age <= 2) {
  console.log("Hello Baby");
} else if (age >= 3 && age <= 12) {
  console.log("Hey Kiddie");
} else if (age >= 13 && age <= 21) {
  console.log("Whats up Teenager");
} else if (age >= 21 && age <= 59) {
  console.log("Hello Sir/Mam");
} else if (age >= 60) {
  console.log("I am truly Respect You");
} else {
  console.log("Meh?? Invalid Age");
}

// Multiple Nested If Else
let name = "Joshua";
let age = 18;
let country = "Philippines";
let firstLetterName = name.substring(0, 1);

if (firstLetterName == "J" || firstLetterName == "j") {
  console.log('Hello "J"');
  if (age >= 18) {
    console.log("How are you?");
    if (country == "Philippines" || country == "philippines") {
      console.log("Welcome Back to the Philippines " + name);
    } else {
      console.log(
        "My bad other countries are banned, only from Philippines can enter"
      );
    }
  } else {
    console.log("Apologize minor are not allowed");
  }
} else {
  console.log("Sorry Only Name that starts in letter J Accepted");
}

// Switch Case
let OnetoFive = Math.round(Math.random() * 5 + 1);

switch (OnetoFive) {
  case 1:
    console.log("Number 1");
    break;
  case 2:
    console.log("Number 2");
    break;
  case 3:
    console.log("Number 3");
    break;
  case 4:
    console.log("Number 4");
    break;
  case 5:
    console.log("Number 5");
}

// Ternary Operator
let username = "admin";
let password = "admin123";

let ifMatched =
  username == "admin" && password == "admin123"
    ? "Username and Password Matched"
    : "Not Matched";

console.log(ifMatched);
