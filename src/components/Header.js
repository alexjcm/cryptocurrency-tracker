import React from 'react';

import {Link} from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai';
import './Header.css';

const Header = () => {
  return (
    <div>
      <Link to={'/'} className="button-home">
        <AiOutlineHome size={32} />
      </Link>
      <h1 className="text-center headerCryptocurrency">
        World's most popular cryptocurrencies
      </h1>
    </div>
  );
};

export default Header;
