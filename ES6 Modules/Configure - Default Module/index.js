// import accountInfo from "./account.js"; // importing default export and configure name

import { account } from "./account.js"; // importing changed named
let display = document.querySelector(".display");

let user1 = new account(
  "Joshua",
  "Pautanes",
  "Josh",
  "Josh123",
  "josh@email.com",
  21
);

// display.textContent = user1.fullInfo();
display.textContent = user1.fullName(); // calling fullName() function in accountInfo
