
import { Request, Response } from 'express';


export function listProducts(req: Request, res: Response) {
    res.send('the list of products');
  }

  export function getProductById(req: Request, res: Response) {
    res.send('product id');
  }

  export function createProduct(req: Request, res: Response) {
    res.send('create products');
  }
  
  export function updateProduct(req: Request, res: Response) {
    res.send('update products');
  }

  export function deleteProduct(req: Request, res: Response) {
    res.send('delete products');
  }