import React from 'react';
import Header from '../../components/Header';
import './styles.css';

const Register: React.FC = () => {
  return (
    <div className="teacher-register-container">
      <div id="teacher-register-content" className="container">
        <Header
          title="Que incrível que você quer dar aulas"
          description="O primeiro passo é preencher esse formulário de inscrição"
        />
      </div>
    </div>
  );
};

export default Register;
