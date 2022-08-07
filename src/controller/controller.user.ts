import { Request, Response } from 'express';
import ServiceUser from '../services/service.user';

export default class ControllerUser {
  constructor(private serviceUser = new ServiceUser()) { }

  public creatUser = async (req: Request, res: Response) => {
    const token = await this.serviceUser.creatUser(req.body);
    res.status(201).json({ token });
  };
}
