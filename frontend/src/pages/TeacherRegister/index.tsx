import React from 'react';
import Header from '../../components/Header';
import './styles.css';

const Register: React.FC = () => {
  return (
    <div id="teacher-register-container" className="container">
      <Header
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <div className="input-box">
            <label htmlFor="name">Nome completo</label>
            <input type="text" id="name" autoFocus />
          </div>

          <div className="input-box">
            <label htmlFor="avatar">Avatar</label>
            <input type="text" id="avatar" />
          </div>

          <div className="input-box">
            <label htmlFor="whatsapp">Whatsapp</label>
            <input type="text" id="whatsapp" />
          </div>
        </fieldset>
      </main>
    </div>
  );
};

export default Register;
