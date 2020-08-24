import React, {useState} from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';
import warningIcon from '../../assets/icons/warning.svg';
import './styles.css';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({});
  const [schedules, setSchedules] = useState([
    {
      weekDay: '',
      from: '',
      to: '',
    },
  ]);

  const addNewSchedule = () => {
    setSchedules([...schedules]);
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

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select name="subject" label="Matéria" options={subjectOptions} />
          <Input
            name="price"
            label="Custo da sua aula por hora (em R$)"
            type="text"
          />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewSchedule}>
              + Novo horário
            </button>
          </legend>

          {schedules.map((schedule) => (
            <div className="schedule-section">
              <Select
                name="weekDay"
                label="Dia da semana"
                options={weekDayOptions}
              />
              <Input name="from" label="Das" type="time" />
              <Input name="to" label="Às" type="time" />
            </div>
          ))}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>

          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
};

export default Register;
