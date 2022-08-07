import { Pool, ResultSetHeader } from 'mysql2/promise';
import { InterfaceProduct } from '../interfaces/body';

export default class ModelProduct {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async newProduct(data: InterfaceProduct): Promise<InterfaceProduct> {
    const { name, amount } = data;
    const mysql = await this.connection.execute<ResultSetHeader>(`INSERT INTO 
    Trybesmith.Products (name, amount) VALUES (?, ?)`, [name, amount]);
    const [dataInserted] = mysql; 
    const { insertId } = dataInserted;
    return { id: insertId, ...data };
  }
}
