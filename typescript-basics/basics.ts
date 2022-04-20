// Primitives
let age: number;
let wrongAge: number;
age = 12;
wrongAge = '1'; // warning error

let userName: string;
userName = 'Josh';

let isValid: boolean;
isValid = true;

// Array
let names: string[]; // string array
names = ['Josh', 'John'];

let numbers: number[]; // number array
numbers = [1, 2, 3];

// Objects
let person: { name: string; age: number }; // object with data type
person = {
  name: 'Josh',
  age: 21,
};

person = {
  name: 'Josh',
  age: '21', // warning error
};

let section: number | string; // union type
section = '1';
section = 1;

// Functions
// return number type from a + b
function add(a: number, b: number): number {
  return a + b;
}