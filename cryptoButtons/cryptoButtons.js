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

const apeBtn = document.getElementById("ape-btn");
const algoBtn = document.getElementById("algo-btn");
const vechainBtn = document.getElementById("vechain-btn");
const graphBtn = document.getElementById("graph-btn");
const icpBtn = document.getElementById("icp-btn");
const fantomBtn = document.getElementById("fantom-btn");

const result = document.getElementById("result");

//below ethereum result is a test. I'll likely delete it when edting
const bitcoinResult = document.getElementById("bitcoinResult");
const ethereumResult = document.getElementById("ethereumResult");
const tetherResult = document.getElementById("tetherResult");

//These Const Results I am not sure if it's needed. I dont have ripple button and it seems to work fine
const binanceUSDResult = document.getElementById("binanceUSDResult");
const avaxResult = document.getElementById("avaxResult");
const dogeResult = document.getElementById("dogeResult");
const shibaResult = document.getElementById("shibaResult");
const solanaResult = document.getElementById("solanaResult");

const adaResult = document.getElementById("adaResult");
const okbResult = document.getElementById("okbResult");
const ltcResult = document.getElementById("ltcResult");
const dotResult = document.getElementById("dotResult");
const lidoResult = document.getElementById("lidoResult");
const tronResult = document.getElementById("tronResult");

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

const apeResponses = [
  "ApeCoin (APE) is a cryptocurrency intended to support the development of a decentralized web3, inspired by one of the most famous and valuable NFT collections: the Bored Ape Yacht Club.",
  "APE token holders take governance decisions collectively, casting their votes and deciding on issues like allocation of funds, framing of rules, partnerships, project selection and more.",
  "The community holders of ApeCoin and various products/services using the cryptocurrency collectively make up the APE ecosystem. Yuga Labs, founded in 2021 and headquartered in Miami, Florida, is a prominent name in NFTs and digital collectibles.",
  "Designed identically to any other Web3 coin, ApeCoin can be used for payments. ApeCoin is technically acceptable by most merchants because it is a pervasive ERC-20 token. The coin is also already in use as NFT rewards, and holders with the BAYC receive free APE that they can immediately cash.",
  "ApeCoin is an ERC-20 governance and utility token used within the APE ecosystem to empower a decentralized community building at the forefront of web3.",
];

const algoResponses = [
  "Algorand is a blockchain-based platform that was created to be a fast, secure, and decentralized solution for building scalable decentralized applications (dApps).",
  "Algorand's PPoS consensus mechanism allows for a high degree of decentralization, enabling anyone to participate in the network as a validator.",
  "Algorand's platform is highly flexible, enabling developers to build a wide range of dApps, including financial applications, gaming platforms, and supply chain management systems.",
  "Algorand's platform supports smart contracts, which can be used to automate complex transactions and enforce business rules.",
  "Algorand has a strong focus on security, with features like multisignature support and atomic swaps to prevent fraud and ensure the safety of user funds.",
  "Algorand's ecosystem includes a variety of tools and resources for developers, including SDKs, APIs, and developer documentation.",
];

const vechainResponses = [
  "VeChain is a blockchain-based platform that was created to help companies track and manage their supply chains.",
  "VET is used as a store of value and can be used to participate in the VeChain ecosystem, while VTHO is used to pay for transaction fees and other services on the platform.",
  "VeChain's technology enables companies to track and verify the authenticity of products throughout the supply chain, helping to prevent fraud and improve transparency.",
  "VeChain's focus on transparency, traceability, and sustainability makes it a promising platform for companies looking to improve their supply chain operations and reduce their environmental impact.",
  "VeChain's technology can be used in a wide range of industries, including agriculture, fashion, and logistics.",
  "VeChain's platform uses a combination of blockchain technology, smart contracts, and Internet of Things (IoT) devices to track products and data in real-time.",
];

const graphResponses = [
  "The Graph is a decentralized indexing and querying protocol for blockchain data.",
  "The Graph allows developers to easily build applications that can query data from multiple blockchains in a standardized way.",
  "The Graph's technology is highly scalable, with the ability to handle hundreds of thousands of queries per second.",
  "The Graph's protocol is designed to be decentralized and censorship-resistant, ensuring that applications can continue to function even in the face of network disruptions or other challenges.",
  "The Graph's focus on indexing and querying blockchain data makes it a critical piece of infrastructure for the decentralized web, enabling developers to build more complex and powerful applications on top of blockchain technology.",
  "The Graph's ecosystem includes a variety of tools and resources for developers, including a web-based Graph Explorer and a hosted service for deploying and managing subgraphs.",
];

