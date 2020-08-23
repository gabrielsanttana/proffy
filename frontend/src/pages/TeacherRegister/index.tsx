import React from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
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

          <Input name="name" label="Nome completo" type="text" autoFocus />
          <Input name="avatar" label="Avatar" type="text" />
          <Input name="whatsapp" label="Whatsapp" type="text" />
        </fieldset>
      </main>
    </div>
  );
};

export default Register;
