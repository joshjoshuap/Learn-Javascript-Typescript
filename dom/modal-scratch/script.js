let body = document.querySelector("body");
let btnModal = document.querySelector(".btn-modal"); // button to show modal
let btnClose = document.querySelector(".btn-close"); // button to close modal
let modal = document.querySelector(".modal");

btnModal.addEventListener("click", () => {
  modal.style.visibility = "visible"; // modal display
  body.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // add background color in body
});

btnClose.addEventListener("click", () => {
  modal.style.visibility = "hidden"; // modal hidden
  body.style.backgroundColor = "transparent"; // remove background in body
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.visibility = "hidden"; // modal hidden
    body.style.backgroundColor = "transparent"; // remove background in body
  }
});
