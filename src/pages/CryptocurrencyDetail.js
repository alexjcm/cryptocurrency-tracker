import React, {useEffect, useState} from 'react';

import {useParams} from 'react-router-dom';

import ChartData from '../components/ChartData';
import CryptocurrencyData from '../components/CryptocurrencyData';
import cryptocurrencyApi from '../api/cryptocurrencyApi';
import Loader from '../components/Loader';

const CryptocurrencyDetail = () => {
  const {id} = useParams();
  const [cryptocurrencyData, setCryptocurrencyData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const formatData = (data) => {
    return data.map((el) => {
      return {
        time: el[0],
        price: el[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [day, week, year, detail] = await Promise.all([
        cryptocurrencyApi.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: 'usd',
            days: '1',
          },
        }),
        cryptocurrencyApi.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: 'usd',
            days: '7',
          },
        }),
        cryptocurrencyApi.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: 'usd',
            days: '365',
          },
        }),
        cryptocurrencyApi.get('/coins/markets/', {
          params: {
            vs_currency: 'usd',
            ids: id,
          },
        }),
      ]);

      setCryptocurrencyData({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        year: formatData(year.data.prices),
        detail: detail.data[0],
      });
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  const renderData = () => {
    if (isLoading) {
      return <Loader loading={isLoading} />;
    }
    return (
      <div className="cryptocurrencydetail">
        <ChartData data={cryptocurrencyData} />
        <CryptocurrencyData data={cryptocurrencyData.detail} />
      </div>
    );
  };

  return renderData();
};

export default CryptocurrencyDetail;
