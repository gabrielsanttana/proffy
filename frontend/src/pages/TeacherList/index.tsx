import React, {useState, FormEvent} from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';
import TeacherCard, {Teacher} from '../../components/TeacherCard';
import './styles.css';

const TeacherList: React.FC = () => {
  const [availableTeachers, setAvailableTeachers] = useState([]);
  const [formData, setFormData] = useState({
    subject: '',
    week_day: '',
    hour: '',
  });

  const searchForClasses = async (event: FormEvent) => {
    event.preventDefault();

    const response = await api.get('/classes', {
      params: {
        subject: formData.subject,
        week_day: formData.week_day,
        hour: formData.hour,
      },
    });

    setAvailableTeachers(response.data);
  };

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
          <Select
            name="subject"
            label="Matéria"
            options={subjectOptions}
            onChange={(event) =>
              setFormData({...formData, subject: event.target.value})
            }
          />
          <Select
            name="weekday"
            label="Dia da semana"
            options={weekDayOptions}
            onChange={(event) =>
              setFormData({...formData, week_day: event.target.value})
            }
          />
          <Input
            name="hour"
            label="Horário"
            type="time"
            value={formData.hour}
            onChange={(event) =>
              setFormData({...formData, hour: event.target.value})
            }
          />

          <button type="submit" onClick={searchForClasses}>
            Buscar
          </button>
        </form>
      </Header>

      <main>
        {availableTeachers.map((availableTeacher: Teacher) => {
          return (
            <TeacherCard teacher={availableTeacher} key={availableTeacher.id} />
          );
        })}
      </main>
    </div>
  );
};

export default TeacherList;
