// Error Handling

// Try Catch
try {
  let num1 = 2;
  console.log(num1 + num2);
} catch (error) {
  console.log("Error Found !!");
  console.log(error.message);
}
/* 
Error Found !!
num2 is not defined
*/

// Nested Try Catch
try {
  let num1 = 2;
  try {
    let num2 = 3;
    console.log("Result:", num1 + num3);
  } catch (err) {
    console.log("Second Catch Error:", err.message);
  }

  console.log(num2); // cann access num2
} catch (err) {
  console.log("First Catch: Error:", err.message);
}
/* 
Second Catch Error: num3 is not defined
First Catch: Error: num2 is not defined

*/

// Promises Resolve - Reject
let userLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    if (username === "admin" && password === "admin")
      return resolve("Successfull Login");
    if (username !== "admin" && password === "admin")
      return reject("Username Invalid");
    if (username === "admin" && password !== "admin")
      return reject("Password Invalid");
    if (username !== "admin" && password !== "admin")
      return reject("Both username and password Invalid");
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
/* Password Invalid */


// Async - Promises
let userLogin = async (username, password) => {
  if (username === "admin" && password === "admin") return "Successfully Login";
  if (username !== "admin" && password === "admin") throw "Username Invalid";
  if (username === "admin" && password !== "admin") throw "Password Invalid";
  if (username !== "admin" && password !== "admin")
    throw "Both username and password Invalid";
  if (!username && !password) throw "Missing Credentials";
};

userLogin("admin", "admin") // username, password
  .then((status) => {
    // calling return
    console.log("Success: ", status);
  })
  .catch((err) => {
    // calling throw
    console.log("Failed: ", err);
  });
/* Success:  Successfully Login */