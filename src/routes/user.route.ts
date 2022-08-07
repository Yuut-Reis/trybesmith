import { Router } from 'express';
import ControllerUser from '../controller/controller.user';

const controller = new ControllerUser();
const routeUser = Router();

routeUser.post('/', controller.creatUser);

export default routeUser;