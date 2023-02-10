const bitcoinBtn = document.querySelector("#bitcoin-btn");
const ethereumBtn = document.querySelector("#ethereum-btn");
const tetherBtn = document.querySelector("#tether-btn");
const bnbBtn = document.getElementById("bnb-btn");
const usdcBtn = document.getElementById("usdc-btn");
const maticBtn = document.getElementById("matic-btn");
const rippleBtn = document.getElementById("ripple-btn");
const binanceUSDBtn = document.getElementById("binanceUSD-btn");
const avaxBtn = document.getElementById("avax-btn");
const dogeBtn = document.getElementById("doge-btn");
const shibaBtn = document.getElementById("shiba-btn");
const solanaBtn = document.getElementById("solana-btn");
const adaBtn = document.getElementById("ada-btn");
const okbBtn = document.getElementById("okb-btn");
const lidoBtn = document.getElementById("lido-btn");
const ltcBtn = document.getElementById("ltc-btn");
const dotBtn = document.getElementById("dot-btn");
const tronBtn = document.getElementById("tron-btn");

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

const rippleResponses = [
  "Ripple (XRP) was first released in 2012 and is designed to enable fast and secure cross-border transactions.",
  "Ripple Labs has partnerships with several financial institutions, including Santander and American Express, to use XRP for cross-border payments.",
  "XRP can be used as a digital asset for payments and as a bridge currency for facilitating cross-border transactions.",
  "Despite its popularity, XRP has faced controversy and regulatory scrutiny, particularly in regards to its centralized nature and potential security risks.",
  "The XRP Ledger, which powers the RippleNet network, is an open-source blockchain technology.",
];

const binanceUSDResponses = [
  "Binance USD is a stablecoin pegged to the US dollar, meaning that each BUSD token is backed by a corresponding US dollar held in reserve.",
  "Binance USD was created in partnership with Paxos, a regulated financial institution that holds the US dollar reserves backing BUSD.",
  "Binance USD can be used for remittances, cross-border payments, and for hedging against cryptocurrency price fluctuations.",
  "Binance USD can be used for payments, savings, or as a store of value. It provides an alternative to traditional fiat currencies and offers the benefits of a stablecoin, such as low volatility.",
  "BUSD was launched in September 2019 and is fully collateralized, meaning that the total value of BUSD in circulation is always equal to the US dollar reserves held in reserve.",
];

const avaxResponses = [
  "Avalanche allows for the creation of subnets, which are independent blockchains that can be customized to fit specific use cases, such as supply chain management or digital asset trading.",
  "The Avalanche network supports multiple assets, including cryptocurrencies, digital assets, and security tokens, making it a versatile platform for a range of applications.",
  "Avalanche was launched in 2018 by a team of blockchain and finance experts, including Emin Gün Sirer, who is a pioneer in the blockchain industry.",
  "Avalanche is a decentralized platform that enables the creation and management of custom blockchain networks.",
  "Avalanche uses a unique consensus mechanism known as Avalanche-X, which enables high network performance while maintaining decentralization and security.",
];

const dogeResponses = [
  "Dogecoin was created in 2013 as a joke based on the popular `Doge` internet meme.",
  "Transactions on the Dogecoin network are fast and inexpensive, making it a popular choice for small purchases and micropayments.",
  "Despite its origins as a joke, Dogecoin has a market capitalization of several billion dollars and is widely recognized and accepted as a legitimate form of currency.",
  "The Dogecoin community has raised funds for charitable causes, such as sponsoring the Jamaican bobsled team for the 2014 Winter Olympics.",
  "Dogecoin has a strong cultural identity and is often used as a fun and lighthearted alternative to other cryptocurrencies.",
];

const shibaResponses = [
  "Shiba Inu is a meme-inspired cryptocurrency, named after the Shiba Inu dog breed featured in the popular 'Doge' internet meme.",
  "Shiba Inu was created to be a community-driven cryptocurrency, with a focus on decentralized governance and the empowerment of its users.",
  "Shiba Inu has a decentralized exchange (DEX) built into its platform, allowing for seamless and decentralized trading of the currency with other cryptocurrencies.",
  "Vitalik Buterin, the co-founder of Ethereum, was the recipient of a significant airdrop of Shiba Inu tokens, which he subsequently donated to a Covid-19 relief fund.",
  "Shiba Inu has gained a reputation for being a fast and inexpensive cryptocurrency, making it well-suited for small transactions and micropayments.",
];

const solanaResponses = [
  "Solana has a unique consensus algorithm called Proof of History, which helps to ensure the rapid and efficient validation of transactions on the network.",
  "Solana is designed to be fast, secure, and efficient, making it well-suited for a wide range of use cases, from financial services to gaming and beyond.",
  "Solana has a growing ecosystem of decentralized applications (dApps), ranging from games and social media platforms to finance and trading tools.",
  "Solana has a token, called SOL, that is used to secure the network, pay for transaction fees, and access services within the ecosystem.",
  "Solana is built with a focus on decentralization and has a strong commitment to open-source development, allowing anyone to contribute to the growth and improvement of the platform.",
];

const adaResponses = [
  "Cardano is also designed to be highly customizable, allowing developers to build and deploy their own decentralized applications on the platform.",
  "Cardano is written in the Haskell programming language, making it one of the most secure blockchain platforms.",
  "The platform uses a unique proof-of-stake consensus algorithm called Ouroboros, which is more energy-efficient than other algorithms.",
  "Cardano has a governance model that allows token holders to vote on proposals for upgrades and changes to the platform.",
  "The Creator of Cardano Charles Hoskinson is a strong advocate for the use of blockchain technology in solving real-world problems and has been a speaker at various conferences and events around the world. He is also active on social media and regularly shares his insights on the future of blockchain and cryptocurrency.",
];

