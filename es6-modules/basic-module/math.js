let display = document.querySelector(".display");

let add = (num1, num2) => {
  return (display.textContent = `Addition: ${num1 + num2}`);
};

let sub = (num1, num2) => {
  return (display.textContent = `Subtraction: ${num1 - num2}`);
};

let multiply = (num1, num2) => {
  return (display.textContent = `Multiply: ${num1 * num2}`);
};

let divide = (num1, num2) => {
  return (display.textContent = `Division: ${num1 / num2}`);
};

export { add, sub, multiply, divide }; // exporting math.js and its functions
