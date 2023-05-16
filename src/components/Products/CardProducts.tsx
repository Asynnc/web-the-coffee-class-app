'use client'

import ProductCard from "./CardProduct";
import { Product } from "@/types/Product";

interface CardProductsProps {
  products: Product[];
}

export default function ProductsCard({ products }: CardProductsProps) {
  return (<>
    {products.map((product: Product) => (
      <ProductCard key={product._id} name={product.name} urlImage={product.imagePath} price={product.price} />
    ))}
  </>)
}

