import React, {useState, useContext} from 'react';
import {WatchListContext} from '../context/watchListContext';

const AddCryptocurrency = () => {
  const [isActive, setIsActive] = useState(false);
  const {addCryptocurrency} = useContext(WatchListContext);
  const availableCryptocurrencies = [
    'bitcoin',
    'ethereum',
    'ripple',
    'tether',
    'bitcoin-cash',
    'litecoin',
    'cardano',
    'binancecoin',
    'polkadot',
    'solana',
    'stellar',
    'dogecoin',
    'eos',
    'okb',
    'tezos',
  ];

  const handleClick = (cryptocurrency) => {
    addCryptocurrency(cryptocurrency);
    setIsActive(false);
  };

  return (
    <div className="dropdown">
      <button
        onClick={() => setIsActive(!isActive)}
        className="btn btn-primary dropdown-toggle"
        type="button">
        Add Cryptocurrency
      </button>
      <div className={isActive ? 'dropdown-menu show' : 'dropdown-menu'}>
        {availableCryptocurrencies.map((el) => {
          return (
            <a
              onClick={() => handleClick(el)}
              href="/#"
              className="dropdown-item">
              {el}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AddCryptocurrency;
