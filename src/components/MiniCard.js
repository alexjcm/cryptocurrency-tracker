import React from 'react';

const MiniCard = ({title, data}) => {
  return (
    <>
      <div className="d-flex flex-column">
        <span className="text-muted cryptocurrency-data-category">{title}</span>
        <span>{data}</span>
      </div>
    </>
  );
};

export default MiniCard;
