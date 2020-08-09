import React from 'react';
import whatsappIcon from '../../assets/icons/whatsapp.svg';
import './styles.css';

const TeacherCard: React.FC = () => {
  return (
    <article className="teacher-card">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/47339825?s=460&u=185ed18386f6fe2aac392ab8968a25139dc1c087&v=4"
          alt="Gabriel Santana"
        />

        <div>
          <strong>Gabriel Santana</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Professor de matemática
        <br />
        <br />
        Atualmente lecionando cálculo III
      </p>

      <footer>
        <p>
          Preço por hora: <strong>R$40,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherCard;
