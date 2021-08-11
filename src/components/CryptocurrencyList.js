import React, {useEffect, useState, useContext} from 'react';

import cryptocurrencyApi from '../api/cryptocurrencyApi';
import {WatchListContext} from '../context/watchListContext';
import Cryptocurrency from './Cryptocurrency';
import Loader from './Loader';

const CryptocurrencyList = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const {watchList, deleteCryptocurrency} = useContext(WatchListContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      // Use this to obtain all the coins market data (price, market cap, volume)
      const response = await cryptocurrencyApi.get('/coins/markets/', {
        params: {
          vs_currency: 'usd',
          ids: watchList.join(','),
        },
      });
      setCryptocurrencies(response.data);
      setIsLoading(false);
    };

    if (watchList.length > 0) {
      fetchData();
    } else setCryptocurrencies([]);
  }, [watchList]);

  const renderCryptocurrencies = () => {
    if (isLoading) {
      <Loader loading={isLoading} />;
    }

    return (
      <ul className="cryptocurrencylist list-group mt-2">
        {cryptocurrencies.map((cryptocurrency) => {
          return (
            <Cryptocurrency
              key={cryptocurrency.id}
              cryptocurrency={cryptocurrency}
              deleteCryptocurrency={deleteCryptocurrency}
            />
          );
        })}
      </ul>
    );
  };

  return <div>{renderCryptocurrencies()}</div>;
};

export default CryptocurrencyList;
