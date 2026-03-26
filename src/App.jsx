import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import CryptocurrencySummary from './pages/CryptocurrencySummary';
import Header from './components/Header';
import {WatchListContextProvider} from './context/WatchListContext';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <WatchListContextProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Header />
          <Routes>
            <Route path="/" element={<CryptocurrencySummary />} />
          </Routes>
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
};

export default App;
