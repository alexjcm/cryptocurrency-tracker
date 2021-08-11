import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom';

import CryptocurrencyDetail from './pages/CryptocurrencyDetail';
import CryptocurrencySummary from './pages/CryptocurrencySummary';
import Header from './components/Header';
import {WatchListContextProvider} from './context/watchListContext';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <WatchListContextProvider>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={CryptocurrencySummary} />
          <Route path="/cryptocurrencies/:id" component={CryptocurrencyDetail} />
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
};

export default App;
