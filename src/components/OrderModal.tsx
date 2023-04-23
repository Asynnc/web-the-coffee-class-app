'use client'

import { OrderProps } from "@/types/Order";
import { formatCurrency } from "@/utils/formatCurrency";
import { Dialog, Transition } from "@headlessui/react";
import { CheckCircle2, Clock3, Flame } from "lucide-react";
import Image from "next/image";
import { Fragment } from "react";

interface OrderModalProps {
  isVisible: boolean;
  order: OrderProps | null;
  onClose: () => void;
  onCancelOrder?: () => Promise<void>;
  onChangeOrderStatus?: () => void;
  isLoading?: boolean;
}

export default function OrderModal({ isVisible, order, onClose, onCancelOrder, isLoading, onChangeOrderStatus }: OrderModalProps) {

  if (!isVisible || !order) {
    return null;
  }

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + (product.price * quantity);
  }, 0);

  const cancelOrder = async (id: OrderProps['_id']): Promise<void> => {
    await fetch(`http://localhost:3001/api/orders/${id}`, {
      method: 'DELETE',
    }).then(
      () => onClose()
    )
  }

  // const changeOrderStatus = async (): Promise<void> => {

  // }

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
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    TABLE {order.table}
                  </Dialog.Title>
                  <div className="mt-2">
                    <small className="text-sm text-gray-600">
                      ORDER STATUS
                    </small>
                    <div className="flex">
                      <span className="text-small">
                        {order.status === 'WAITING' && <Clock3 fill="gray" />}
                        {order.status === 'IN_PRODUCTION' && <Flame fill='red' />}
                        {order.status === 'DONE' && <CheckCircle2 fill="green" />}
                      </span>
                      <strong className="ml-2">
                        {order.status === 'WAITING' && 'WAITING'}
                        {order.status === 'IN_PRODUCTION' && 'IN PRODUCTION'}
                        {order.status === 'DONE' && 'DONE'}
                      </strong>
                    </div>
                  </div>

                  <div className="mt-8">
                    <strong className="text-md font-medium opacity-8">Items</strong>
                    <div className="mt-4 overflow-y-auto">
                      {order.products.map(({ _id, product, quantity }) => (
                        <div className="flex mt-4" key={_id}>
                          <Image className="rounded-lg" src={`http://localhost:3001/uploads/${product.imagePath}`} alt={product.name} width="100" height="28" />
                          <span className="text-sm text-zinc-700 block min-w-5 ml-3">{quantity}x </span>
                          <div className="ml-1">
                            <strong className="block mb-1">{product.name}</strong>
                            <span className="text-sm text-zinc-700">{formatCurrency(product.price)}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-sm font-medium opacity-8">Total</span>
                    <strong>{formatCurrency(total)}</strong>
                  </div>


                  <div className="mt-4 justify-evenly flex flex-1">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-transparent px-4 py-2 text-sm font-medium text-black hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      onClick={() => cancelOrder(order._id)}
                    >
                      CANCEL ORDER
                    </button>
                    {order.status !== 'DONE' && (
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                        onClick={onClose}
                      >
                        {order.status === 'WAITING' && 'START PRODUCTION'}
                        {order.status === 'IN_PRODUCTION' && 'COMPLETE ORDER'}
                      </button>
                    )}
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