let BTC = document.querySelectorAll(".btc");
let ETH = document.querySelectorAll(".eth");
let XRP = document.querySelectorAll(".xrp");
let BNB = document.querySelectorAll(".bnb");
let USDT = document.querySelectorAll(".usdt");

// Crypto API Url
let cryptoAPI = {
  btc: "https://api.coinlore.net/api/ticker/?id=90",
  eth: "https://api.coinlore.net/api/ticker/?id=80",
  xrp: "https://api.coinlore.net/api/ticker/?id=58",
  bnb: "https://api.coinlore.net/api/ticker/?id=2710",
  usdt: "https://api.coinlore.net/api/ticker/?id=518",
};

// Fetching Crypto
fetchCrypto = async (APIurl) => {
  try {
    const res = await fetch(APIurl); // fetching api url
    data = await res.json(); // convert JSON to object
    return data; // return data objects
  } catch (err) {
    console.log("Fetch Error");
    console.log(err.message); // fetch failed
  }
};

// crypto = BTC, ETH, XRP. data = api res.json
let displayCrypto = (crypto, data) => {
  data.map(function (coin) {
    crypto[0].textContent = coin.name;
    crypto[1].textContent = coin.symbol;
    crypto[2].textContent = coin.price_usd;
    crypto[3].textContent = coin.percent_change_7d;
    crypto[4].textContent = coin.percent_change_24h;
    crypto[5].textContent = coin.volume24;

    // change color of changes
    coin.percent_change_7d > 0
      ? (crypto[3].style.color = "green")
      : (crypto[3].style.color = "red");
    coin.percent_change_24h > 0
      ? (crypto[4].style.color = "green")
      : (crypto[4].style.color = "red");
  });
};

// BTC
fetchCrypto(cryptoAPI.btc).then((data) => {
  displayCrypto(BTC, data); // pass value to diplayCrypto
});

// ETH
fetchCrypto(cryptoAPI.eth).then((data) => {
  displayCrypto(ETH, data);
});

// XRP
fetchCrypto(cryptoAPI.xrp).then((data) => {
  displayCrypto(XRP, data);
});

// BNB
fetchCrypto(cryptoAPI.bnb).then((data) => {
  displayCrypto(BNB, data);
});

// USDT
fetchCrypto(cryptoAPI.usdt).then((data) => {
  displayCrypto(USDT, data);
});

// Btc - 90
// eth - 80
// bnb - 2710
// usdt - 518
// ada - 257
// sol - 48543
// usdc - 33285
// lunna - 48537
// xrp - 58
// doge - 2
