export interface InterfaceProduct {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;

}

export interface InterfaceUser {
  id?: number;
  username: string;
  classe: string;
  level: number;
  password?: string;

}

export interface InterfaceOrder {
  id?: number;
  userId: number;
  productsIds: number[];
}