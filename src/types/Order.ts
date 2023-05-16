import { ProductList } from "./Product";

export interface OrderProps {
  _id: string;
  table: string;
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
  products: Array<ProductList>;
  createdAt: Date | string;
  __v: number;
}
