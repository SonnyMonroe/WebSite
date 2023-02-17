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
const daiBtn = document.getElementById("dai-btn");
const tronBtn = document.getElementById("tron-btn");
const uniswapBtn = document.getElementById("uniswap-btn");
const cosmosBtn = document.getElementById("cosmos-btn");
const wbtcBtn = document.getElementById("wbtc-btn");
const linkBtn = document.getElementById("link-btn");
const tonBtn = document.getElementById("ton-btn");
const leoBtn = document.getElementById("leo-btn");
const ethcBtn = document.getElementById("ethc-btn");
const moneroBtn = document.getElementById("monero-btn");
const btccashBtn = document.getElementById("btccash-btn");
const aptosBtn = document.getElementById("aptos-btn");
const stellarBtn = document.getElementById("stellar-btn");
const hbarBtn = document.getElementById("hbar-btn");
const lidoDaoBtn = document.getElementById("lidoDao-btn");
const quantBtn = document.getElementById("quant-btn");
const cronosBtn = document.getElementById("cronos-btn");
const filecoinBtn = document.getElementById("filecoin-btn");
const nearBtn = document.getElementById("near-btn");

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

const daiResponses = [
  "Dai is a decentralized stablecoin, meaning it is a cryptocurrency that is designed to maintain a stable value.",
  "Dai is pegged to the US dollar, which means its value is meant to remain equal to $1.",
  "The stability of Dai is maintained through a combination of smart contracts and a decentralized system of incentivized actors who help to keep its value stable.",
  "Dai is created on the Ethereum blockchain, and is fully decentralized, meaning that it is not controlled by any central authority.",
  "Dai is widely used in the decentralized finance (DeFi) space, where it is often used as a stable coin for lending, borrowing, and other financial applications.",
];

const uniswapResponses = [
  "Uniswap users have full control over their funds and trades on the Uniswap exchange. On Uniswap there isn't a need for intermediaries like banks or brokers.",
  "Uniswap is easy to use and does not require any special skills or technical knowledge to trade on the platform.",
  "Uniswap has low fees compared to traditional centralized exchanges, making it a cost-effective option for trading.",
  "Uniswap is a key player in the growing decentralized finance ecosystem, and has the potential to transform the way that cryptocurrency is traded and managed in the future",
  "Uniswap is an innovative and disruptive technology that is changing the way that cryptocurrency is traded and exchanged, and has the potential to transform the financial industry.",
  "Uniswap also allows for the creation and trading of custom token pairs, making it possible to trade any combination of supported cryptocurrencies.",
  "Uniswap is becoming increasingly popular in the decentralized finance (DeFi) space, as it provides a secure and transparent way to trade cryptocurrencies and access other financial services.",
];

const cosmosResponses = [
  "The goal of Cosmos is to enable communication and interoperability between different blockchain networks.",
  "Cosmos is a decentralized network of independent blockchains.",
  "By connecting different blockchains, Cosmos enables the transfer of assets and data between them, creating a multi-chain ecosystem.",
  "Cosmos also provides the tools and infrastructure necessary for developers to build and launch their own independent blockchains.",
  "Cosmos is designed to be secure, with built-in security features that protect against hacks and fraud.",
  "Cosmos is designed to scale and handle a large volume of transactions, making it a fast and efficient platform for decentralized applications and services.",
];

const wbtcResponses = [
  "WBTC is transparent and auditable, with its reserve holdings publicly visible on the Ethereum blockchain.",
  "Wrapped Bitcoin is a great solution for those who want to take advantage of the security and stability of Bitcoin, while also benefiting from the compatibility and features of the Ethereum platform.",
  "WBTC provides a bridge between the Bitcoin and Ethereum ecosystems, allowing users to use Bitcoin in Ethereum-based decentralized applications and services.",
  "WBTC is an ERC-20 token, which means it is built on the Ethereum blockchain. Not the Bitcoin Blockchain",
  "Wrapped Bitcoin (WBTC) is a type of cryptocurrency that is pegged 1:1 to the value of Bitcoin.",
];

const linkResponses = [
  "Chainlink is a decentralized oracle network that connects smart contracts to real-world data and events.",
  "Chainlink's real-world applications are virtually limitless, as the decentralized oracle network provides a secure and reliable bridge between the blockchain and the real world.",
  "Chainlink provides a secure and reliable way for smart contracts to access data from external sources, like stock prices or weather data.",
  "In the voting industry, Chainlink can be used to securely and transparently collect and verify voting data.",
  "With its innovative and secure approach, Chainlink is playing a critical role in advancing the blockchain and decentralized technology space.",
];

