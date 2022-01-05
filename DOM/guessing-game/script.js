let body = document.querySelector("body");
let guessGuide = document.querySelector(".guessGuide"); // Where text displayed
let btnGuess = document.querySelector(".guess"); // button to guess
let btnReset = document.querySelector(".reset"); // button to reset
let randomGuess = Math.round(Math.random() * 20); // Generating random number to Guess

btnGuess.addEventListener("click", () => {
  let userInput = Number(document.querySelector("input").value); // Getting the value of user input and convert to Number

  if (userInput == randomGuess) {
    guessGuide.textContent = `Congrats you guess the secret number ${randomGuess}`;
    guessGuide.style.color = "green";
    btnGuess.style.visibility = "hidden";
    btnReset.style.visibility = "visible";
    userInput.disabled = true;
    btnReset.addEventListener("click", () => {
      location.reload(); // reload whole page if button reset clicked
    });
  } else if (userInput < randomGuess) {
    guessGuide.textContent = "Too Low";
    guessGuide.style.color = "red";
  } else if (userInput > randomGuess) {
    guessGuide.textContent = "Too High";
    guessGuide.style.color = "blue";
  } else {
    guessGuide.textContent = "Not a number. Please Try Again";
  }
});
