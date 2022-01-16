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
    btnGuess.style.visibility = "hidden"; // hide button guess
    btnReset.style.visibility = "visible"; // show button reset
    userInput.disabled = true;
    btnReset.addEventListener("click", () => {
      location.reload(); // reload whole page if button reset clicked
    });
  }

  if (userInput < randomGuess) {
    guessGuide.textContent = "Too Low";
    guessGuide.style.color = "red";
  }

  if (userInput > randomGuess) {
    guessGuide.textContent = "Too High";
    guessGuide.style.color = "blue";
  }

  if (typeOf(userInput) !== Number) {
    guessGuide.textContent = "Not a number. Please Try Again";
  }
});