const icpResponses = [
  "Internet Computer is a blockchain-based computing platform that aims to provide a decentralized alternative to traditional cloud computing services.",
  "Internet Computer's ICP token is used to pay for transaction fees and other services on the platform.",
  "Internet Computer has a governance system that allows token holders to vote on proposals and changes to the platform.",
  "Internet Computer's open platform and developer-friendly approach make it easier for developers to build and deploy dApps without having to worry about infrastructure and scalability.",
  "Internet Computer enables developers to build and deploy decentralized applications (dApps) that are fully integrated with the internet, allowing for a more seamless and user-friendly experience.",
  "Internet Computer uses a unique consensus mechanism called Threshold Relay, which is designed to be more efficient and secure than traditional blockchain consensus mechanisms.",
];

const fantomResponses = [
  "Fantom uses a unique consensus mechanism called Lachesis, which is designed to be more efficient and scalable than traditional proof-of-work (PoW) or proof-of-stake (PoS) consensus mechanisms.",
  "Fantom's platform is highly flexible, enabling developers to build a wide range of dApps, including financial applications, gaming platforms, and supply chain management systems.",
  "The initial token launch date for FTM is 15 Jun 2018. The maximum supply of this token is capped at 3,175,000,000, with an inflationary type emission rate since genesis. The supply of FTM is expected to be fully vested on 31 Dec 2025.",
  "Fantom achieves decentralization and security through a permissionless and leaderless consensus protocol, in which anyone can join and leave the network at any time and all nodes are equal.",
  "Fantom DeFi ecosystem is ripe with Halloween themed protocols such as Spooky Swap, BeethovenX, Scream, Tarot, Reaper Farm and Spirit Swap. This halloween trend was built organicly making Fantom quite is unique in that sense.",
  "Fantom is a network of blockchains that provides ledger services to businesses and applications. Fantom is powered by Lachesis, an advanced DAG-based aBFT consensus algorithm. Blockchains built on Fantom are fast, secure, and highly scalable.These features allow organizations, businesses, and individuals to develop decentralized applications that can be used in the real world, across a wide range of industries.",
];

// bitcoinBtn.addEventListener("click", () => {
//   bitcoinResult.textContent =
//     bitcoinResponses[Math.floor(Math.random() * bitcoinResponses.length)];
//   bitcoinResult.style.display = "block";
//   ethereumResult.style.display = "none";
//   tetherResult.style.display = "none";
//   bnbResult.style.display = "none";
//   usdcResult.style.display = "none";
//   maticResult.style.display = "none";
// });

bitcoinBtn.addEventListener("click", () => {
  // get a random response from the array
  const response =
    bitcoinResponses[Math.floor(Math.random() * bitcoinResponses.length)];

  // hide all response elements
  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });

  // show the selected response element
  bitcoinResult.textContent = response;
  bitcoinResult.style.display = "block";
});

// ethereumBtn.addEventListener("click", () => {
//   ethereumResult.textContent =
//     ethereumResponses[Math.floor(Math.random() * ethereumResponses.length)];
//   bitcoinResult.style.display = "none";
//   ethereumResult.style.display = "block";
//   tetherResult.style.display = "none";
//   bnbResult.style.display = "none";
//   usdcResult.style.display = "none";
//   maticResult.style.display = "none";
// });

ethereumBtn.addEventListener("click", () => {
  // get a random response from the array
  const response =
    ethereumResponses[Math.floor(Math.random() * ethereumResponses.length)];

  // hide all response elements
  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });

  // show the selected response element
  ethereumResult.textContent = response;
  ethereumResult.style.display = "block";
});

// tetherBtn.addEventListener("click", () => {
//   tetherResult.textContent =
//     tetherResponses[Math.floor(Math.random() * tetherResponses.length)];
//   tetherResult.style.display = "block";
//   bitcoinResult.style.display = "none";
//   ethereumResult.style.display = "none";
//   bnbResult.style.display = "none";
//   usdcResult.style.display = "none";
//   maticResult.style.display = "none";
// });

tetherBtn.addEventListener("click", () => {
  // get a random response from the array
  const response =
    tetherResponses[Math.floor(Math.random() * tetherResponses.length)];

  // hide all response elements
  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });

  // show the selected response element
  tetherResult.textContent = response;
  tetherResult.style.display = "block";
});

