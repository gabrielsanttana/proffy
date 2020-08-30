import React, {useState, FormEvent} from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';
import warningIcon from '../../assets/icons/warning.svg';
import './styles.css';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    avatar: '',
    whatsapp: '',
    subject: '',
    price: 0,
    schedules: [
      {
        weekDay: 0,
        from: '',
        to: '',
      },
    ],
  });

  const addNewSchedule = () => {
    setFormData({
      ...formData,
      schedules: [
        ...formData.schedules,
        {
          weekDay: 0,
          from: '',
          to: '',
        },
      ],
    });
  };

  const setScheduleValue = (
    scheduleIndex: number,
    field: string,
    value: string,
  ) => {
    const updatedSchedules = formData.schedules.map((schedule, index) => {
      if (index === scheduleIndex) {
        return {
          ...schedule,
          [field]: value,
        };
      }

      return schedule;
    });

    setFormData({...formData, schedules: updatedSchedules});
  };

  const createClass = (event: FormEvent) => {
    event.preventDefault();
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

          <Input
            name="name"
            label="Nome completo"
            type="text"
            value={formData.name}
            onChange={(event) =>
              setFormData({...formData, name: event.target.value})
            }
            autoFocus
          />
          <Input
            name="avatar"
            label="Avatar"
            type="text"
            value={formData.avatar}
            onChange={(event) =>
              setFormData({...formData, avatar: event.target.value})
            }
          />
          <Input
            name="whatsapp"
            label="Whatsapp"
            type="text"
            value={formData.whatsapp}
            onChange={(event) =>
              setFormData({...formData, whatsapp: event.target.value})
            }
          />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select
            name="subject"
            label="Matéria"
            options={subjectOptions}
            onChange={(event) =>
              setFormData({...formData, subject: event.target.value})
            }
          />
          <Input
            name="price"
            label="Custo da sua aula por hora (em R$)"
            type="text"
            value={formData.price}
            onChange={(event) =>
              setFormData({...formData, price: Number(event.target.value)})
            }
          />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewSchedule}>
              + Novo horário
            </button>
          </legend>

          {formData.schedules.map((schedule, index) => (
            <div key={`schedule-${index}`} className="schedule-section">
              <Select
                name="weekDay"
                label="Dia da semana"
                options={weekDayOptions}
                onChange={(event) =>
                  setScheduleValue(index, 'weekDay', event.target.value)
                }
              />
              <Input
                name="from"
                label="Das"
                type="time"
                value={schedule.from}
                onChange={(event) =>
                  setScheduleValue(index, 'from', event.target.value)
                }
              />
              <Input
                name="to"
                label="Às"
                type="time"
                value={schedule.to}
                onChange={(event) =>
                  setScheduleValue(index, 'to', event.target.value)
                }
              />
            </div>
          ))}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>

          <button type="submit" onClick={createClass}>
            Salvar cadastro
          </button>
        </footer>
      </main>
    </div>
  );
};

export default Register;
