import connection from '../models/connection';
import ModelProduct from '../models/product.model';
import { InterfaceProduct } from '../interfaces/body';

export default class ServiceProduct {
  public model: ModelProduct;

  constructor() {
    this.model = new ModelProduct(connection);
  }

  public async newProduct(data: InterfaceProduct): Promise<InterfaceProduct> {
    const product = await this.model.newProduct(data);
    return product;
  }

  public async listProduct(): Promise<InterfaceProduct[]> {
    const list = await this.model.listProduct();
    return list;
  }
}
