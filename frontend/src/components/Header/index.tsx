import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import arrowBack from '../../assets/icons/back.svg';
import './styles.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="topbar-container">
        <Link to="/">
          <img src={arrowBack} alt="arrow-back" />
        </Link>

        <img src={logo} alt="logo" />
      </div>

      <div className="header-content">
        <strong>Estes são os proffys disponíveis.</strong>
      </div>
    </header>
  );
};

export default Header;
