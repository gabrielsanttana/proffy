import {Router} from 'express';
import ClassController from './controllers/ClassController';

const routes = Router();

const classController = new ClassController();

routes.post('/classes', classController.create);
routes.get('/classes', classController.getAll);

export default routes;
