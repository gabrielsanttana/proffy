import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import arrowBack from '../../assets/icons/back.svg';
import './styles.css';

interface HeaderProps {
  title: string;
  description?: string;
}

const Header: React.FC<HeaderProps> = ({title, description, children}) => {
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

        {description && <p>{description}</p>}

        {children}
      </div>
    </header>
  );
};

export default Header;
