let descBTC = document.querySelectorAll(".desc-btc");
let descETH = document.querySelectorAll(".desc-eth");
let descXRP = document.querySelectorAll(".desc-xrp");
let descBNB = document.querySelectorAll(".desc-bnb");
let descUSDT = document.querySelectorAll(".desc-usdt");

// Crypto API Url
let cryptoAPI = {
  btc: "https://api.coinlore.net/api/ticker/?id=90",
  eth: "https://api.coinlore.net/api/ticker/?id=80",
  xrp: "https://api.coinlore.net/api/ticker/?id=58",
  bnb: "https://api.coinlore.net/api/ticker/?id=2710",
  usdt: "https://api.coinlore.net/api/ticker/?id=518"
}

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

// BTC
fetchCrypto(cryptoAPI.btc).then((data) => {
  data.map(function (coin) {
    descBTC[0].textContent = coin.name;
    descBTC[1].textContent = coin.symbol;
    descBTC[2].textContent = coin.price_usd;
  })
});

// ETH
fetchCrypto(cryptoAPI.eth).then((data) => {
  data.map(function (coin) {
    descETH[0].textContent = coin.name;
    descETH[1].textContent = coin.symbol;
    descETH[2].textContent = coin.price_usd;
  })
});

// XRP
fetchCrypto(cryptoAPI.xrp).then((data) => {
  data.map(function (coin) {
    descXRP[0].textContent = coin.name;
    descXRP[1].textContent = coin.symbol;
    descXRP[2].textContent = coin.price_usd;
  })
});

// BNB
fetchCrypto(cryptoAPI.bnb).then((data) => {
  data.map(function (coin) {
    descBNB[0].textContent = coin.name;
    descBNB[1].textContent = coin.symbol;
    descBNB[2].textContent = coin.price_usd;
  })
});

// USDT
fetchCrypto(cryptoAPI.usdt).then((data) => {
  data.map(function (coin) {
    descUSDT[0].textContent = coin.name;
    descUSDT[1].textContent = coin.symbol;
    descUSDT[2].textContent = coin.price_usd;
  })
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
