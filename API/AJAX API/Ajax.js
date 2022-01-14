const req = new XMLHttpRequest();

let btc = () => {
  req.open("GET", "https://api.cryptonator.com/api/ticker/btc-usd");
  req.send();

  req.onload = () => {
    const data = JSON.parse(this.response);
    console.log(`${data.ticker.base} Price: ${data.ticker.price} ${data.ticker.target}`);
  };

  req.onerror = () => {
    console.log("Error", this);
  }
};


btc();
