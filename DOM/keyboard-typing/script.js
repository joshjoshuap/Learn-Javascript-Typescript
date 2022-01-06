let displayLetter = document.querySelector(".displayText"); // where letter display
// selecting key letter in html
let key = {
  q: document.querySelector(".key-q"),
  w: document.querySelector(".key-w"),
  e: document.querySelector(".key-e"),
  r: document.querySelector(".key-r"),
  t: document.querySelector(".key-t"),
  y: document.querySelector(".key-y"),
  u: document.querySelector(".key-u"),
  i: document.querySelector(".key-i"),
  o: document.querySelector(".key-o"),
  p: document.querySelector(".key-p"),
  a: document.querySelector(".key-a"),
  s: document.querySelector(".key-s"),
  d: document.querySelector(".key-d"),
  f: document.querySelector(".key-f"),
  g: document.querySelector(".key-g"),
  h: document.querySelector(".key-h"),
  j: document.querySelector(".key-j"),
  k: document.querySelector(".key-k"),
  l: document.querySelector(".key-l"),
  z: document.querySelector(".key-z"),
  x: document.querySelector(".key-x"),
  c: document.querySelector(".key-c"),
  v: document.querySelector(".key-v"),
  b: document.querySelector(".key-b"),
  n: document.querySelector(".key-n"),
  m: document.querySelector(".key-m"),
};

// add key-pressed class in css
let keyPress = (letter) => {
  letter.classList.add("key-pressed");
};

// remove key-pressed class in css
let keyReset = (letter) => {
  // delayed before remove class list
  setTimeout(() => {
    letter.classList.remove("key-pressed");
  }, 600);
};

// display key pressed
let displayKey = (letter) => {
  displayLetter.textContent = letter.toUpperCase();
};

// user pressed key
document.addEventListener("keydown", (e) => {
  let keyPressed = e.key.toLowerCase(); // getting key pressed and convert to lowercase

  // compare key pressed
  switch (keyPressed) {
    case "q":
      keyPress(key.q);
      keyReset(key.q);
      displayKey(keyPressed);
      break;

    case "w":
      keyPress(key.w);
      keyReset(key.w);
      displayKey(keyPressed);
      break;

    case "e":
      keyPress(key.e);
      keyReset(key.e);
      displayKey(keyPressed);
      break;

    case "r":
      keyPress(key.r);
      keyReset(key.r);
      displayKey(keyPressed);
      break;

    case "t":
      keyPress(key.t);
      keyReset(key.t);
      displayKey(keyPressed);
      break;

    case "y":
      keyPress(key.y);
      keyReset(key.y);
      displayKey(keyPressed);
      break;

    case "u":
      keyPress(key.u);
      keyReset(key.u);
      displayKey(keyPressed);
      break;

    case "i":
      keyPress(key.i);
      keyReset(key.i);
      displayKey(keyPressed);
      break;

    case "o":
      keyPress(key.o);
      keyReset(key.o);
      displayKey(keyPressed);
      break;

    case "p":
      keyPress(key.p);
      keyReset(key.p);
      displayKey(keyPressed);
      break;

    case "a":
      keyPress(key.a);
      keyReset(key.a);
      displayKey(keyPressed);
      break;

    case "s":
      keyPress(key.s);
      keyReset(key.s);
      displayKey(keyPressed);
      break;

    case "d":
      keyPress(key.d);
      keyReset(key.d);
      displayKey(keyPressed);
      break;

    case "f":
      keyPress(key.f);
      keyReset(key.f);
      displayKey(keyPressed);
      break;

    case "g":
      keyPress(key.g);
      keyReset(key.g);
      displayKey(keyPressed);
      break;

    case "h":
      keyPress(key.h);
      keyReset(key.h);
      displayKey(keyPressed);
      break;

    case "j":
      keyPress(key.j);
      keyReset(key.j);
      displayKey(keyPressed);
      break;

    case "k":
      keyPress(key.k);
      keyReset(key.k);
      displayKey(keyPressed);
      break;

    case "l":
      keyPress(key.l);
      keyReset(key.l);
      displayKey(keyPressed);
      break;

    case "z":
      keyPress(key.z);
      keyReset(key.z);
      displayKey(keyPressed);
      break;

    case "x":
      keyPress(key.x);
      keyReset(key.x);
      displayKey(keyPressed);
      break;

    case "c":
      keyPress(key.c);
      keyReset(key.c);
      displayKey(keyPressed);
      break;

    case "v":
      keyPress(key.v);
      keyReset(key.v);
      displayKey(keyPressed);
      break;

    case "b":
      keyPress(key.b);
      keyReset(key.b);
      displayKey(keyPressed);
      break;

    case "n":
      keyPress(key.n);
      keyReset(key.n);
      displayKey(keyPressed);
      break;

    case "m":
      keyPress(key.m);
      keyReset(key.m);
      displayKey(keyPressed);
      break;
  }
});
