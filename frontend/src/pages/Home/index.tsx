import React from 'react';
import logo from '../../assets/images/logo.svg';
import landingImage from '../../assets/images/landing.svg';
import studyIcon from '../../assets/icons/study.svg';
import teachIcon from '../../assets/icons/give-classes.svg';
import heartIcon from '../../assets/icons/purple-heart.svg';
import './styles.css';

const Home: React.FC = () => {
  return (
    <div className="homepage-container">
      <div id="homepage-content" className="container">
        <div className="logo-container">
          <img src={logo} alt="logo" />
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img src={landingImage} alt="landing" className="landing-image" />

        <div className="buttons-container">
          <a href="/estudar" className="study">
            <img src={studyIcon} alt="study" />
            Estudar
          </a>
          <a href="/ensinar" className="teach">
            <img src={teachIcon} alt="teach" />
            Ensinar
          </a>
        </div>

        <span className="total-connections">
          Total de 100 conexões já realizadas{' '}
          <img src={heartIcon} alt="heart" />
        </span>
      </div>
    </div>
  );
};

export default Home;