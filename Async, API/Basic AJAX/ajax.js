let display = document.querySelector(".display");
let btnBTC = document.querySelector(".btc");
let btnETH = document.querySelector(".eth");
const req = new XMLHttpRequest(); // create http request

btnBTC.addEventListener("click", () => {
  req.open("GET", "https://api.cryptonator.com/api/ticker/btc-usd"); // API url
  req.send(); // send request

  req.onload = function () {
    const data = JSON.parse(this.response); // convert JSON to Object
    let dataPrice = `${data.ticker.base} : ${data.ticker.price} ${data.ticker.target}`;  // get data values
    display.textContent = dataPrice; // display data price
  };

  req.onerror = function () {
    console.log("Error");
    console.log(this);
  };
});

btnETH.addEventListener("click", () => {
  req.open("GET", "https://api.cryptonator.com/api/ticker/eth-usd"); // API url
  req.send(); // send request

  req.onload = function () {
    const data = JSON.parse(this.response); // convert JSON to Object
    let dataPrice = `${data.ticker.base} : ${data.ticker.price} ${data.ticker.target}`;  // get data values
    display.textContent = dataPrice; // display data price
  };

  req.onerror = function () {
    console.log("Error");
    console.log(this);
  };
});
