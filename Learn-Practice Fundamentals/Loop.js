// Looping

// Practice 1: Basic Loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Practice 2: Even and Odds Loop
console.log("Even Numbers:");
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

console.log("Odd Numbers:");
for (let i = 1; i < 10; i += 2) {
  console.log(i);
}

// Practice 3: Nested Loop
for (let i = 1; i <= 3; i++) {
  console.log("Number:" + i);
  for (let j = 1; j <= 5; j++) {
    console.log("   No:" + j);
  }
}
