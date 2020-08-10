import {Request, Response} from 'express';
import convertHourToMinutes from '../utils/convertHourToMinutes';
import database from '../database/connection';

interface CreateClassRequest {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  price: number;
  schedule: Schedule[];
}

interface Schedule {
  week_day: number;
  from: string;
  to: string;
}

class ClassesController {
  async create(request: Request, response: Response) {
    const {
      name,
      avatar,
      bio,
      subject,
      price,
      schedule,
      whatsapp,
    } = request.body as CreateClassRequest;

    const trx = await database.transaction();

    try {
      const insertedUserIds = await trx('users').insert({
        name,
        avatar,
        bio,
        whatsapp,
      });

      const user_id = insertedUserIds[0];

      const insertedClassesIds = await trx('classes').insert({
        subject,
        price,
        user_id,
      });

      const class_id = insertedClassesIds[0];

      const classSchedule = schedule.map((scheduleItem: Schedule) => {
        return {
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
          class_id,
        };
      });

      await trx('class_schedules').insert(classSchedule);

      await trx.commit();

      return response
        .status(201)
        .json({message: 'Class schedule successfully created!'});
    } catch (error) {
      return response.status(400).json({error: error.message});
    }
  }
}

export default ClassesController;
