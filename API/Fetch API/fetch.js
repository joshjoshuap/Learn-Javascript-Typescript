let display = document.querySelector(".display");
let btnBTC = document.querySelector(".btc");
let btnETH = document.querySelector(".eth");

let btcURLAPI = "https://api.cryptonator.com/api/ticker/btc-usd";
let ethURLAPI = "https://api.cryptonator.com/api/ticker/eth-usd";

let fetchPrice = (url) => {
  // fetching api url
  fetch(url)
    .then((res) => {
      console.log("Fetched Success");
      return res.json(); // converting JSON to Object
    })
    .then((data) => {
      // data is value of res.json
      let dataPrice = `${data.ticker.base} : ${data.ticker.price} ${data.ticker.target}`; // get the value of data
      display.textContent = dataPrice; // display data price
    })
    .catch((err) => {
      console.log("Fetch Error", err); // if fetch failed
    });
};

btnBTC.addEventListener("click", () => fetchPrice(btcURLAPI));
btnETH.addEventListener("click", () => fetchPrice(ethURLAPI));
