import {Router} from 'express';
import ClassController from './controllers/ClassController';
import ConnectionController from './controllers/ConnectionController';

const routes = Router();

const classController = new ClassController();
const connectionController = new ConnectionController();

routes.post('/classes', classController.create);
routes.get('/classes', classController.getAll);
routes.post('/connections', connectionController.create);
routes.get('/connections', connectionController.getTotal);

export default routes;