bnbBtn.addEventListener("click", () => {
  // get a random response from the array
  const response =
    bnbResponses[Math.floor(Math.random() * bnbResponses.length)];

  // hide all response elements
  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });

  // show the selected response element
  bnbResult.textContent = response;
  bnbResult.style.display = "block";
});
// usdcBtn.addEventListener("click", () => {
//   usdcResult.textContent =
//     usdcResponses[Math.floor(Math.random() * usdcResponses.length)];
//   tetherResult.style.display = "none";
//   bitcoinResult.style.display = "none";
//   ethereumResult.style.display = "none";
//   bnbResult.style.display = "none";
//   usdcResult.style.display = "block";
//   maticResult.style.display = "none";
// });

usdcBtn.addEventListener("click", () => {
  // get a random response from the array
  const response =
    usdcResponses[Math.floor(Math.random() * usdcResponses.length)];

  // hide all response elements
  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });

  // show the selected response element
  usdcResult.textContent = response;
  usdcResult.style.display = "block";
});

// maticBtn.addEventListener("click", () => {
//   maticResult.textContent =
//     maticResponses[Math.floor(Math.random() * maticResponses.length)];
//   tetherResult.style.display = "none";
//   bitcoinResult.style.display = "none";
//   ethereumResult.style.display = "none";
//   bnbResult.style.display = "none";
//   usdcResult.style.display = "none";
//   maticResult.style.display = "block";
// });

maticBtn.addEventListener("click", () => {
  // get a random response from the array
  const response =
    maticResponses[Math.floor(Math.random() * maticResponses.length)];

  // hide all response elements
  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });

  // show the selected response element
  maticResult.textContent = response;
  maticResult.style.display = "block";
});

// rippleBtn.addEventListener("click", () => {
//   result.textContent =
//     rippleResponses[Math.floor(Math.random() * rippleResponses.length)];
// });

rippleBtn.addEventListener("click", () => {
  // get a random response from the array
  const response =
    rippleResponses[Math.floor(Math.random() * rippleResponses.length)];

  // hide all response elements
  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });

  rippleResult.textContent = response;
  rippleResult.style.display = "block";
});

binanceUSDBtn.addEventListener("click", () => {
  // get a random response from the array
  const response =
    binanceUSDResponses[Math.floor(Math.random() * binanceUSDResponses.length)];

  // hide all response elements
  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });

  binanceUSDResult.textContent = response;
  binanceUSDResult.style.display = "block";
});

// binanceUSDBtn.addEventListener("click", () => {
//   result.textContent =
//     binanceUSDResponses[Math.floor(Math.random() * binanceUSDResponses.length)];
// });

// avaxBtn.addEventListener("click", () => {
//   avaxResult.textContent =
//     avaxResponses[Math.floor(Math.random() * avaxResponses.length)];
// });

avaxBtn.addEventListener("click", () => {
  // get a random response from the array
  const response =
    avaxResponses[Math.floor(Math.random() * avaxResponses.length)];

  // hide all response elements
  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });

  avaxResult.textContent = response;
  avaxResult.style.display = "block";
});

// dogeBtn.addEventListener("click", () => {
//   result.textContent =
//     dogeResponses[Math.floor(Math.random() * dogeResponses.length)];
// });

dogeBtn.addEventListener("click", () => {
  // get a random response from the array
  const response =
    dogeResponses[Math.floor(Math.random() * dogeResponses.length)];

  // hide all response elements
  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });

  dogeResult.textContent = response;
  dogeResult.style.display = "block";
});

// shibaBtn.addEventListener("click", () => {
//   result.textContent =
//     shibaResponses[Math.floor(Math.random() * shibaResponses.length)];
// });

shibaBtn.addEventListener("click", () => {
  // get a random response from the array
  const response =
    shibaResponses[Math.floor(Math.random() * shibaResponses.length)];

  // hide all response elements
  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });

  shibaResult.textContent = response;
  shibaResult.style.display = "block";
});

solanaBtn.addEventListener("click", () => {
  // get a random response from the array
  const response =
    solanaResponses[Math.floor(Math.random() * solanaResponses.length)];

  // hide all response elements
  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });

  solanaResult.textContent = response;
  solanaResult.style.display = "block";
});

// solanaBtn.addEventListener("click", () => {
//   result.textContent =
//     solanaResponses[Math.floor(Math.random() * solanaResponses.length)];
// });

// adaBtn.addEventListener("click", () => {
//   result.textContent =
//     adaResponses[Math.floor(Math.random() * adaResponses.length)];
// });

