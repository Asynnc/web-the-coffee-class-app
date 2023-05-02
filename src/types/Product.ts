import { IngredientsProps } from "./Ingredients";

export interface ProductProps {
  _id: string;
  quantity: number;
  product: Product
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: Array<IngredientsProps>
  category: string;
  __v: number;
}