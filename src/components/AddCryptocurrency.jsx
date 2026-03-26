import React, { useState, useContext } from 'react';
import { WatchListContext } from '../context/WatchListContext';

const AddCryptocurrency = () => {
  const [isActive, setIsActive] = useState(false);
  const { addCryptocurrency } = useContext(WatchListContext);
  const availableCryptocurrencies = [
    'bitcoin', 'ethereum', 'bitcoin-cash', 'binancecoin', 'chainlink', 'ripple',
    'okb', 'tether', 'litecoin', 'cardano', 'polkadot', 'solana', 'stellar',
    'uniswap', 'dogecoin', 'eos', 'tezos',
  ];

  const handleClick = (cryptocurrency) => {
    addCryptocurrency(cryptocurrency);
    setIsActive(false);
  };

  return (
    <div className="minimal-dropdown">
      <button
        onClick={() => setIsActive(!isActive)}
        className="add-asset-btn"
        type="button">
        + Add Asset
      </button>
      {isActive && (
        <div className="minimal-dropdown-menu">
          {availableCryptocurrencies.map((el) => {
            return (
              <button
                key={el}
                onClick={() => handleClick(el)}
                type="button"
                className="minimal-dropdown-item">
                {el.charAt(0).toUpperCase() + el.slice(1)}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AddCryptocurrency;