const tonResponses = [
  "TON is a blockchain platform created by Telegram, the popular messaging app.",
  "The goal of TON is to provide fast and secure transactions for Telegram's users and beyond.",
  "Telegram intends to integrate TON and the Gram into its messaging app, making it easy for users to send and receive payments.",
  "TON's fast transaction speeds allow for near-instant transfers, making it ideal for micropayments and other real-time transactions.",
  "Telegram's large user base of over 500 million people makes TON a promising and accessible entry point into the world of cryptocurrency.",
  "The integration of TON into Telegram will make it easy for users to manage their crypto assets within the app, eliminating the need for separate wallets or exchanges.",
  "TON is designed to be accessible and user-friendly, making it a great choice for people new to cryptocurrency.",
];

const leoResponses = [
  "LEO Token is a cryptocurrency created by Bitfinex, one of the largest cryptocurrency exchanges.",
  "LEO is designed to be used as a utility token on the Bitfinex platform, offering benefits such as reduced trading fees and increased liquidity.",
  "Bitfinex has committed to buying back and burning LEO tokens, reducing the total supply over time and increasing the value of the remaining tokens.",
  "The value of LEO is tied to the success and growth of Bitfinex, making it a unique investment opportunity in the crypto space.",
  "LEO is supported by a number of exchanges, making it easy to buy, sell, and store.",
];

const ethcResponses = [
  "The Ethereum Classic (ETC) blockchain is an important piece of cryptocurrency and blockchain history, as it serves as a reminder of the importance of decentralization and the impact of major events on the development of new technologies.",
  "ETC has a strong focus on community governance, where the community is able to make decisions on the future direction and development of the network.",
  "The ETC network supports smart contracts, which are self-executing contracts with the terms of the agreement between buyer and seller being directly written into lines of code.",
  "Ethereum Classic aims to provide an immutable and censorship-resistant platform, meaning that once transactions are recorded on the blockchain, they cannot be altered or deleted.",
  "The ETC token is used to pay for transactions on the network and to reward validators for their contributions to the network.",
  "The Ethereum we know today (ETH), was created when The hard fork occurred after the Ethereum community disagreed on how to handle a major hack that affected the Decentralized Autonomous Organization (DAO).",
];

const moneroResponses = [
  "Monero is a privacy-focused cryptocurrency that was created in 2014.",
  "Monero uses advanced cryptographic techniques, such as ring signatures and stealth addresses, to protect the privacy of its users.",
  "Transactions on the Monero network are completely confidential, with no public record of the sender, receiver, or amount.",
  "The Monero network is highly secure, with a strong track record of being resistant to hacking and other forms of cybercrime.",
  "Monero has a number of use cases, including as a privacy-focused investment, a medium of exchange, and a store of value.",
  "Monero is an open-source project, with its development guided by the principles of decentralization, privacy, and security.",
  "Monero is fungible, meaning that all units of Monero are interchangeable and have equal value.",
];

const aptosResponses = [
  "Aptos is developed by former Meta employees to solve the issues currently faced by decentralized systems.",
  "Prior to full launch, Aptos had already gained much traction and is backed by prominent VCs and it is expected to compete with existing blockchain networks.",
  "Aptos claims to offer “safe, scalable and upgradeable Web3 infrastructure.” It’s a contender in the race among Layer 1 blockchains to achieve the goal of a single ‘perfect’ blockchain.",
  "Aptos can create and use multiple accounts that are controlled by a single account and are autonomous at the same time. The multiple wallets can’t be linked to the controller accounts and the owner can use the accounts without a trace of a single control point.",
  "Aptos promises 100k TPS in its finalized version. However, the current Transactions Per Second (TPS) is somewhere around 4 transactions per second. This is among the slowest blockchains in existance.",
];

const btccashResponses = [
  "Bitcoin Cash aims to offer faster and cheaper transactions compared to Bitcoin by increasing the block size limit.",
  "The Bitcoin Cash community is focused on improving the scalability and accessibility of cryptocurrency.",
  "Bitcoin Cash, is not pegged or related to Bitcoin in anyway.",
  "Bitcoin Cash is a cryptocurrency that was created in 2017 as a fork of the original Bitcoin.",
  "The supply of Bitcoin Cash is capped at 21 million, the same as Bitcoin.",
  "Bitcoin Cash is a controversial asset, with some in the cryptocurrency community viewing it as a legitimate alternative to Bitcoin, while others see it as a misguided attempt to dilute the original vision of Bitcoin.",
];

const stellarResponses = [
  "Stellar is an open-source project, guided by the principles of accessibility, sustainability, and social impact.",
  "Stellar Lumens is the native cryptocurrency of the Stellar network, used to pay for transactions and as a store of value.",
  "The Stellar network operates on a decentralized ledger, making it secure and transparent.",
  "Stellar is fast, with transactions typically confirmed within 5 seconds.",
  "Stellar is a decentralized platform that connects banks, payments systems, and people, making it easy to transfer money across borders.",
  "Stellar Lumens (XLM) is a cryptocurrency that was created in 2014 by Jed McCaleb, one of the co-founders of Ripple.",
];

