// Async

// Basic Async
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
// Success:  Successfully Login

// Async Await
let displayName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(name);
      resolve();
    }, 1000);
  });
};

let display = async () => {
  await displayName("Joshua");
  await displayName("Juan");
  await displayName("Jose");
  await displayName("Maria");
  await displayName("Emilio");
};

display();
