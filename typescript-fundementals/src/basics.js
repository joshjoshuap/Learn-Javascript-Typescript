"use strict";
// Primitives
let age;
let wrongAge;
age = 12;
wrongAge = '1'; // warning error
let userName;
userName = 'Josh';
let isValid;
isValid = true;
// Array
let names; // string array
names = ['Josh', 'John'];
let numbers; // number array
numbers = [1, 2, 3];
// Objects
let person; // object with data type
person = {
    name: 'Josh',
    age: 21,
};
person = {
    name: 'Josh',
    age: '21', // warning error
};
let section; // union type
section = '1';
section = 1;
// Functions
// return number type from a + b
function add(a, b) {
    return a + b;
}
