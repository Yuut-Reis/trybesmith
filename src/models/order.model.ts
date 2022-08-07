import { Pool } from 'mysql2/promise';
import { InterfaceOrder } from '../interfaces/body';

export default class ModelUser {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async listOrder(): Promise<InterfaceOrder[]> {
    const mysql = await this.connection.execute(
      `SELECT ord.id, ord.userId, JSON_ARRAYAGG(prdct.id) as productsIds
    FROM Trybesmith.Orders AS ord
    INNER JOIN
    Trybesmith.Products as prdct ON prdct.orderId = ord.id
    GROUP BY ord.id
    ORDER BY ord.userId`,
    );
    const [rows] = mysql;
    return rows as InterfaceOrder[];
  }
}