const hbarResponses = [
  "HBAR is a public, decentralized blockchain platform that uses a new consensus algorithm called Hashgraph.",
  "HBAR tokens are used to pay for transactions on the network, and can also be used for staking and governance.",
  "HBAR has partnerships with several large companies, including Google, IBM, and Boeing, and is used for a variety of use cases, including supply chain management and identity verification.",
  "HBAR uses a 'proof of stake' consensus algorithm, where users can stake HBAR tokens to participate in block validation and earn rewards.",
  "HBAR is designed to be fast, with the ability to handle up to 10,000 transactions per second (Take this with a grain of salt).",
  "The Hedera Hashgraph algorithm is unique in that it uses a directed acyclic graph (DAG) to record transactions, rather than a traditional blockchain.",
];

const lidoDaoResponses = [
  "Lido DAO is a decentralized autonomous organization that provides a liquid staking solution for Ethereum 2.0.",
  "The Lido DAO was launched in December 2020, and it quickly became popular due to its user-friendly interface and high staking yields.",
  "Lido DAO allows users to earn staking rewards without having to lock up their ETH, making it more accessible to users who want to participate in staking.",
  "Lido DAO is a community-driven project, and its decision-making process is governed by LDO token holders.",
  "Lido DAO is built on Ethereum, and it uses smart contracts to automate the staking process and distribute rewards to users.",
  "Lido DAO has quickly become one of the most popular staking solutions in the Ethereum ecosystem, with over 6 billion in ETH currently staked on the platform.",
  "Lido DAO has partnered with several leading DeFi platforms, including Aave and Curve, to provide users with additional ways to earn yield on their staked ETH.",
];

const cronosResponses = [
  "Cronos (CRO) is the native token of the Cronos blockchain, which is built by Crypto.com.",
  "Cronos was launched in 2021 as part of Crypto.com's mission to create a full ecosystem of crypto products and services.",
  "Cronos is designed to be interoperable with other blockchains and is compatible with the Ethereum Virtual Machine (EVM).",
  "Cronos is part of Crypto.com's broader mission to bring cryptocurrencies and blockchain technology to a wider audience and make them more accessible and useful in everyday life.",
  "One of the key use cases of Cronos is to enable fast and cheap transactions for Crypto.com's growing range of financial services, including the Crypto.com App, Visa card, and DeFi products.",
  "Crypto.com is committed to making Cronos a sustainable and environmentally friendly blockchain, and has pledged to offset the carbon footprint of its operations and promote green energy.",
];

const quantResponses = [
  "Quant is a blockchain operating system that is designed to allow different blockchains to work together seamlessly.",
  "The goal of Quant is to make it easier for developers and enterprises to build and use blockchain applications across multiple networks.",
  "Quant also offers a suite of tools and services to help enterprises manage their blockchain infrastructure, including security, compliance, and monitoring.",
  "The total supply of QNT tokens is fixed at 14.6 million, with a circulating supply of around 12 million.",
  "Quant's QNT token is used to pay for transaction fees and access to the Overledger network, and also provides access to other services such as staking and governance.",
  "Quant has partnerships with a number of major companies, including Oracle, SIA, and UniCredit, as well as with several blockchain projects such as Chainlink and IOTA.",
];

const filecoinResponses = [
  "Filecoin is a decentralized storage network designed to store, secure, and exchange files. It was created by Protocol Labs, the same team behind IPFS (InterPlanetary File System).",
  "Filecoin uses a unique proof-of-replication and proof-of-spacetime consensus mechanism to ensure data storage on the network.",
  "The FIL token is the native cryptocurrency of the Filecoin network, used to pay for storage and retrieval services.",
  "Filecoin is seen as a potential solution to the problem of data storage centralization and censorship.",
  "Filecoin's decentralized storage network can be used for a variety of purposes, including website hosting, data archiving, and content distribution.",
  "Filecoin's storage network is global and decentralized, with nodes located in different regions around the world.",
  "Several notable projects, such as the Internet Archive and OpenZeppelin, have integrated Filecoin into their infrastructure for decentralized storage.",
];

