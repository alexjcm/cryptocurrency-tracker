import React from 'react';
import AddCryptocurrency from '../components/AddCryptocurrency';
import CryptocurrencyList from '../components/CryptocurrencyList';
import InlineDetail from '../components/InlineDetail';

const CryptocurrencySummary = () => {
  return (
    <div className="split-layout">
      <div className="left-panel">
        <div className="summary-controls">
          <AddCryptocurrency />
        </div>
        <CryptocurrencyList />
      </div>
      <div className="right-panel">
        <InlineDetail />
      </div>
    </div>
  );
};

export default CryptocurrencySummary;

