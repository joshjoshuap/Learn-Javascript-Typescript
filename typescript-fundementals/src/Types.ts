// Any
let petName: any = "Doggy";
let petAge: any = 20;

console.log(petName); // Doggy
console.log(petAge); // 20

// Unkown
let userInput: unknown;
let userAge: number;
if (typeof userInput === "number") {
  userAge = userInput;
}

// Numbers
let numInteger: number = 1;
let numNegative: number = -10;
let numFloat: number = 1.1;

console.log(numInteger); // 1
console.log(numNegative); // -10
console.log(numFloat); // 1.1

// String
let personName: string = "Joshua";
let personInitial: string = "J";

console.log(personName); // Joshua
console.log(personInitial); // J

// Boolean
let isTrue: boolean = true;
let isFalse: boolean = false;

console.log(isTrue); // true
console.log(isFalse); // false

// Array
let normalArray = [1, "Jose", {}];
let numberArray: number[] = [1, 2, 3, 4, 5];
let stringArray: string[] = ["Joshua", "Jose", "Juan"];

console.log(normalArray); //  [1, 'Jose', {…}]
console.log(numberArray); // [1, 2, 3, 4, 5]
console.log(stringArray); // ['Joshua', 'Jose', 'Juan']

// Object
let personDetail: { name: string; age: number; hobbies: string[] };
personDetail = {
  name: "Jose",
  age: 100,
  hobbies: ["Music", "Movie"],
};

console.log(personDetail.name); // Jose
console.log(personDetail.age); // 100
console.log(personDetail.hobbies); // ['Music', 'Movie']

// Functions
let addNumbers = (num1: number, num2: number): number => {
  return num1 + num2;
};

let userPassword: string;
let password = (pass: string): void => {
  userPassword = pass;
}; // return void/undefined

console.log(addNumbers(5, 5)); // 10
console.log(password("123456")); // undefined

// Union
let cellphoneNumber: number | string = 123456;
console.log(cellphoneNumber); // 123456

// Tuples
let studentInfo: { name: string; grade: [number, string] };
studentInfo = {
  name: "Juan",
  grade: [90, "Failed"],
};

console.log(studentInfo.name); // Juan
console.log(studentInfo.grade); // [90, 'Failed']

// Enum
enum Role {
  studentIsEnrolled = 1,
}

let student = {
  name: "Maria",
  status: Role.studentIsEnrolled,
};

console.log(Role.studentIsEnrolled); // 1

// Aliases
type flexibleArrayNumber = string | number;
let numberArrayInNumber: flexibleArrayNumber[] = [1, 2, 3, 4, 5, 6];
let numberArrayInString: flexibleArrayNumber[] = ["one", "two", "three"];

console.log(numberArrayInNumber); // [1, 2, 3, 4, 5, 6]
console.log(numberArrayInString); // ['one', 'two', 'three']
