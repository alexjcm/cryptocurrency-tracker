import React from 'react';
import {Link} from 'react-router-dom';

const Cryptocurrency = ({cryptocurrency, deleteCryptocurrency}) => {
  return (
    <Link
      to={`/cryptocurrencies/${cryptocurrency.id}`}
      className="text-decoration-none my-1 cryptocurrency">
      <li className="cryptocurrencylist-item list-group-item list-group-item-action align-items-center">
        <img
          className="cryptocurrencylist-image"
          src={cryptocurrency.image}
          alt=""
        />
        <span className="cryptocurrency-text-name">{cryptocurrency.name}</span>
        <span className="cryptocurrency-text-symbol text-muted">
          {cryptocurrency.symbol.toUpperCase()}
        </span>
        <span className="cryptocurrency-text">
          {'$' + cryptocurrency.current_price}
        </span>

        <span
          className={
            cryptocurrency.price_change_percentage_24h < 0
              ? 'text-danger cryptocurrency-text'
              : 'text-success cryptocurrency-text'
          }>
          {' '}
          {cryptocurrency.price_change_percentage_24h < 0 ? (
            <i className="fas fa-sort-down align-middle"></i>
          ) : (
            <i className="fas fa-sort-up align-middle"></i>
          )}
          {cryptocurrency.price_change_percentage_24h + ' %'}
        </span>

        <span
          className={
            cryptocurrency.price_change_24h < 0
              ? 'text-danger cryptocurrency-text'
              : 'text-success cryptocurrency-text'
          }>
          {'$' + cryptocurrency.price_change_24h}
        </span>

        <i
          className="delete-icon far fa-times-circle text-muted"
          onClick={(e) => {
            e.preventDefault();
            deleteCryptocurrency(cryptocurrency.id);
          }}></i>
      </li>
    </Link>
  );
};

export default Cryptocurrency;
