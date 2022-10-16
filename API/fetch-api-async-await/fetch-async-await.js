let display = document.querySelector(".display");
let btnBTC = document.querySelector(".btc");
let btnETH = document.querySelector(".eth");

let btcURLAPI = "https://api.cryptonator.com/api/ticker/btc-usd";
let ethURLAPI = "https://api.cryptonator.com/api/ticker/eth-usd";

let fetchPrice = async (url) => {
  try {
    const res = await fetch(url); // fetching api url
    const data = await res.json(); // convert JSON to object
    let dataPrice = `${data.ticker.base} : ${data.ticker.price} ${data.ticker.target}`; // get the value of data
    display.textContent = dataPrice;
  } catch (err) {
    console.log("Fetch Error", err); // if fetch failed
  }
};

btnBTC.addEventListener("click", () => fetchPrice(btcURLAPI));
btnETH.addEventListener("click", () => fetchPrice(ethURLAPI));