const nearResponses = [
  "Near Protocol has been working on developing its own NFT standard, called NEP-171, which aims to make it easier for developers to create and manage NFTs on the Near blockchain.",
  "Near Protocol has a built-in sharding system called Nightshade, which allows the network to process transactions in parallel, increasing its scalability.",
  "Near Protocol has partnerships with a number of companies, including Algorand and Oasis Labs, to enhance its ecosystem and support the development of new dApps.",
  "Near Protocol supports multiple programming languages, including Rust, AssemblyScript, and Python, making it accessible to developers with different backgrounds.",
  "Near Protocol offers fast and low-cost transactions, with fees as low as $0.001 per transaction.",
  "Near Protocol is a decentralized blockchain platform designed to power high-performance decentralized applications (dApps).",
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

daiBtn.addEventListener("click", () => {
  result.textContent =
    daiResponses[Math.floor(Math.random() * daiResponses.length)];
});
uniswapBtn.addEventListener("click", () => {
  result.textContent =
    uniswapResponses[Math.floor(Math.random() * uniswapResponses.length)];
});
wbtcBtn.addEventListener("click", () => {
  result.textContent =
    wbtcResponses[Math.floor(Math.random() * wbtcResponses.length)];
});
cosmosBtn.addEventListener("click", () => {
  result.textContent =
    cosmosResponses[Math.floor(Math.random() * cosmosResponses.length)];
});
linkBtn.addEventListener("click", () => {
  result.textContent =
    linkResponses[Math.floor(Math.random() * linkResponses.length)];
});
tonBtn.addEventListener("click", () => {
  result.textContent =
    tonResponses[Math.floor(Math.random() * tonResponses.length)];
});

leoBtn.addEventListener("click", () => {
  result.textContent =
    leoResponses[Math.floor(Math.random() * leoResponses.length)];
});

ethcBtn.addEventListener("click", () => {
  result.textContent =
    ethcResponses[Math.floor(Math.random() * ethcResponses.length)];
});

moneroBtn.addEventListener("click", () => {
  result.textContent =
    moneroResponses[Math.floor(Math.random() * moneroResponses.length)];
});

aptosBtn.addEventListener("click", () => {
  result.textContent =
    aptosResponses[Math.floor(Math.random() * aptosResponses.length)];
});

btccashBtn.addEventListener("click", () => {
  result.textContent =
    btccashResponses[Math.floor(Math.random() * btccashResponses.length)];
});

stellarBtn.addEventListener("click", () => {
  result.textContent =
    stellarResponses[Math.floor(Math.random() * stellarResponses.length)];
});

hbarBtn.addEventListener("click", () => {
  result.textContent =
    hbarResponses[Math.floor(Math.random() * hbarResponses.length)];
});

lidoDaoBtn.addEventListener("click", () => {
  result.textContent =
    lidoDaoResponses[Math.floor(Math.random() * lidoDaoResponses.length)];
});

quantBtn.addEventListener("click", () => {
  result.textContent =
    quantResponses[Math.floor(Math.random() * quantResponses.length)];
});

cronosBtn.addEventListener("click", () => {
  result.textContent =
    cronosResponses[Math.floor(Math.random() * cronosResponses.length)];
});

filecoinBtn.addEventListener("click", () => {
  result.textContent =
    filecoinResponses[Math.floor(Math.random() * filecoinResponses.length)];
});

nearBtn.addEventListener("click", () => {
  result.textContent =
    nearResponses[Math.floor(Math.random() * nearResponses.length)];
});

const showResponse = (responses) => {
  let response = responses[Math.floor(Math.random() * responses.length)];
  result.innerHTML = response;
};

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  // Add the class on mouseover
  button.addEventListener("mouseover", () => {
    button.classList.add("glow");
  });

  // Remove the class on mouseout
  button.addEventListener("mouseout", () => {
    button.classList.remove("glow");
  });
});

/* These first 2 lines are a part of a wider code. I may need to use the first two pieces of code. 

  const cryptoName = button.dataset.crypto;
  addCryptoIconToButton(button, cryptoName);


/* This was for the SVG icons to show up on the buttons. I had no success ^ the 2 lines of code above were part of this program/function

function addCryptoIconToButton(button, cryptoName) {
  const icon = document.createElement("span");
  icon.style.backgroundImage = `url('./node_modules/cryptocurrency-icons/svg/color/${cryptoName}.svg')`;
  icon.style.width = "20px";
  icon.style.height = "20px";
  icon.style.display = "inline-block";
  icon.style.backgroundSize = "contain";
  icon.style.backgroundRepeat = "no-repeat";
  icon.style.backgroundPosition = "center";
  button.appendChild(icon);
}

/* This was for the manifest.json fetch method for svg's
document.addEventListener("DOMContentLoaded", function () {
  fetch("./node_modules/cryptocurrency-icons/manifest.json")
    .then((response) => response.json())
    .then((data) => {
      data.icons.forEach((icon) => {
        const img = document.createElement("img");
        img.src = icon.path;
        img.alt = icon.name;
        document.body.appendChild(img);
      });
    });
});

 */
