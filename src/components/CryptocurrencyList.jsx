import React, { useEffect, useState, useContext } from 'react';

import cryptocurrencyApi from '../api/cryptocurrencyApi';
import { WatchListContext } from '../context/WatchListContext';
import Cryptocurrency from './Cryptocurrency';
import Loader from './Loader';

const CryptocurrencyList = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const { watchList, deleteCryptocurrency, selectedId, setSelectedId } = useContext(WatchListContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await cryptocurrencyApi.get('/coins/markets/', {
        params: {
          vs_currency: 'usd',
          ids: watchList.join(','),
        },
      });
      setCryptocurrencies(response.data);
      if (response.data.length > 0 && !selectedId) {
        setSelectedId(response.data[0].id);
      }
      setIsLoading(false);
    };

    if (watchList.length > 0) {
      fetchData();
    } else setCryptocurrencies([]);
  }, [watchList]);

  if (isLoading) return <Loader />;

  return (
    <div className="minimal-crypto-list">
      <div className="list-header">
        <span className="col-asset">Asset</span>
        <span className="col-symbol">Symbol</span>
        <span className="col-price">Price</span>
        <span className="col-change">24h %</span>
        <span className="col-change-abs">24h $</span>
        <span className="col-action"></span>
      </div>
      <div className="list-body">
        {cryptocurrencies.map((crypto) => (
          <Cryptocurrency
            key={crypto.id}
            cryptocurrency={crypto}
            deleteCryptocurrency={deleteCryptocurrency}
          />
        ))}
      </div>
    </div>
  );
};

export default CryptocurrencyList;
