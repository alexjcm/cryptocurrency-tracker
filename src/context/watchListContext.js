import React, {createContext, useState, useEffect} from 'react';

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  const [watchList, setWatchList] = useState(
    localStorage.getItem('watchList')?.split(',') || [
      'bitcoin',
      'ethereum',
      'bitcoin-cash',
      'binancecoin',
      'chainlink',
      'ripple',
      'okb',
      'tether',
      'litecoin',
      'cardano',
      'polkadot',
      'solana',
      'stellar',
      'uniswap',  
      'dogecoin',
      'eos',  
      'tezos',
    ]
  );

  useEffect(() => {
    localStorage.setItem('watchList', watchList);
  }, [watchList]);

  const deleteCryptocurrency = (cryptocurrency) => {
    setWatchList(
      watchList.filter((el) => {
        return el !== cryptocurrency;
      })
    );
  };

  const addCryptocurrency = (cryptocurrency) => {
    if (watchList.indexOf(cryptocurrency) === -1) {
      setWatchList([...watchList, cryptocurrency]);
    }
  };

  return (
    <WatchListContext.Provider
      value={{watchList, deleteCryptocurrency, addCryptocurrency}}>
      {props.children}
    </WatchListContext.Provider>
  );
};
