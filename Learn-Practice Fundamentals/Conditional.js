// Conditional

// Practice 1: If Else
let age = 18;

if (age >= 18) {
  console.log("You are allowed");
} else {
  console.log("Minor not allowed");
}

// Practice 2: Nested If Else
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

// Practice 3: Advanced Multiple Nested If Else
let name = "Joshua";
let age = 18;
let country = "Pilippines";

let firstLetterName = name.substring(0, 1);

if (firstLetterName == "J" || firstLetterName == "j") {
  console.log('Hello "J"');
  if (age >= 18) {
    console.log("How are you?");
    if (country == "Philippines" || country == "philippines") {
      console.log("Welcome Back to the Philippines " + name);
    } else {
      console.log(
        "My bad other countries are banned, only from Phillipines can enter"
      );
    }
  } else {
    console.log("Apologize minor are not allowed");
  }
} else {
  console.log("Sorry Only Name that starts in letter J Accepted");
}
