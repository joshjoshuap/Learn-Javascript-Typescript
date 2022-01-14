// Promises

// Basic Promises
let firstName = "Jose";
let lastName = "Rizal";
let age = 100;

let checkAge = (age) => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("You are allowed"); // pass to .then data
    } else {
      reject("Minor not allowed"); // pass to .catch err
    }
  });
};

checkAge(age)
  .then((data) => {
    console.log(`${firstName} ${lastName}`);
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
