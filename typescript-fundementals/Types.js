"use strict";
// Any
let petName = "Doggy";
let petAge = 20;
// Numbers
let numInteger = 1;
let numNegative = -10;
let numFloat = 1.1;
// String
let personName = "Joshua";
let personInitial = "J";
// Boolean
let isTrue = true;
let isFalse = false;
// Array
let normalArray = [1, "Jose", {}];
let numberArray = [1, 2, 3, 4, 5];
let stringArray = ["Joshua", "Jose", "Juan"];
// Object
let personDetail;
personDetail = {
    name: "Jose",
    age: 100,
    hobbies: ["Music", "Movie"],
};
// Functions
let addNumbers = (num1, num2) => {
    return num1 + num2;
};
let userPassword;
let password = (pass) => {
    userPassword = pass;
};
console.log(password("123456"));
// Union
let cellphoneNumber = 123456;
// Tuples
let studentInfo;
studentInfo = {
    name: "Juan",
    grade: [90, "Failed"],
};
// Enum
var Role;
(function (Role) {
    Role[Role["studentIsEnrolled"] = 1] = "studentIsEnrolled";
})(Role || (Role = {}));
let student = {
    name: "Maria",
    status: Role.studentIsEnrolled,
};
let numberArrayInNumber = [1, 2, 3, 4, 5, 6];
let numberArrayInString = ["one", "two", "three"];
console.log(petName); // Doggy
console.log(petAge); // 20
console.log(numInteger); // 1
console.log(numNegative); // -10
console.log(numFloat); // 1.1
console.log(personName); // Joshua
console.log(personInitial); // J
console.log(isTrue); // true
console.log(isFalse); // false
console.log(normalArray); //  [1, 'Jose', {…}]
console.log(numberArray); // [1, 2, 3, 4, 5]
console.log(stringArray); // ['Joshua', 'Jose', 'Juan']
console.log(personDetail.name); // Jose
console.log(personDetail.age); // 100
console.log(personDetail.hobbies); // ['Music', 'Movie']
console.log(studentInfo.name); // Juan
console.log(studentInfo.grade); // [90, 'Failed']
console.log(addNumbers(5, 5)); // 10
console.log(cellphoneNumber); // 123456
console.log(Role.studentIsEnrolled); // 1
console.log(numberArrayInNumber); // [1, 2, 3, 4, 5, 6]
console.log(numberArrayInString); // ['one', 'two', 'three']
