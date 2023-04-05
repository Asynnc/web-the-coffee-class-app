export interface ProductProps {
  _id: string;
  quantity: number;
  product: {
    name: string;
    imagePath: string;
    price: number;
  }
}