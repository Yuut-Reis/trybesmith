import { Request, Response } from 'express';
import ServiceOrder from '../services/service.order';

export default class ControllerOrder {
  constructor(private serviceOrder = new ServiceOrder()) { }

  public listOrder = async (req: Request, res: Response) => {
    const list = await this.serviceOrder.listOrder();
    res.status(200).json(list);
  };
}