adaBtn.addEventListener("click", () => {
  // get a random response from the array
  const response =
    adaResponses[Math.floor(Math.random() * adaResponses.length)];

  // hide all response elements
  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });

  adaResult.textContent = response;
  adaResult.style.display = "block";
});

okbBtn.addEventListener("click", () => {
  // get a random response from the array
  const response =
    okbResponses[Math.floor(Math.random() * okbResponses.length)];

  // hide all response elements
  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });

  okbResult.textContent = response;
  okbResult.style.display = "block";
});

// lidoBtn.addEventListener("click", () => {
//   result.textContent =
//     lidoResponses[Math.floor(Math.random() * lidoResponses.length)];
// });

lidoBtn.addEventListener("click", () => {
  // get a random response from the array
  const response =
    lidoResponses[Math.floor(Math.random() * lidoResponses.length)];

  // hide all response elements
  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });

  lidoResult.textContent = response;
  lidoResult.style.display = "block";
});

ltcBtn.addEventListener("click", () => {
  // get a random response from the array
  const response =
    ltcResponses[Math.floor(Math.random() * ltcResponses.length)];

  // hide all response elements
  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });

  ltcResult.textContent = response;
  ltcResult.style.display = "block";
});

// dotBtn.addEventListener("click", () => {
//   dotResult.textContent =
//     dotResponses[Math.floor(Math.random() * dotResponses.length)];
//   okbResult.style.display = "none";
//   adaResult.style.display = "none";
//   ltcResult.style.display = "none";
//   dotResult.style.display = "block";
//   lidoResult.style.display = "none";
//   tronResult.style.display = "none";
// });

dotBtn.addEventListener("click", () => {
  // get a random response from the array
  const response =
    dotResponses[Math.floor(Math.random() * dotResponses.length)];

  // hide all response elements
  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });

  dotResult.textContent = response;
  dotResult.style.display = "block";
});

tronBtn.addEventListener("click", () => {
  // get a random response from the array
  const response =
    tronResponses[Math.floor(Math.random() * tronResponses.length)];

  // hide all response elements
  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });

  tronResult.textContent = response;
  tronResult.style.display = "block";
});

daiBtn.addEventListener("click", () => {
  // get a random response from the array
  const response =
    daiResponses[Math.floor(Math.random() * daiResponses.length)];

  // hide all response elements
  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });

  daiResult.textContent = response;
  daiResult.style.display = "block";
});

uniswapBtn.addEventListener("click", () => {
  const response =
    uniswapResponses[Math.floor(Math.random() * uniswapResponses.length)];

  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });
  uniswapResult.textContent = response;
  uniswapResult.style.display = "block";
});
wbtcBtn.addEventListener("click", () => {
  const response =
    wbtcResponses[Math.floor(Math.random() * wbtcResponses.length)];

  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });

  wbtcResult.textContent = response;
  wbtcResult.style.display = "block";
});

cosmosBtn.addEventListener("click", () => {
  const response =
    cosmosResponses[Math.floor(Math.random() * cosmosResponses.length)];

  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });
  cosmosResult.textContent = response;
  cosmosResult.style.display = "block";
});

linkBtn.addEventListener("click", () => {
  const response =
    linkResponses[Math.floor(Math.random() * linkResponses.length)];

  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });
  linkResult.textContent = response;
  linkResult.style.display = "block";
});

tonBtn.addEventListener("click", () => {
  const response =
    tonResponses[Math.floor(Math.random() * tonResponses.length)];

  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });
  tonResult.textContent = response;
  tonResult.style.display = "block";
});

leoBtn.addEventListener("click", () => {
  const response =
    leoResponses[Math.floor(Math.random() * leoResponses.length)];

  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });
  leoResult.textContent = response;
  leoResult.style.display = "block";
});

ethcBtn.addEventListener("click", () => {
  const response =
    ethcResponses[Math.floor(Math.random() * ethcResponses.length)];

  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });
  ethcResult.textContent = response;
  ethcResult.style.display = "block";
});

moneroBtn.addEventListener("click", () => {
  const response =
    moneroResponses[Math.floor(Math.random() * moneroResponses.length)];

  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });
  moneroResult.textContent = response;
  moneroResult.style.display = "block";
});

aptosBtn.addEventListener("click", () => {
  const response =
    aptosResponses[Math.floor(Math.random() * aptosResponses.length)];

  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });
  aptosResult.textContent = response;
  aptosResult.style.display = "block";
});

