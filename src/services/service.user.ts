import jwt from 'jsonwebtoken';
import connection from '../models/connection';
import { InterfaceUser } from '../interfaces/body';
import ModelUser from '../models/user.model';

const secret = 'feijoadaDeMadrugada';

export default class ServiceUser {
  public model: ModelUser;

  constructor() {
    this.model = new ModelUser(connection);
  }

  public async creatUser(user: InterfaceUser): Promise<string> {
    const newUser = await this.model.creatUser(user);
    const token = jwt.sign({ data: newUser }, secret);
    return token;
  }
}
