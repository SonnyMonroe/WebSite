const bitcoinBtn = document.querySelector("#bitcoin-btn");
const ethereumBtn = document.querySelector("#ethereum-btn");
const tetherBtn = document.querySelector("#tether-btn");
const bnbBtn = document.getElementById("bnb-btn");
const usdcBtn = document.getElementById("usdc-btn");
const maticBtn = document.getElementById("matic-btn");
const result = document.querySelector("#result");

const bitcoinResponses = [
  "Bitcoin is a decentralized digital currency.",
  "Bitcoin was created in 2009 by an unknown person using the name Satoshi Nakamoto.",
  "Transactions with Bitcoin are recorded on a public ledger called the blockchain.",
  "Bitcoin is the first decentralized digital currency.",
  "Bitcoin is often referred to as a cryptocurrency.",
  "Bitcoin has a limited supply of 21 million.",
];

const ethereumResponses = [
  "Ethereum is a decentralized platform that runs smart contracts.",
  "Ethereum was created in 2015 by Vitalik Buterin.",
  "The cryptocurrency used within Ethereum is called Ether.",
  "Ethereum allows developers to build decentralized applications on its platform.",
  "Ethereum has the second largest market capitalization after Bitcoin.",
];

const tetherResponses = [
  "Tether is a stablecoin that is pegged to the value of the US dollar.",
  "Tether was created in 2014 by Brock Pierce, Reeve Collins and Craig Sellars.",
  "Tether aims to provide a stable alternative to volatile cryptocurrencies like Bitcoin.",
  "Tether is backed by reserves of real currency.",
  "Tether is one of the most widely used stablecoins in the cryptocurrency market.",
];

const bnbResponses = [
  "BNB is the native cryptocurrency of the Binance exchange.",
  "BNB is used to pay for trading fees on the Binance exchange.",
  "BNB can be used to buy a variety of cryptocurrencies on the Binance exchange.",
  "BNB has a number of other use cases, including paying for travel and hotels.",
  "BNB has increased in value significantly since its initial coin offering.",
];

const usdcResponses = [
  "USDC is a stablecoin pegged to the US dollar.",
  "USDC is used to facilitate trading on cryptocurrency exchanges.",
  "USDC aims to maintain a stable value, unlike volatile cryptocurrencies like Bitcoin.",
  "USDC is a popular alternative to traditional fiat currencies for cryptocurrency traders.",
  "USDC is used to reduce volatility in the cryptocurrency market.",
];

const maticResponses = [
  "MATIC is a cryptocurrency used on the Polygon network.",
  "MATIC is used to pay for transactions and to secure the Polygon network.",
  "MATIC is a popular cryptocurrency for decentralized finance (DeFi) applications.",
  "MATIC has increased in value significantly since its initial coin offering.",
  "MATIC aims to provide fast and inexpensive transactions for decentralized applications.",
];

const showResponse = (responses) => {
  let response = responses[Math.floor(Math.random() * responses.length)];
  result.innerHTML = response;
};

bitcoinBtn.addEventListener("click", () => {
  result.textContent =
    bitcoinResponses[Math.floor(Math.random() * bitcoinResponses.length)];
});

ethereumBtn.addEventListener("click", () => {
  result.textContent =
    ethereumResponses[Math.floor(Math.random() * ethereumResponses.length)];
});

tetherBtn.addEventListener("click", () => {
  result.textContent =
    tetherResponses[Math.floor(Math.random() * tetherResponses.length)];
});

bnbBtn.addEventListener("click", () => {
  result.textContent =
    bnbResponses[Math.floor(Math.random() * bnbResponses.length)];
});

usdcBtn.addEventListener("click", () => {
  result.textContent =
    usdcResponses[Math.floor(Math.random() * usdcResponses.length)];
});

maticBtn.addEventListener("click", () => {
  result.textContent =
    maticResponses[Math.floor(Math.random() * maticResponses.length)];
});
