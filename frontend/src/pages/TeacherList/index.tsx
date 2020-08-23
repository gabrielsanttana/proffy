import React from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import TeacherCard from '../../components/TeacherCard';
import './styles.css';

const TeacherList: React.FC = () => {
  return (
    <div id="teacher-list-container" className="container">
      <Header title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Input name="subject" label="Matéria" />
          <Input name="weekday" label="Dia da semana" />
          <Input name="hour" label="Horário" type="time" />
        </form>
      </Header>

      <main>
        <TeacherCard />
      </main>
    </div>
  );
};

export default TeacherList;
