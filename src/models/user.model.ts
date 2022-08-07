import { Pool, ResultSetHeader } from 'mysql2/promise';
import { InterfaceUser } from '../interfaces/body';

export default class ModelUser {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async creatUser(user: InterfaceUser): Promise<InterfaceUser> {
    const { username, classe, level, password } = user;
    const mysql = await this.connection.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.Users
    (username, classe, level, password) VALUES (?, ?, ?,?)`,
      [username, classe, level, password],
    );
    const [{ insertId }] = mysql;
    return { id: insertId, username, classe, level };
  }
}