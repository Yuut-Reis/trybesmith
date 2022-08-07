import connection from '../models/connection';
import ModelOrder from '../models/order.model';
import { InterfaceOrder } from '../interfaces/body';

export default class ServiceOrder {
  public model: ModelOrder;

  constructor() {
    this.model = new ModelOrder(connection);
  }

  public async listOrder(): Promise<InterfaceOrder[]> {
    const listOrder = await this.model.listOrder();
    return listOrder;
  }
}
