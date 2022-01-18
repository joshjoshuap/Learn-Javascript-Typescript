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

// Promises Resolve - Reject
let userLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    if (username === "admin" && password === "admin") return resolve("Successfull Login");
    if (username !== "admin" && password === "admin") return reject("Username Invalid");
    if (username === "admin" && password !== "admin") return reject("Password Invalid");
    if (username !== "admin" && password !== "admin") return reject("Both username and password Invalid");
    if (!username && !password) return reject("Missing Credentials");
  });
};

userLogin("admin", "admins")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Chain Promises
let displayName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(name);
      resolve();
    }, 1000);
  });
};

displayName("Joshua")
  .then(() => displayName("Juan"))
  .then(() => displayName("Jose"))
  .then(() => displayName("Maria"))
  .then(() => displayName("Emilio"));
