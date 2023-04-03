'use client'

import { OrderProps } from "@/types/Order";
import { Tab } from "@headlessui/react";

interface OrdersBoardsProps {
  icon?: string;
  ordersWaiting: OrderProps[];
  ordersProduction: OrderProps[];
  ordersDone: OrderProps[];
  onCancelOrder?: (orderID: string) => void;
  onChangeOrderStatus?: (orderID: string, orderStatus: OrderProps['status']) => void;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function OrdersBoard({ ordersWaiting, ordersProduction, ordersDone }: OrdersBoardsProps) {
  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className='flex space-x-1 rounded-xl bg-orange-900/20 p-1'>
          <Tab className={({ selected }) =>
            classNames(
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-orange-700',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white shadow'
                : 'text-orange-100 hover:bg-white/[0.12] hover:text-white'
            )
          }>WAITING</Tab>
          <Tab className={({ selected }) =>
            classNames(
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-orange-700',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white shadow'
                : 'text-orange-100 hover:bg-white/[0.12] hover:text-white'
            )
          }>IN PRODUCTION</Tab>
          <Tab className={({ selected }) =>
            classNames(
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-orange-700',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-1',
              selected
                ? 'bg-white shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
            )
          }>DONE</Tab>
        </Tab.List>
        <Tab.Panels className='mt-2'>
          <Tab.Panel className={classNames(
            'rounded-xl p-3',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-1'
          )}>
            {
              ordersWaiting.map((order) => {
                return (
                  <ul>
                    <li className="relative rounded-md p-3 hover:bg-orange-500/10 list-none cursor-pointer">
                      <h4 className="text-sm font-medium leading-5">MESA {order.table}</h4>
                      <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500 list-none">
                        <li>Produtos: {order.products.length}</li>
                        <li>&middot;</li>
                        <li>Número do pedido: {order._id}</li>
                      </ul>
                    </li>
                  </ul>
                )
              })
            }
          </Tab.Panel>
          <Tab.Panel className={classNames(
            'rounded-xl p-3',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-1'
          )}>
            {
              ordersProduction.map((order) => {
                return (
                  <ul>
                    <li className="relative rounded-md p-3 hover:bg-orange-500/10 list-none cursor-pointer">
                      <h4 className="text-sm font-medium leading-5">MESA {order.table}</h4>
                      <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500 list-none">
                        <li>Produtos: {order.products.length}</li>
                        <li>&middot;</li>
                        <li>Número do pedido: {order._id}</li>
                      </ul>
                    </li>
                  </ul>
                )
              })
            }
          </Tab.Panel>
          <Tab.Panel className={classNames(
            'rounded-xl p-3',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-1'
          )}>
            {
              ordersDone.map((order) => {
                return (
                  <ul>
                    <li className="relative rounded-md p-3 hover:bg-orange-500/10 list-none cursor-pointer">
                      <h4 className="text-sm font-medium leading-5">MESA {order.table}</h4>
                      <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500 list-none">
                        <li>Produtos: {order.products.length}</li>
                        <li>&middot;</li>
                        <li>Número do pedido: {order._id}</li>
                      </ul>
                    </li>
                  </ul>
                )
              })
            }
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}