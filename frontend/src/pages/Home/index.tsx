import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import logo from '../../assets/images/logo.svg';
import landingImage from '../../assets/images/landing.svg';
import studyIcon from '../../assets/icons/study.svg';
import teachIcon from '../../assets/icons/give-classes.svg';
import './styles.css';

const Home: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState<number>(0);

  useEffect(() => {
    api.get('/connections').then((response) => {
      const connections = response.data.total;

      setTotalConnections(connections);
    });
  }, []);

  return (
    <div className="homepage-container">
      <div id="homepage-content" className="container">
        <div className="logo-container">
          <img src={logo} alt="logo" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={landingImage} alt="landing" className="landing-image" />

        <div className="buttons-container">
          <Link to="/estudar" className="study">
            <img src={studyIcon} alt="study" />
            Estudar
          </Link>
          <Link to="/ensinar" className="teach">
            <img src={teachIcon} alt="teach" />
            Ensinar
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas
        </span>
      </div>
    </div>
  );
};

export default Home;
