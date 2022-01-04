// Looping

// For Loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("Even Numbers:");
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

console.log("Odd Numbers:");
for (let i = 1; i < 10; i += 2) {
  console.log(i);
}

// Nested Loop
for (let i = 1; i <= 3; i++) {
  console.log("Number:" + i);
  for (let j = 1; j <= 5; j++) {
    console.log("   No:" + j);
  }
}

// For Each Loop
let num = [1, 2, 3, 4];

num.forEach(function (numbers) {
  console.log(numbers);
});

// For of Single Array
let number = [1, 2, 3, 4, 5];

for (let nums of number) {
  console.log(nums);
}

// For of Multi Array
let seatingArrangement = [
  ["Joshua", "Juan"],
  ["Maria", "Angel"],
  ["Andres", "Emilio"],
];

for (let row of seatingArrangement) {
  for (let student of row) {
    console.log(student);
  }
}

// Looping Objects For In
let grade = {
  jose: 80,
  maria: 82,
  juan: 90,
  andres: 100,
};

for (let person in grade) {
  console.log(`${person} : ${grade[person]}`);
}
