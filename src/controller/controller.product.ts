import { Request, Response } from 'express';
import ServiceProduct from '../services/service.product';

export default class ControllerProduct {
  constructor(private serviceProduct = new ServiceProduct()) { }

  public newProduct = async (req: Request, res: Response) => {
    const product = await this.serviceProduct.newProduct(req.body);
    res.status(201).json(product);
  };

  public listProduct = async (req: Request, res: Response) => {
    const Products = await this.serviceProduct.listProduct();
    res.status(200).json(Products);
  };
}
