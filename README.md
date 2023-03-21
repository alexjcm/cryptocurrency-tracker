# Cryptocurrency Tracker

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg) [![Build & deploy](https://github.com/alexjcm/cryptocurrency-tracker/actions/workflows/build-and-deploy.yml/badge.svg?branch=main)](https://github.com/alexjcm/cryptocurrency-tracker/actions/workflows/build-and-deploy.yml)

Cryptocurrency price tracker with React.js and [CoinGecko API V3](https://www.coingecko.com/es/api/documentation) to retrieve real-time and historical data for different cryptocurrencies.

## Installation

`npm install`

## Starting server

In the project directory, you can run the app in the development mode:

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## More Scripts avaliables

`npm test`

Launches the test runner in the interactive watch mode.

`npm build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

## Installation with Docker

`npm run docker-build`

`npm run docker-run`

Or

`docker build --rm -t cryptocurrency-tracker .`

`docker run --rm -p 3000:3000 --name cryptocurrency-tracker-app cryptocurrency-tracker`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Contributing

Pull requests are welcome.

## License

[MIT licensed](./LICENSE).
