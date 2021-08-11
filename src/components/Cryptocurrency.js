import React from 'react';
import {Link} from 'react-router-dom';

const Cryptocurrency = ({cryptocurrency, deleteCryptocurrency}) => {
  return (
    <Link to={`/cryptocurrencies/${cryptocurrency.id}`} className="text-decoration-none my-1 cryptocurrency">
      <li className="cryptocurrencylist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
        <img className="cryptocurrencylist-image" src={cryptocurrency.image} alt="" />
        <span className="text-decoration-none">{cryptocurrency.current_price}</span>

        <span
          className={
            cryptocurrency.price_change_percentage_24h < 0
              ? 'text-danger mr-2'
              : 'text-success mr-2'
          }>
          {' '}
          {cryptocurrency.price_change_percentage_24h < 0 ? (
            <i className="fas fa-sort-down align-middle mr-1"></i>
          ) : (
            <i className="fas fa-sort-up align-middle mr-1"></i>
          )}
          {cryptocurrency.price_change_percentage_24h}
        </span>
        <i
          onClick={(e) => {
            e.preventDefault();
            deleteCryptocurrency(cryptocurrency.id);
          }}
          className="delete-icon far fa-times-circle text-danger"></i>
      </li>
    </Link>
  );
};

export default Cryptocurrency;
