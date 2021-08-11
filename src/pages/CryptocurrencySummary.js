import React from 'react';

import AddCryptocurrency from '../components/AddCryptocurrency';
import CryptocurrencyList from '../components/CryptocurrencyList';

const CryptocurrencySummary = () => {
  return (
    <div className="cryptocurrencysummary border p-2 rounded bg-light">
      <AddCryptocurrency />
      <CryptocurrencyList />
    </div>
  );
};

export default CryptocurrencySummary;
