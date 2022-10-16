import reverse from "./node_modules/lodash-es/reverse.js";
import max from "./node_modules/lodash-es/max.js";
import min from "./node_modules/lodash-es/min.js";

let display = document.querySelector(".display");

let number = [2, 4, 6, 8, 10];

display.textContent = `Array: ${number}. Reversed Array: ${reverse(
  number
)}. Max: ${max(number)}. Min: ${min(number)}`;
