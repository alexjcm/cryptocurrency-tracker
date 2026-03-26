import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="minimal-header">
      <Link to={'/'} className="brand-link">
        Crypto<span className="brand-dot">.</span>
      </Link>
      <span className="minimal-subtitle">Real-time market tracking</span>
    </header>
  );
};

export default Header;