const okbResponses = [
  "OKX is an innovative cryptocurrency exchange with advanced financial services.",
  "OKB is used as a utility token on the OKEx platform, providing users with access to various benefits and discounts.",
  "This Centralized Exchange serves millions of users in over 100 countries.",
  "OKB provides spot, margin, futures, options, perpetual swaps trading, DeFi, lending, and mining services.",
  "OKB has partnerships with several companies and organizations in the blockchain and cryptocurrency space, including the blockchain platform, Chainlink, and the Ethereum-based gaming platform, Enjin.",
];

const lidoResponses = [
  "Lido Staked Ether (Lido ETH) is a token that represents a stake in the Lido Ethereum 2.0 validator.",
  "Lido ETH is used to participate in the validation of transactions on the Ethereum 2.0 network, which is a major upgrade to the Ethereum network.",
  "Lido ETH is designed to make it easier for individuals to participate in the Ethereum 2.0 network and earn rewards, without having to set up and run their own validator.",
  "Lido ETH is fully decentralized and permissionless, allowing anyone to participate and earn rewards.",
  "Lido ETH also provides governance rights to its holders, allowing them to vote on proposals for upgrades and changes to the Ethereum 2.0 network.",
];

const dotResponses = [
  "Polkadot is designed to be scalable, secure, and flexible, allowing for the creation of multi-chain applications and decentralized finance (DeFi) platforms.",
  "Polkadot (DOT) is the native token of the Polkadot network and is used to participate in the network's governance and to pay for transaction fees.",
  "The platform uses a unique proof-of-stake consensus algorithm called Ouroboros, which is more energy-efficient than other algorithms.",
  "Gavin Wood is a co-founder of Polkadot and the Web3 Foundation, and was also the former Chief Technology Officer of Ethereum.",
  "DOT is a innovative cryptocurrency that operates on a unique consensus mechanism, allowing for efficient and secure validation of transactions across different blockchain networks.",
];

const ltcResponses = [
  "Litecoin is based on the same open-source code as Bitcoin and is often referred to as the 'silver to Bitcoin's gold'.",
  "Litecoin is a cryptocurrency that was created in 2011 by Charlie Lee, a former Google engineer.",
  "Litecoin can be used for a variety of purposes, including peer-to-peer payments, micropayments, and as a store of value.",
  "Litecoin is widely accepted by merchants and exchanges and has a strong ecosystem of wallets, exchanges, and payment processors.",
  "Litecoin has a rich history and has been one of the longest-standing cryptocurrencies in the market, with a proven track record of stability and security.",
];

const tronResponses = [
  "Tron Founder Justin Sun is known for his forward-thinking and ambitious vision for the future of blockchain and cryptocurrency, and has been a strong advocate for the mass adoption of decentralized technologies.",
  "Tron CEO Justin Sun is a well-known figure in the cryptocurrency and blockchain space, known for his marketing skills and strong presence on social media.",
  "Justin Sun is a young entrepreneur and the founder of TRON, as well as the CEO of BitTorrent and CEO of Callme.",
  "TRON's native cryptocurrency is called TRX, which can be used for various purposes, including paying for content on the TRON network and participating in decentralized applications.",
  "TRON aims to create a decentralized internet by enabling content creators to freely publish, store and own their data without the interference of intermediaries.",
];

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

rippleBtn.addEventListener("click", () => {
  result.textContent =
    rippleResponses[Math.floor(Math.random() * rippleResponses.length)];
});

binanceUSDBtn.addEventListener("click", () => {
  result.textContent =
    binanceUSDResponses[Math.floor(Math.random() * binanceUSDResponses.length)];
});

avaxBtn.addEventListener("click", () => {
  result.textContent =
    avaxResponses[Math.floor(Math.random() * avaxResponses.length)];
});

dogeBtn.addEventListener("click", () => {
  result.textContent =
    dogeResponses[Math.floor(Math.random() * dogeResponses.length)];
});

shibaBtn.addEventListener("click", () => {
  result.textContent =
    shibaResponses[Math.floor(Math.random() * shibaResponses.length)];
});

solanaBtn.addEventListener("click", () => {
  result.textContent =
    solanaResponses[Math.floor(Math.random() * solanaResponses.length)];
});

adaBtn.addEventListener("click", () => {
  result.textContent =
    adaResponses[Math.floor(Math.random() * adaResponses.length)];
});

okbBtn.addEventListener("click", () => {
  result.textContent =
    okbResponses[Math.floor(Math.random() * okbResponses.length)];
});

lidoBtn.addEventListener("click", () => {
  result.textContent =
    lidoResponses[Math.floor(Math.random() * lidoResponses.length)];
});

ltcBtn.addEventListener("click", () => {
  result.textContent =
    ltcResponses[Math.floor(Math.random() * ltcResponses.length)];
});

dotBtn.addEventListener("click", () => {
  result.textContent =
    dotResponses[Math.floor(Math.random() * dotResponses.length)];
});

tronBtn.addEventListener("click", () => {
  result.textContent =
    tronResponses[Math.floor(Math.random() * tronResponses.length)];
});

const showResponse = (responses) => {
  let response = responses[Math.floor(Math.random() * responses.length)];
  result.innerHTML = response;
};
