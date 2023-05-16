import { IngredientsProps } from "./Ingredients";

export interface ProductList {
  _id: string;
  quantity: number;
  product: Product
}

export interface Product {
  _id: string,
  name: string,
  description: string,
  imagePath: string,
  price: number,
  ingredients: Array<IngredientsProps>,
  category: string,
  __v: 0
}