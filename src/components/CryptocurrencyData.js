import React from 'react';

import MiniCard from './MiniCard';
import {formatDate} from '../utils/Utils';

const CryptocurrencyData = ({data}) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="cryptocurrency-data bg-white mt-2 p-2 rounded border row">
          <div className="col-sm">
            <MiniCard
              title="Circulating Supply"
              data={data.circulating_supply}
            />
            <hr />
            <MiniCard title="ATH (All-Time High)" data={'$' + data.ath} />
          </div>
          <div className="col-sm">
            <MiniCard title="Max Supply" data={data.max_supply} />
            <hr />
            <MiniCard title="ATH date" data={formatDate(data.ath_date)} />
          </div>
          <div className="col-sm">
            <MiniCard title="Low 24h" data={'$' + data.low_24h} />
            <hr />
            <MiniCard title="Market Cap" data={data.market_cap} />
          </div>
          <div className="col-sm">
            <MiniCard title="High 24h" data={'$' + data.high_24h} />
            <hr />
            <MiniCard
              title="Last updated"
              data={formatDate(data.last_updated)}
            />
          </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CryptocurrencyData;
