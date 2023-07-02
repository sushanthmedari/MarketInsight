# MarketInsight

This finance application aims to provide retail investors and finance students with a comprehensive platform for conducting stock valuation and market analysis. By leveraging fundamental financial data, market news, and macroeconomic indicators, users will have the necessary tools to make informed investment decisions. 

It will be similar to websites like [this](https://roic.ai/) and [this](https://www.stratosphere.io/), but with a bit more focus on the macroeconomic factors. The application will be built using Next.js , TypeScript and Tailwind for the frontend. It will use Python and Flask for the backend, ensuring a modern and efficient development stack.

### What problem does this solve?

As a former finance student with experience in equity research, I recognize the challenges investors face when accessing and analyzing financial data for stock valuation. Staying updated with real-time market news and macroeconomic indicators can be time-consuming. This app intends to solve some of these problems.

The app aims to provide a centralized platform where users can easily access fundamental financial data, market news, and macroeconomic indicators specific to stocks. By consolidating these data sources, the app saves investors time and effort in their analysis process. It empowers users to make more informed investment decisions by providing comprehensive data coverage and timely market insights. The app will meet the needs of investors who value efficient access to financial data. By streamlining the analysis process, the app helps users stay informed and make better investment choices.

### Goals

- Provide access to fundamental financial data: Users will be able to retrieve essential financial information for stocks, such as company financial statements, key ratios, and historical pricing data.
- Aggregate market news: The application will provide up-to-date market news specific to stocks, ensuring users stay informed about recent developments that may impact their investment decisions.
- Integrate macroeconomic data: Users will have access to relevant macroeconomic indicators, enabling them to assess the broader market conditions and make informed investment choices.
- User-friendly experience: The web app will prioritize a clean and intuitive user interface, making it easy for users to navigate, search for specific stocks, and customize their dashboard.
- Additional features will definitely be added given I am able to find more high quality and accessible data. 

### Technical breakdown

- Frontend: The frontend of the web app will be built using Next.js and TypeScript, providing a powerful and efficient framework for developing responsive user interfaces.
- Styling: Tailwind CSS will be utilized for the frontend styling, ensuring a visually appealing and customizable interface.
- Backend: The backend will be developed using Python and Flask, allowing seamless integration with the selected APIs for data retrieval and manipulation.
- API integration: The application will utilize external data sources through APIs such as the [FRED API](https://fred.stlouisfed.org/docs/api/fred/) for economic data, the [Alpaca API](https://alpaca.markets/) for market news data, and the [Finnhub API](https://finnhub.io/) for fundamental financial data for stocks.
- Database: As there is no immediate need for a database, the application will rely on fetching data from the APIs in real-time and storing it in application's memory while the user is actively using the app
- Deployment: The web app will potentially be deployed using platforms like Vercel or Heroku, providing scalability, ease of deployment, and efficient hosting.
