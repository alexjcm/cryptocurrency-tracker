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

  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    localStorage.setItem('watchList', watchList);
  }, [watchList]);

  const deleteCryptocurrency = (cryptocurrency) => {
    setWatchList(watchList.filter((el) => el !== cryptocurrency));
    if (selectedId === cryptocurrency) setSelectedId(null);
  };

  const addCryptocurrency = (cryptocurrency) => {
    if (watchList.indexOf(cryptocurrency) === -1) {
      setWatchList([...watchList, cryptocurrency]);
    }
  };

  return (
    <WatchListContext.Provider
      value={{watchList, deleteCryptocurrency, addCryptocurrency, selectedId, setSelectedId}}>
      {props.children}
    </WatchListContext.Provider>
  );
};
