let count = document.querySelector(".counterValue");
let addCount = document.querySelector("#addCounter");
let decCount = document.querySelector("#decreaseCounter");
let counter = 0; // counter value

addCount.addEventListener("click", () => {
  count.textContent = counter = counter + 1; // adding counter value
});

decCount.addEventListener("click", () => {
  count.textContent = counter = counter - 1; // decreasing counter value
});
