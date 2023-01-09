import {get} from './common';

export type Product = {
  code: string;
  image_url: string;
  name: string;
  quantity: number;
  description: string;
};

export const getProducts = () => get<Product[]>('api/products');
export const getProductByCode = (code: string) =>
  get<Product>(`api/products/${code}`);
