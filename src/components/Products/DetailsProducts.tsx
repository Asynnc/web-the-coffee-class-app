import { Product } from "@/types/Product";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

interface ProductModalProps {
  isVisible: boolean;
  product: Product | null;
  onClose: () => void;
  isLoading?: boolean;
}

export default function ProductDetailsModal({ isVisible, product, onClose, isLoading }: ProductModalProps) {

  if (!isVisible || !product) {
    return null;
  }

  return (
    <>
      <Transition appear show={isVisible} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center"
                  >
                    {product.name.toUpperCase()}
                  </Dialog.Title>
                  <div className="mt-4">
                    {product && (
                      <div className="w-full">
                        <Image
                          className="rounded-sm mx-auto max-w-full max-h-60"
                          src={`https://the-coffee-class.s3.amazonaws.com/${product.imagePath}`}
                          alt={product.name}
                          width={500}
                          height={500}
                          priority
                        />
                      </div>
                    )}
                    <div className="flex items-center justify-between mt-6">
                      <span className="text-md font-medium opacity-8">Ingredients</span>
                      <strong>{product.ingredients.length}</strong>
                    </div>
                    <div className="mt-4 overflow-y-auto">
                      {product.ingredients.map(({ _id, name, icon }) => (
                        <div className="flex mt-4" key={_id}>
                          <span className="text-md mr-1 text-zinc-700">{icon}</span>
                          <div className="ml-1">
                            <strong className="block mb-1">{name}</strong>
                            {/* <span className="text-sm text-zinc-700">{name}</span> */}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 justify-evenly flex flex-1">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md bproduct bproduct-transparent bg-transparent px-4 py-2 text-sm font-medium text-black hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      onClick={onClose}
                    >
                      FECHAR
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}