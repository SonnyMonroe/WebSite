# My Portfolio Landing Page

#### Video Demo: <[URL HERE>](https://youtu.be/1eX45pBnjG0)

# Project Description

This project is a landing page for my personal website portfolio. This landing page includes links to my social media accounts on GitHub, Twitter, and Reddit, as well as links to my blockchain website portfolio, a Dune Dashboard I made for the Total Value Locked, and the In and out flows of value in the Fantom Blockchain. I used SQL to find this information. I also provide a review of my experience with yield farming cryptocurrency in 2022.

This landing page is meant to serve as an introduction to my online presence and showcase some of my projects and interests. The inclusion of links to my social media accounts and blockchain website portfolio allows visitors to explore more of my work and will allow visitors to get to know me better. The review of my yield farming experience may also provide valuable insights or inspiration for other individuals interested in cryptocurrency yield farming.

## Aesthetics

Vaporwave themed, with various elements styled to have a neon effect. This website uses a range of bright, bold colors, including shades of pink, blue, and green. The color scheme is predominantly cool, with a focus on shades of blue and green.

The code also includes some animations, which are defined using the @keyframes rule and applied to specific elements using the animation property. This allows for the website to feel like it is alive and sureal. I programmed the rotating cube and blinking neon lights using CSS animations. I enjoy programming in CSS so I decided not to use JavaScript for these features.

## Dune Dashboard

#### <(https://dune.com/sonnymonroe/fantom-tvl)>

This is a SQL query that is used to calculate the Total Value Locked (TVL) on the Fantom blockchain. TVL is a measure of the value of all assets that are locked into a decentralized finance (DeFi) platform, such as a decentralized exchange or a yield farming protocol.

The query begins by defining several subqueries, each of which generates a temporary table that can be used later in the query. The first subquery, "tokens," generates a table that contains information about different ERC-20 tokens. This table includes the address of each token's contract, the label or symbol of the token, and the divisor that is used to convert the token's balance from its base unit to its display unit.

The second subquery, "prices," generates a table that contains the average price of each token in USD, based on data from the "prices.usd" table. This table includes the date, the price, the symbol, and the contract address of each token.

The third subquery, "ftm," generates a table that contains the daily balance of each token on the Fantom Anyswap Bridge. This table includes the date, the bridge name, the token address, the label or symbol of the token, the token balance in its base unit, and the divisor that is used to convert the balance to its display unit.

The fourth subquery, "weth_ftm," generates a table that contains the daily balance of WETH (wrapped Ether) on the Fantom Anyswap Bridge. This table includes the date, the bridge name, the token address, the label or symbol of the token, the token balance in its base unit, and the divisor that is used to convert the balance to its display unit.

The fifth subquery, "ftm_full," generates a table that contains all of the data from the "ftm" and "weth_ftm" subqueries.

The final subquery, "ftm_tvl," generates a table that contains the TVL on the Fantom Anyswap Bridge for each day. This table includes the date, the bridge name, the token address, the label or symbol of the token, and the TVL in USD.

The main body of the query then calculates the total TVL on the Fantom Anyswap Bridge for each day by summing the TVL of each token. The query filters the results to only include days after September 1, 2021, and groups the results by day and bridge. Finally, the query orders the results by day in ascending order.

## Goal For This Landing Page

My overall goal is to create a positive, professional image and to make it easy for visitors to learn more about who I am, where to find me, and to connect with other Web3 Developers. I hope to collaborate on decentralized applications with like-minded developers.

# About me

I am an aspiring Blockchain Developer interested in topics such as DAO governance, crypto economics, indexing blockchain data, and Decentralized Science. I'm here to fight for a more honest and transparent economic future that works for everyone, not just the top 1%.

I have been in crypto since November 2021, where I dabble in various DeFi protocols providing liquidity, yield farming, and endlessly exploring the limitless possibilities that blockchain technology enables. I am from Boston, Massachusetts, where I hope to broaden my knowledge of Decentralized Finance and master the programming skills required for building the next generation of disruptive web3 technologies.

Thank you for visiting my portfolio! I hope you find my projects interesting and look forward to any opportunities to collaborate.

### Special Thanks

Dear CS50 team,

I wanted to thank you for the amazing opportunity to learn the fundamentals of computer science in your class. Your dedication to teaching and commitment to your students was evident in every aspect of the class and I am deeply grateful for the skills and knowledge I gained.

The value of learning the fundamentals of computer science cannot be overstated, and I am confident that the skills I acquired in your class will serve me well in my future endeavors.

Thank you for all that you do.

Sincerely,

Michael Abramo
