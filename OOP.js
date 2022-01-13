// Object Oriented Programming

// Constructor Function
function registerUser(userName, userPassword, userEmail, userFirstName, userLastName, userAge) {
  this.userName = userName;
  this.userPassword = userPassword;
  this.userEmail = userEmail;
  this.userFirstName = userFirstName;
  this.userLastName = userLastName;
  this.userAge = userAge;
}

let user1 = new registerUser(
  "Josh",
  "Joshu123",
  "josh@email.com",
  "Joshua",
  "Pautanes",
  21
)

let user2 = new registerUser(
  "Juan",
  "000",
  "juan@email.com",
  "Juan",
  "Tamad",
  1
)

console.log(
`Username: ${user1.userName}\nPassword: ${user1.userPassword}\nEmail: ${user1.userEmail}\nFirstname: ${user1.userFirstName}\nLastname: ${user1.userLastName}\nAge: ${user1.userAge}
`);
 
 // Prototypes
 registerUser.prototype.checkAge = function() {
  if (this.userAge >= 18) {
    return "You are Allowed";
  } else {
    return "Minor not Allowed";
  }
}

console.log(`Hello ${user1.userFirstName} ${user1.checkAge()}`); // call checkAge prototype
console.log(`Hello ${user2.userFirstName} ${user2.checkAge()}`);

// Class with Prototype / Method
class userInfo {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age
  }

  displayInfo() {
    console.log(`Firstname: ${this.firstName}\nLastName: ${this.lastName}\nAge: ${this.age}`);
  }

  checkAge() {
    if (this.age >= 18) {
      return "You are Allowed";
    } else {
      return "Minor not Allowed";
    }
  }

  
}

let user1 = new userInfo('Joshua','Pautanes', 21);

user1.displayInfo();
console.log(`Hello ${user1.firstName} ${user1.checkAge()}`);
