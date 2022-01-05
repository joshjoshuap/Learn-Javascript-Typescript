let btnRed = document.querySelector("#red");
let btnOrange = document.querySelector("#orange");
let btnYellow = document.querySelector("#yellow");
let btnGreen = document.querySelector("#green");
let btnBlue = document.querySelector("#blue");
let btnViolet = document.querySelector("#violet");
let btnBlack = document.querySelector("#black");
let btnWhite = document.querySelector("#white");
let box = document.querySelector(".colorBox");

btnRed.addEventListener("click", () => {
  box.style.background = "red";
});

btnOrange.addEventListener("click", () => {
  box.style.background = "orange";
});

btnYellow.addEventListener("click", () => {
  box.style.background = "yellow";
});

btnGreen.addEventListener("click", () => {
  box.style.background = "green";
});

btnBlue.addEventListener("click", () => {
  box.style.background = "blue";
});

btnViolet.addEventListener("click", () => {
  box.style.background = "violet";
});

btnBlack.addEventListener("click", () => {
  box.style.background = "black";
});

btnWhite.addEventListener("click", () => {
  box.style.background = "white";
});
