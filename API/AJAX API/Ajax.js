let display = document.querySelector(".display");
let btnBTC = document.querySelector(".btc");
let btnETH = document.querySelector(".eth");
const req = new XMLHttpRequest();

let btcURLAPI = "https://api.cryptonator.com/api/ticker/btc-usd";
let ethURLAPI = "https://api.cryptonator.com/api/ticker/eth-usd";

let fetchPrice = (url) => {
  req.open("GET", url);
  req.send();

  req.onload = function () {
    const data = JSON.parse(this.response); // converting JSON to Object
    let dataPrice = `${data.ticker.base} : ${data.ticker.price} ${data.ticker.target}`; // get the value of data
      display.textContent = dataPrice; // display data price
  };

  req.onerror = function () {
    console.log("Error", this); // if fetch failed
  };
};

btnBTC.addEventListener("click", () => fetchPrice(btcURLAPI));
btnETH.addEventListener("click", () => fetchPrice(ethURLAPI));
