'use client'

import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import ProductCard from "./CardProduct";
import { Product } from "@/types/Product";



interface CardProductsProps {
  products: Product[];
}
//${process.env.AWS_S3_URL}/${urlImage}
export default function ProductsCard({ products }: CardProductsProps) {
  return (<>
    {products.map((product: Product) => (
      <ProductCard key={product._id} name={product.name} urlImage={product.imagePath} price={product.price} />
    ))}
  </>)
}

