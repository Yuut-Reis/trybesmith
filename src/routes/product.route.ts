import { Router } from 'express';
import ControllerProduct from '../controller/controller.product';

const controller = new ControllerProduct();
const routeProduct = Router();

routeProduct.post('/', controller.newProduct);
routeProduct.get('/', controller.listProduct);

export default routeProduct;