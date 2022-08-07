import { Router } from 'express';
import ControllerOrder from '../controller/controller.order';

const controller = new ControllerOrder();
const routeOrder = Router();

routeOrder.get('/', controller.listOrder);

export default routeOrder;