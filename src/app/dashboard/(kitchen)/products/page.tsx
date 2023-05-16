import PageTitle from "@/components/PageTitle";
import ComboProducts from "@/components/Products/ComboProducts"
import Spinner from "@/components/Spinners/Spinner";
import { Product } from "@/types/Product"
import { Suspense } from "react";

const getProducts = async (): Promise<Product[] | any> => {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_PRODUCTION}/products`, {
      cache: 'no-cache'
    });
    console.log(data.json)
    return data.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function Example() {

  const products = await getProducts()

  return (
    <main className="prose prose-invert prose-headings:text-zinc-100 prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-xl prose-h2:font-medium prose-p:text-zinc-400 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-a:text-cyan-400 max-w-5xl ">

      <PageTitle title="Products" />

      <Suspense fallback={<Spinner />}>
        <ComboProducts products={products} />
      </Suspense>
    </main>
  )
}