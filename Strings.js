// Strings
// String Index
let name = 'Joshua';
console.log(name[0]); // J

// String Length
console.log(name.length); // 6

//Index of
console.log(name.indexOf('s')); // 2

// Slice
console.log(name.slice(3, 6)); // hua

// Slice String Length
console.log(name.slice(name.lastIndexOf(' ') + 1)); // Joshua

// Get last letter
console.log(name.slice(-1)); // a

// Upper Case
console.log(name.toUpperCase()); // JOSHUA

// Lower Case
console.log(name.toLowerCase()); // joshua

// String to Numbers
let num1 = '1';
console.log(Number(num1));

// Replace
let address = 'Quezon City, Philippines';
let changedAddress  = address.replace('Quezon', 'Manila');
console.log(changedAddress); // Manila City, Philippines

// Includes
let name = 'Joshu a'
if (name.includes(' ')) {
  console.log('Name contained spaces')
} else {
  console.log(`Hello ${name}`); // Name contained spaces
}

// Trim
let name1 = '    Joshua';
let name2 = 'Joshua     ';
name1.trimStart;
name2.trimEnd;

console.log(name1); //     Joshua
console.log(name2); // Joshua