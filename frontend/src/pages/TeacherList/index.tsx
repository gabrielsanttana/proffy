import React from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';
import TeacherCard from '../../components/TeacherCard';
import './styles.css';

const TeacherList: React.FC = () => {
  const subjectOptions = [
    {
      label: 'Artes',
      value: 'Artes',
    },
    {
      label: 'Biologia',
      value: 'Biologia',
    },
    {
      label: 'Ciências',
      value: 'Ciências',
    },
    {
      label: 'Educação física',
      value: 'Educação física',
    },
    {
      label: 'Física',
      value: 'Física',
    },
    {
      label: 'Geografia',
      value: 'Geografia',
    },
    {
      label: 'História',
      value: 'História',
    },
    {
      label: 'Matemática',
      value: 'Matemática',
    },
    {
      label: 'Português',
      value: 'Português',
    },
    {
      label: 'Química',
      value: 'Química',
    },
  ];

  const weekDayOptions = [
    {
      label: 'Domingo',
      value: '0',
    },
    {
      label: 'Segunda-feira',
      value: '1',
    },
    {
      label: 'Terça-feira',
      value: '2',
    },
    {
      label: 'Quarta-feira',
      value: '3',
    },
    {
      label: 'Quinta-feira',
      value: '4',
    },
    {
      label: 'Sexta-feira',
      value: '5',
    },
    {
      label: 'Sábado',
      value: '6',
    },
  ];

  return (
    <div id="teacher-list-container" className="container">
      <Header title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Select name="subject" label="Matéria" options={subjectOptions} />
          <Select
            name="weekday"
            label="Dia da semana"
            options={weekDayOptions}
          />
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
