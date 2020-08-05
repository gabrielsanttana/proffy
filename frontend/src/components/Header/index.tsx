import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import arrowBack from '../../assets/icons/back.svg';
import './styles.css';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title, children}) => {
  return (
    <header className="header">
      <div className="topbar-container">
        <Link to="/">
          <img src={arrowBack} alt="arrow-back" />
        </Link>

        <img src={logo} alt="logo" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>

        {children}
      </div>
    </header>
  );
};

export default Header;
