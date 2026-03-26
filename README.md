# Cryptocurrency Tracker (Barely-There UI)

[![Build & deploy](https://github.com/alexjcm/cryptocurrency-tracker/actions/workflows/build-and-deploy.yml/badge.svg?branch=main)](https://github.com/alexjcm/cryptocurrency-tracker/actions/workflows/build-and-deploy.yml)

A deeply minimalist, high-performance cryptocurrency price tracker built with **React 19**, **Vite**, and **Node 24**. It uses the [CoinGecko API V3](https://www.coingecko.com/es/api/documentation) to retrieve real-time data, historical charting, and asset metrics.

This project emphasizes **Extreme Minimalism (Barely-There UI)**—stripping away borders, explicit containers, and heavy framework styling to let the data and pure typography take center stage against a stark dark-mode canvas.

## Requirements
- **Node.js**: `>= 24.0.0`

## Installation

```bash
npm install
```

## Running Locally

To run the application in development mode with Hot Module Replacement:

```bash
npm start
```

Open [http://localhost:5173/](http://localhost:5173/) (or the port specified in your terminal) to view it in the browser. 
*(Note: Production builds are configured to serve from `/cryptocurrency-tracker/` for GitHub Pages compatibility)*

## Building for Production

```bash
npm run build
```

Builds the heavily optimized, minified app for production to the `build` folder using Vite.

## Contributing

Pull requests are welcome.

## License

[MIT licensed](./LICENSE).
