'use client'

import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";

interface ProductCardProps {
  urlImage: string;
  name: string;
  price: number;
}
//${process.env.AWS_S3_URL}/${urlImage}
export default function ProductCard({ urlImage, name, price }: ProductCardProps) {
  return (
    <div className="text-center">
      <Image
        src={`https://the-coffee-class.s3.amazonaws.com/${urlImage}`}
        width={100}
        height={100}
        quality={100}
        priority
        className="mx-auto mb-4 w-32 rounded-lg"
        alt={name} />
      <h5 className="mb-2 text-xl font-medium leading-tight">{name}</h5>
      <p className="text-neutral-500 dark:text-neutral-400">{formatCurrency(price)}</p>
    </div>
  )
}

