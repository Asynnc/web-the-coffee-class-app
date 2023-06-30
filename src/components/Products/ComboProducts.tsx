'use client'

import { Product } from "@/types/Product"
import { Combobox, Transition } from "@headlessui/react"
import { ChevronsUpDown } from "lucide-react"
import { Fragment, useState } from "react"
import ProductCard from "./CardProduct"
import ProductsCard from "./CardProducts"
import { Check } from "lucide-react"

interface Props {
  products: Product[]
}

export default function ComboProducts({ products }: Props) {

  const [selected, setSelected] = useState<Product | null>(null)
  const [query, setQuery] = useState('')

  const filteredProduct =
    query === ''
      ? products
      : products.filter((product: Product) =>
        product.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      )

  return (
    <>
      <div className="mt-4 max-w-6xl">
        <Combobox value={selected} onChange={setSelected} >
          <div className="relative mt-1">
            <div className="relative w-full cursor-pointer overflow-hidden rounded-full bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <Combobox.Input
                onClick={() => setSelected(null)}
                className="w-full border-none p-2 pl-3 text-sm leading-6 text-gray-900 focus:ring-0"
                displayValue={(product: Product | null) => product ? product.name : ''}
                onChange={(event) => setQuery(event.target.value)}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-4">
                <ChevronsUpDown
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery('')}
            >
              <Combobox.Options className="list-none absolute mt-1 max-h-60 max-w-6xl w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredProduct.length === 0 && query !== '' ? (
                  <div className="relative cursor-pointer select-none py-2 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredProduct.sort((a: any, b: any) => a.name.localeCompare(b.name)).map((product: any) => (
                    <Combobox.Option
                      key={product._id}
                      className={({ active }) =>
                        `relative cursor-pointer select-none py-2 pl-10 pr-4
                       ${active ? 'bg-orange-400 text-white' : 'text-gray-900'
                        }`
                      }
                      value={product}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                              }`}>
                            {product.name}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center ${active ? 'text-white' : 'text-teal-600'
                                }`}
                            >
                              <Check className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
      <div className="grid grid-cols-4 gap-4 mx-auto md:px-6" >
        {
          selected ? <ProductCard key={selected._id} name={selected.name} urlImage={selected.imagePath} price={selected.price} product={selected} /> : (
            <ProductsCard products={products} />
          )
        }
      </div>
    </>
  )
}