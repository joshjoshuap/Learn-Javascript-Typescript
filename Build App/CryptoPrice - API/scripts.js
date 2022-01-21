// Selecting Query
let BTC = document.querySelectorAll(".btc");
let ETH = document.querySelectorAll(".eth");
let XRP = document.querySelectorAll(".xrp");
let BNB = document.querySelectorAll(".bnb");
let USDT = document.querySelectorAll(".usdt");
let USDC = document.querySelectorAll(".usdc");
let DOGE = document.querySelectorAll(".doge");
let AXS = document.querySelectorAll(".axs");

// Crypto API Url
let cryptoAPI = {
  btc: "https://api.coinlore.net/api/ticker/?id=90",
  eth: "https://api.coinlore.net/api/ticker/?id=80",
  xrp: "https://api.coinlore.net/api/ticker/?id=58",
  bnb: "https://api.coinlore.net/api/ticker/?id=2710",
  usdt: "https://api.coinlore.net/api/ticker/?id=518",
  usdc: "https://api.coinlore.net/api/ticker/?id=33285",
  doge: "https://api.coinlore.net/api/ticker/?id=2",
  axs: "https://api.coinlore.net/api/ticker/?id=46575"
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

// Volume Minimize
function abbreviateNumber(value) {
  var newValue = value;
  if (value >= 1000) {
      var suffixes = ["", "k", "m", "b","t"];
      var suffixNum = Math.floor( (""+value).length/3 );
      var shortValue = '';
      for (var precision = 2; precision >= 1; precision--) {
          shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
          var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
          if (dotLessShortValue.length <= 2) { break; }
      }
      if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
      newValue = shortValue+suffixes[suffixNum];
  }
  return newValue;
}

// crypto = BTC, ETH, XRP. data = api res.json
let displayCrypto = (crypto, data) => {
  // loop data object value
  data.map(function (coin) {
    // display value
    crypto[0].textContent = coin.name; // Name
    crypto[1].textContent = coin.symbol; // Coin
    crypto[2].textContent = coin.price_usd; // Price
    crypto[3].textContent = coin.percent_change_7d + "%"; // 7d
    crypto[4].textContent = coin.percent_change_24h + "%"; // 24h
    crypto[5].textContent = abbreviateNumber(Math.floor(coin.volume24)); // Volume

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

// USDC
fetchCrypto(cryptoAPI.usdc).then((data) => {
  displayCrypto(USDC, data);
});

// DOGE
fetchCrypto(cryptoAPI.doge).then((data) => {
  displayCrypto(DOGE, data);
});

// Axie
fetchCrypto(cryptoAPI.axs).then((data) => {
  displayCrypto(AXS, data);
});
