class accountInfo {
  constructor(firstName, lastName, userName, userPass, userEmail, userAge) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.userPass = userPass;
    this.userEmail = userEmail;
    this.userAge = userAge;
  }

  fullInfo() {
    return `Firstname: ${this.firstName}
    Lastname: ${this.lastName} 
    Username: ${this.userName}  
    Password: ${this.userPass} 
    Email: ${this.userEmail} 
    Age: ${this.userAge}`;
  }

  fullName() {
    return `Fullname: ${this.firstName} ${this.lastName}`;
  }
}

// export default accountInfo; // exporting default
export { accountInfo as account }; // configure module
