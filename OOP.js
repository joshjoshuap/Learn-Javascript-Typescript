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
);

let user2 = new registerUser(
  "Juan",
  "000",
  "juan@email.com",
  "Juan",
  "Tamad",
  1
);

console.log(
  `Username: ${user1.userName}\nPassword: ${user1.userPassword}\nEmail: ${user1.userEmail}\nFirstname: ${user1.userFirstName}\nLastname: ${user1.userLastName}\nAge: ${user1.userAge}
`
);
/* 
Username: Josh
Password: Joshu123
Email: josh@email.com
Firstname: Joshua
Lastname: Pautanes
Age: 21
*/
 
 // Prototype / Method
 registerUser.prototype.checkAge = function () {
   if (this.userAge >= 18) {
     return "You are Allowed";
   } else {
     return "Minor not Allowed";
   }
 };

 console.log(`Hello ${user1.userFirstName} ${user1.checkAge()}`);
 console.log(`Hello ${user2.userFirstName} ${user2.checkAge()}`);
/* 
Hello Joshua You are Allowed
Hello Juan Minor not Allowed
*/

// Class with Prototype / Method
class userInfo {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  displayInfo() {
    console.log(
      `Firstname: ${this.firstName}\nLastName: ${this.lastName}\nAge: ${this.age}`
    );
  }

  checkAge() {
    if (this.age >= 18) {
      return "You are Allowed";
    } else {
      return "Minor not Allowed";
    }
  }
}

let user1 = new userInfo("Joshua", "Pautanes", 21);
user1.displayInfo();
console.log(`Hello ${user1.firstName} ${user1.checkAge()}`);
/* 
Firstname: Joshua
LastName: Pautanes
Age: 21
Hello Joshua You are Allowed
*/

// Get - Setters
let person = {
  firstname: "Joshua",
  lastname: "Pautanes",
  age: 0,

  get fullName() {
    return `${this.firstname} ${this.lastname}`;
  },

  set setAge(newAge) {
    this.age = newAge;
  },
};

console.log(person.fullName);
person.setAge = 21;
console.log(person.age);
/* 
Joshua Pautanes
21
*/

// Object Create
let userInfo = {
  addFullname(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname
  }
};

let user1 = Object.create(userInfo);
user1.age = 21; // add age set to 21
user1.addFullname('Joshua', 'Lastname'); // pass data to addFullName method

console.log(`Hello ${user1.firstname} Age ${user1.age}`); // Hello Joshua Age 21

// Inheritance Class
class studentInfo {
  constructor(firstname, lastname, grades) {
   this.firstname = firstname;
   this.lastname = lastname;
   this.grades = grades;
  }
}

class student1Info extends studentInfo {
  fullname() {
    console.log(`${this.firstname} ${this.lastname}`);
  }

  math() {
    console.log(`Math : ${this.grades.math}`);
  }

  science() {
    console.log(`Science : ${this.grades.science}`)
  }

  english() {
    console.log(`English : ${this.grades.english}`)
  }
}

let student1 = new student1Info('Joshua', 'Pautanes', {math: 80, science: 90, english: 80});
student1.fullname();
student1.math();
student1.science();
student1.english();
/* 
Joshua Pautanes
Math : 80
Science : 90
English : 80
*/

// Inheritance Class 2 - Callbacks / Value
class numberArray {
  constructor(array) {
    this.array = array;
  }
}

class arrayList1 extends numberArray {

  pushArray(val) {
      this.array.push(val);
  }

  popArray() {
    this.array.pop();
  }

  even() {
    
    let even = this.array.filter((arr) => {
      return arr % 2 === 0;
    });
    console.log(even);
  }

  odd() {
    let odd = this.array.filter((arr) => {
      return arr % 2 === 1;
    });
    console.log(odd);
  }
}

let array1 = new arrayList1([]);
array1.pushArray(1);
array1.pushArray(2);
array1.pushArray(3);
array1.pushArray(4);
array1.pushArray(5);

console.log('-- Even -- ');
array1.even();

console.log('-- ODD -- ');
array1.odd();
/* 
-- Even -- 
[ 2, 4 ]
-- ODD -- 
[ 1, 3, 5 ]
*/

// Inheritance Class - Super
class studentData {
  constructor(firstname, middlename, lastname) {
    this.firstname = firstname;
    this.middlename = middlename;
    this.lastname = lastname;
  }
}

class student1Info extends studentData { // extending to student data
  displayInfo() {
    return `${this.firstname} ${this.middlename} ${this.lastname}`;
  }
}

class student2Info extends studentData { // extending to student data
  // create new paramater suffix
  constructor(firstname, middlename, lastname, suffix) {
    super(firstname, middlename, lastname); // get data from studentData
    this.suffix = suffix;
  }

  displayInfo() {
    return `${this.firstname} ${this.middlename} ${this.lastname} ${this.suffix}`;
  }
}

let student1 = new student1Info("Joshua", "E", "Pautanes");
let student2 = new student2Info("Jose", "Mercado", "Rizal", "Jr.");

console.log(student1.displayInfo()); // Joshua E Pautanes
console.log(student2.displayInfo()); // Jose Mercado Rizal Jr.

// Encapsulation 
class userInfo {
  userName = ''; // not private
  #userPassword = ''; // private

  constructor(username, password, email) {
    this.userName = username;
    this.#userPassword = password;
    this.email = email;
  }

  displayPassword() {
    this.#privateMethod(); // caling private method
    console.log(this.#userPassword); // will run can access #userPassword
  }

  // Private method inside userInfo can access
  #privateMethod(){
    return this.#userPassword = 'Password Hacked!';
  }

}

class users extends userInfo {
  displayUserInfo() {
    console.log(`Username: ${this.userName}\nEmail: ${this.email}`);
  }

  // error cannot access #userPassword is private
  // displayPassword() {
  //   console.log(this.#userPassword);
  // }
}

let user1 = new users('Josh', '1234', 'josh@email.com');
user1.displayUserInfo();
user1.displayPassword();