btccashBtn.addEventListener("click", () => {
  const response =
    btccashResponses[Math.floor(Math.random() * btccashResponses.length)];

  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });
  btccashResult.textContent = response;
  btccashResult.style.display = "block";
});

stellarBtn.addEventListener("click", () => {
  const response =
    stellarResponses[Math.floor(Math.random() * stellarResponses.length)];

  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });
  stellarResult.textContent = response;
  stellarResult.style.display = "block";
});

hbarBtn.addEventListener("click", () => {
  const response =
    hbarResponses[Math.floor(Math.random() * hbarResponses.length)];

  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });
  hbarResult.textContent = response;
  hbarResult.style.display = "block";
});

lidoDaoBtn.addEventListener("click", () => {
  const response =
    lidoDaoResponses[Math.floor(Math.random() * lidoDaoResponses.length)];

  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });
  lidoDaoResult.textContent = response;
  lidoDaoResult.style.display = "block";
});

quantBtn.addEventListener("click", () => {
  const response =
    quantResponses[Math.floor(Math.random() * quantResponses.length)];

  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });
  quantResult.textContent = response;
  quantResult.style.display = "block";
});

cronosBtn.addEventListener("click", () => {
  const response =
    cronosResponses[Math.floor(Math.random() * cronosResponses.length)];

  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });
  cronosResult.textContent = response;
  cronosResult.style.display = "block";
});

filecoinBtn.addEventListener("click", () => {
  const response =
    filecoinResponses[Math.floor(Math.random() * filecoinResponses.length)];

  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });
  filecoinResult.textContent = response;
  filecoinResult.style.display = "block";
});

nearBtn.addEventListener("click", () => {
  const response =
    nearResponses[Math.floor(Math.random() * nearResponses.length)];

  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });
  nearResult.textContent = response;
  nearResult.style.display = "block";
});

//Results set # 7

apeBtn.addEventListener("click", () => {
  const response =
    apeResponses[Math.floor(Math.random() * apeResponses.length)];

  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });
  apeResult.textContent = response;
  apeResult.style.display = "block";
});

algoBtn.addEventListener("click", () => {
  const response =
    algoResponses[Math.floor(Math.random() * algoResponses.length)];

  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });
  algoResult.textContent = response;
  algoResult.style.display = "block";
});

vechainBtn.addEventListener("click", () => {
  const response =
    vechainResponses[Math.floor(Math.random() * vechainResponses.length)];

  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });
  vechainResult.textContent = response;
  vechainResult.style.display = "block";
});

graphBtn.addEventListener("click", () => {
  const response =
    graphResponses[Math.floor(Math.random() * graphResponses.length)];

  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });
  graphResult.textContent = response;
  graphResult.style.display = "block";
});

icpBtn.addEventListener("click", () => {
  const response =
    icpResponses[Math.floor(Math.random() * icpResponses.length)];

  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });
  icpResult.textContent = response;
  icpResult.style.display = "block";
});

fantomBtn.addEventListener("click", () => {
  // get a random response from the array
  const response =
    fantomResponses[Math.floor(Math.random() * fantomResponses.length)];

  // hide all response elements
  document.querySelectorAll(".responseBox div").forEach((element) => {
    element.style.display = "none";
  });
  fantomResult.textContent = response;
  fantomResult.style.display = "block";
});

// fantomBtn.addEventListener("click", () => {
//   result.textContent =
//     fantomResponses[Math.floor(Math.random() * fantomResponses.length)];
// });

// reponses for crypto buttons below

const showResponse = (responses) => {
  let response = responses[Math.floor(Math.random() * responses.length)];
  result.innerHTML = response;
};

// below is the mouse over hover effects

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

//Old Way for reponses to disappear from each responseBox being a different class element

// daiBtn.addEventListener("click", () => {
//   // get a random response from the array
//   const response =
//     daiResponses[Math.floor(Math.random() * daiResponses.length)];

//   // hide all response elements
//   document.querySelectorAll(".responseBox1 div").forEach((element) => {
//     element.style.display = "none";
//   });
//   document.querySelectorAll(".responseBox2 div").forEach((element) => {
//     element.style.display = "none";
//   });

//   document.querySelectorAll(".responseBox3 div").forEach((element) => {
//     element.style.display = "none";
//   });
//   document.querySelectorAll(".responseBox4 div").forEach((element) => {
//     element.style.display = "none";
//   });

//   // show the selected response element
//   daiResult.textContent = response;
//   daiResult.style.display = "block";
// });
