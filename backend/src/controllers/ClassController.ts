import {Request, Response} from 'express';
import convertHourToMinutes from '../utils/convertHourToMinutes';
import database from '../database/connection';

interface Schedule {
  week_day: number;
  from: string;
  to: string;
}

interface CreateRequest {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  price: number;
  schedule: Schedule[];
}

class ClassController {
  async create(request: Request, response: Response) {
    const {
      name,
      avatar,
      bio,
      subject,
      price,
      schedule,
      whatsapp,
    } = request.body as CreateRequest;

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

  async getAll(request: Request, response: Response) {
    const subject = request.query.subject as string;
    const week_day = request.query.week_day as string;
    const hour = request.query.hour as string;

    if (!subject || !week_day || !hour) {
      return response
        .status(400)
        .json({error: "Filters to search for classes weren't provided"});
    }

    const timeInMinutes = convertHourToMinutes(hour);

    const searchedClasses = await database('classes')
      .whereExists(function () {
        this.select('class_schedules.*')
          .from('class_schedules')
          .whereRaw('`class_schedules`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedules`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedules`.`from` <= ??', [Number(timeInMinutes)])
          .whereRaw('`class_schedules`.`to` > ??', [Number(timeInMinutes)]);
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);

    return response.status(200).json(searchedClasses);
  }
}

export default ClassController;
