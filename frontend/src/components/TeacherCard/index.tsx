import React from 'react';
import whatsappIcon from '../../assets/icons/whatsapp.svg';
import './styles.css';

export interface Teacher {
  id: number;
  avatar: string;
  name: string;
  subject: string;
  bio: string;
  price: number;
  whatsapp: string;
}

interface TeacherCardProps {
  teacher: Teacher;
}

const TeacherCard: React.FC<TeacherCardProps> = ({teacher}) => {
  return (
    <article className="teacher-card">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />

        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço por hora: <strong>R${teacher.price},00</strong>
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
