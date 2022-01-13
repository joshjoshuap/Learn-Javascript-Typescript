// Object Oriented Programming

// Constructor Function
function registerUser(userName, userPassword, userEmail, userFirstName, userLastName) {
  this.userName = userName;
  this.userPassword = userPassword;
  this.userEmail = userEmail;
  this.userFirstName = userFirstName;
  this.userLastName = userLastName;
}

let user1 = new registerUser(
  "Josh",
  "Joshu123",
  "josh@email.com",
  "Joshua",
  "Pautanes"
)

console.log(
`Username: ${user1.userName}\nPassword: ${user1.userPassword}\nEmail: ${user1.userEmail}\nFirstname: ${user1.userFirstName}\nLastname: ${user1.userLastName}
`);
 
