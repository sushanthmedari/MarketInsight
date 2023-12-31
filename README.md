# MarketInsight

This finance application aims to provide retail investors and finance students with a comprehensive platform for conducting stock valuation and market analysis. By leveraging fundamental financial data, market news, and macroeconomic indicators, users will have the necessary tools to make informed investment decisions. 

It will be similar to websites like [this](https://roic.ai/) and [this](https://www.stratosphere.io/), but with a bit more focus on the macroeconomic factors. The application will be built using Next.js , TypeScript and Tailwind for the frontend. It will use Python and Flask for the backend, ensuring a modern and efficient development stack.

### How to locally run the application

The app requires the Finnhub API key and the Alpaca Trading API keys. Currently for both you only require to sign up to get an API key, no credit card information needs to be provided.[Sign up to Finnhub here](https://finnhub.io/). [Sign up to Alpaca Markets here](https://alpaca.markets/).

### What problem does this solve?

As a former finance student with experience in equity research, I recognize the challenges investors face when accessing and analyzing financial data for stock valuation. Staying updated with real-time market news and macroeconomic indicators can be time-consuming. This app intends to solve some of these problems.

The app aims to provide a centralized platform where users can easily access fundamental financial data, market news, and macroeconomic indicators specific to stocks. By consolidating these data sources, the app saves investors time and effort in their analysis process. The app will meet the needs of investors who value efficient access to financial data. 


### Technical breakdown

- Frontend: Built with Next.js and TypeScript for efficient development of responsive user interfaces.

- Styling: Tailwind CSS used for visually appealing and customizable frontend design.

- Backend: The backend will be developed using Python and Flask, allowing seamless integration with the selected APIs for data retrieval and manipulation.

- API integration: External APIs, such as the [FRED API](https://fred.stlouisfed.org/docs/api/fred/) for economic data, the [Alpaca API](https://alpaca.markets/) for market news data, and the [Finnhub API](https://finnhub.io/) for fundamental financial data, are leveraged.

- Database: As immediate database usage isn't required, the app fetches data from APIs in real-time and stores it in memory during the user's session.

- Deployment: Vercel or Heroku can be potential platforms for scalable deployment, easy deployment process, and efficient hosting.
