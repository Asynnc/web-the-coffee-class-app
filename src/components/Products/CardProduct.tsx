'use client'

import { Product } from "@/types/Product";
import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import { useState } from "react";
import ProductDetailsModal from "./DetailsProducts";
import { IngredientsProps } from "@/types/Ingredients";

interface ProductCardProps {
  urlImage: string;
  name: string;
  price: number;
  product: Product;
}

export default function ProductCard({ urlImage, name, price, product }: ProductCardProps) {

  const [isloading, setIsLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | Product>()
  const [handleOpenModalProductDetails, setHandleOpenModalProductDetails] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);


  function handleOpenProductModal(product: Product) {
    setSelectedProduct(product);
    setHandleOpenModalProductDetails(true);
  }

  function handleCloseProductModal() {
    setIsLoading(true);
    setHandleOpenModalProductDetails(false);
    setIsLoading(false);
    setSelectedProduct(null);
  }

  return (
    <>
      <div className="text-center mt-4">
        <Image
          src={`https://the-coffee-class.s3.amazonaws.com/${urlImage}`}
          width={100}
          height={100}
          quality={75}
          priority
          className="mx-auto mb-4 w-32 rounded-md"
          alt={name}
          onClick={() => handleOpenProductModal(product)}
        />
        <h6 className="text-md font-medium leading-tight whitespace-pre-line">{name}</h6>
        <p className="text-neutral-500 dark:text-neutral-400">{formatCurrency(price)}</p>
      </div>
      <ProductDetailsModal isVisible={handleOpenModalProductDetails} product={product} isLoading={false} onClose={handleCloseProductModal} />
    </>
  )
}

