import React from 'react';
import Header from '../../components/Header';
import TeacherCard from '../../components/TeacherCard';
import './styles.css';

const TeacherList: React.FC = () => {
  return (
    <div id="teacher-list-container" className="container">
      <Header title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-box">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" autoFocus />
          </div>

          <div className="input-box">
            <label htmlFor="weekDay">Dia da semana</label>
            <input type="text" id="weekDay" />
          </div>

          <div className="input-box">
            <label htmlFor="hour">Horário</label>
            <input type="text" id="hour" />
          </div>
        </form>
      </Header>

      <main>
        <TeacherCard />
      </main>
    </div>
  );
};

export default TeacherList;
