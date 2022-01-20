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

// BTC
fetchCrypto(cryptoAPI.btc).then((data) => {
  data.map(function (coin) {
    descBTC[0].textContent = coin.name;
    descBTC[1].textContent = coin.symbol;
    descBTC[2].textContent = coin.price_usd;
    descBTC[3].textContent = coin.percent_change_7d;
    descBTC[4].textContent = coin.percent_change_24h;
    descBTC[5].textContent = coin.volume24;

    if (coin.percent_change_7d >= 0.1) {
      descBTC[3].style.color = "green";
    } else {
      descBTC[3].style.color = "red";
    }

    if (coin.percent_change_24h >= 0.1) {
      descBTC[4].style.color = "green";
    } else {
      descBTC[4].style.color = "red";
    }
  });
});

// ETH
fetchCrypto(cryptoAPI.eth).then((data) => {
  data.map(function (coin) {
    descETH[0].textContent = coin.name;
    descETH[1].textContent = coin.symbol;
    descETH[2].textContent = coin.price_usd;
    descETH[3].textContent = coin.percent_change_7d;
    descETH[4].textContent = coin.percent_change_24h;
    descETH[5].textContent = coin.volume24;
    
    if (coin.percent_change_7d >= 0.1) {
      descETH[3].style.color = "green";
    } else {
      descETH[3].style.color = "red";
    }

    if (coin.percent_change_24h >= 0.1) {
      descETH[4].style.color = "green";
    } else {
      descETH[4].style.color = "red";
    }
  });
});

// XRP
fetchCrypto(cryptoAPI.xrp).then((data) => {
  data.map(function (coin) {
    descXRP[0].textContent = coin.name;
    descXRP[1].textContent = coin.symbol;
    descXRP[2].textContent = coin.price_usd;
    descXRP[3].textContent = coin.percent_change_7d;
    descXRP[4].textContent = coin.percent_change_24h;
    descXRP[5].textContent = coin.volume24;
    
    if (coin.percent_change_7d >= 0.1) {
      descXRP[3].style.color = "green";
    } else {
      descXRP[3].style.color = "red";
    }

    if (coin.percent_change_24h >= 0.1) {
      descXRP[4].style.color = "green";
    } else {
      descXRP[4].style.color = "red";
    }
  });
});

// BNB
fetchCrypto(cryptoAPI.bnb).then((data) => {
  data.map(function (coin) {
    descBNB[0].textContent = coin.name;
    descBNB[1].textContent = coin.symbol;
    descBNB[2].textContent = coin.price_usd;
    descBNB[3].textContent = coin.percent_change_7d;
    descBNB[4].textContent = coin.percent_change_24h;
    descBNB[5].textContent = coin.volume24;
    
    if (coin.percent_change_7d >= 0.1) {
      descBNB[3].style.color = "green";
    } else {
      descBNB[3].style.color = "red";
    }

    if (coin.percent_change_24h >= 0.1) {
      descBNB[4].style.color = "green";
    } else {
      descBNB[4].style.color = "red";
    }
  });
});

// USDT
fetchCrypto(cryptoAPI.usdt).then((data) => {
  data.map(function (coin) {
    descUSDT[0].textContent = coin.name;
    descUSDT[1].textContent = coin.symbol;
    descUSDT[2].textContent = coin.price_usd;
    descUSDT[3].textContent = coin.percent_change_7d;
    descUSDT[4].textContent = coin.percent_change_24h;
    descUSDT[5].textContent = coin.volume24;

    if (coin.percent_change_7d >= 0.1) {
      descUSDT[3].style.color = "green";
    } else {
      descUSDT[3].style.color = "red";
    }

    if (coin.percent_change_24h >= 0.1) {
      descUSDT[4].style.color = "green";
    } else {
      descUSDT[4].style.color = "red";
    }
  });
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
