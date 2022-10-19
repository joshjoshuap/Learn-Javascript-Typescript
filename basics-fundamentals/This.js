// This Keyword

// This Keyword - Objects
let math = {
  num1: 2,
  num2: 2,
  add() {
    console.log(this.num1 + this.num2);
  },
  sub() {
    console.log(this.num1 - this.num2);
  },
  multiply() {
    console.log(this.num1 * this.num2);
  },
  divide() {
    console.log(this.num1 / this.num2);
  },
};

math.add(); // 4

// Constructor Function
function registerUser(username, password, name, email, contacts) {
  this.username = username;
  this.password = password;
  this.name = name;
  this.email = email;
  this.contacts = contacts;
}

let user1 = new registerUser(
  "Josh Josh",
  "1234",
  "Joshua",
  "Joshua@gmail.com",
  09123456789
);

console.log(`Username: ${user1.username}\nPassword: ${user1.password}`);
/* 
Username: Josh Josh
Password: 1234
*/

// Calling function
let person = {
  name: 'Joshua',
  displayName() {
    return console.log(this.name);
  },
  whatIsMyName() {
    return this.displayName();
  }
}

person.whatIsMyName(); // Joshua