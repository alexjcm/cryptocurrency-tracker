import React, { useEffect, useState, useContext } from 'react';

import ChartData from './ChartData';
import CryptocurrencyData from './CryptocurrencyData';
import cryptocurrencyApi from '../api/cryptocurrencyApi';
import Loader from './Loader';
import { WatchListContext } from '../context/WatchListContext';

const InlineDetail = () => {
  const { selectedId } = useContext(WatchListContext);
  const [cryptocurrencyData, setCryptocurrencyData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const formatData = (data) =>
    data.map((el) => ({ time: el[0], price: el[1] }));

  useEffect(() => {
    if (!selectedId) return;

    const fetchData = async () => {
      setIsLoading(true);
      const [day, week, year, detail] = await Promise.all([
        cryptocurrencyApi.get(`/coins/${selectedId}/market_chart/`, { params: { vs_currency: 'usd', days: '1' } }),
        cryptocurrencyApi.get(`/coins/${selectedId}/market_chart/`, { params: { vs_currency: 'usd', days: '7' } }),
        cryptocurrencyApi.get(`/coins/${selectedId}/market_chart/`, { params: { vs_currency: 'usd', days: '365' } }),
        cryptocurrencyApi.get('/coins/markets/', { params: { vs_currency: 'usd', ids: selectedId } }),
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
  }, [selectedId]);

  if (!selectedId) {
    return (
      <div className="detail-placeholder">
        <span className="placeholder-icon">◎</span>
        <p>Selecciona una criptomoneda</p>
      </div>
    );
  }

  if (isLoading) return <Loader />;

  return (
    <div className="minimal-detail-view">
      <ChartData data={cryptocurrencyData} />
      <CryptocurrencyData data={cryptocurrencyData.detail} />
    </div>
  );
};

export default InlineDetail;
