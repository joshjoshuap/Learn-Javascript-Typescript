// Strings
// String Index
let name = 'Joshua';
console.log(name[0]);

// String Length
console.log(name.length);

//Index of
console.log(name.indexOf('s'));

// Slice
console.log(name.slice(3, 6));

// Slice String Length
console.log(name.slice(name.lastIndexOf(' ') + 1));

// Get last letter
console.log(name.slice(-1));

// Upper Case
console.log(name.toUpperCase());

// Lower Case
console.log(name.toLowerCase());

// String to Numbers
let num1 = '1';
console.log(Number(num1));

// Replace
let address = 'Quezon City, Philippines';
let changedAddress  = address.replace('Quezon', 'Manila');
console.log(changedAddress);

// Includes
let name = 'Joshu a'
if (name.includes(' ')) {
  console.log('Name contained spaces')
} else {
  console.log(`Hello ${name}`);
}

// Trim
let name1 = '    Joshua';
let name2 = 'Joshua     ';
name1.trimStart;
name2.trimEnd;

console.log(name1);
console.log(name2);