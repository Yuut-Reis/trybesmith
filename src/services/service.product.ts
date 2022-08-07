import connection from '../models/connection';
import ModelProduct from '../models/product.model';
import { InterfaceProduct } from '../interfaces/body';

export default class ServiceProduct {
  public model: ModelProduct;

  constructor() {
    this.model = new ModelProduct(connection);
  }

  public newProduct(data: InterfaceProduct): Promise<InterfaceProduct> {
    return this.model.newProduct(data);
  }

  public listProduct(): Promise<InterfaceProduct[]> {
    return this.model.listProduct();
  }
}
