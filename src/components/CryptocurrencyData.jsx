import React from 'react';
import { formatDate } from '../utils/utils';

const CryptocurrencyData = ({ data }) => {
  if (!data) return null;

  const stats = [
    { label: 'Market Cap', value: `$${data.market_cap.toLocaleString()}` },
    { label: 'Circulating Supply', value: data.circulating_supply.toLocaleString() },
    { label: 'Max Supply', value: data.max_supply ? data.max_supply.toLocaleString() : '∞' },
    { label: '24h High', value: `$${data.high_24h.toLocaleString()}` },
    { label: '24h Low', value: `$${data.low_24h.toLocaleString()}` },
    { label: 'All-Time High', value: `$${data.ath.toLocaleString()}` },
    { label: 'ATH Date', value: formatDate(data.ath_date) },
  ];

  return (
    <div className="minimal-stats-grid">
      {stats.map((stat, i) => (
        <div className="stat-card" key={i}>
          <span className="stat-label">{stat.label}</span>
          <span className="stat-value">{stat.value}</span>
        </div>
      ))}
    </div>
  );
};

export default CryptocurrencyData;
