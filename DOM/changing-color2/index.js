let div = document.querySelector("div");

document.querySelector("button.red").addEventListener("click", () => {
  div.classList.remove("bg-blue", "bg-orange", "bg-yellow", "bg-green");
  div.classList.add("bg-red");
});

document.querySelector("button.blue").addEventListener("click", () => {
  div.classList.remove("bg-red", "bg-orange", "bg-yellow", "bg-green");
  div.classList.add("bg-blue");
});

document.querySelector("button.orange").addEventListener("click", () => {
  div.classList.remove("bg-blue", "bg-red", "bg-yellow", "bg-green");
  div.classList.add("bg-orange");
});

document.querySelector("button.yellow").addEventListener("click", () => {
  div.classList.remove("bg-blue", "bg-orange", "bg-red", "bg-green");
  div.classList.add("bg-yellow");
});

document.querySelector("button.green").addEventListener("click", () => {
  div.classList.remove("bg-blue", "bg-orange", "bg-yellow", "bg-red");
  div.classList.add("bg-green");
});
