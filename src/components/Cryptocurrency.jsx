import React, { useContext } from 'react';
import { WatchListContext } from '../context/WatchListContext';

const Cryptocurrency = ({ cryptocurrency, deleteCryptocurrency }) => {
  const { selectedId, setSelectedId } = useContext(WatchListContext);
  const isNegative = cryptocurrency.price_change_percentage_24h < 0;
  const isSelected = selectedId === cryptocurrency.id;

  return (
    <div className={`minimal-list-item${isSelected ? ' selected' : ''}`}>
      <div
        className="item-link"
        onClick={() => setSelectedId(cryptocurrency.id)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setSelectedId(cryptocurrency.id)}
      >
        <div className="col-asset">
          <img src={cryptocurrency.image} alt={cryptocurrency.name} className="crypto-icon" />
          <span className="crypto-name">{cryptocurrency.name}</span>
        </div>
        <span className="col-symbol">{cryptocurrency.symbol.toUpperCase()}</span>
        <span className="col-price">${cryptocurrency.current_price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 })}</span>
        <span className={`col-change ${isNegative ? 'color-down' : 'color-up'}`}>
          {isNegative ? '↓' : '↑'} {Math.abs(cryptocurrency.price_change_percentage_24h).toFixed(2)}%
        </span>
        <span className="col-change-abs">
          ${Math.abs(cryptocurrency.price_change_24h).toFixed(2)}
        </span>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteCryptocurrency(cryptocurrency.id);
        }}
        className="col-action delete-btn"
        title="Remove Asset"
      >
        ×
      </button>
    </div>
  );
};

export default Cryptocurrency;
