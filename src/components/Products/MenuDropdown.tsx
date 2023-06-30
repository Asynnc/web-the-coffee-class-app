'use client'

import { Menu, Transition } from '@headlessui/react'
import { ChevronDown, Coffee, Download, Plus, PlusCircle } from 'lucide-react'
import { Fragment, useState } from 'react'
import CreateProductModal from './CreateProduct'

export default function ProductsDropdown() {

  const [isVisibleModalCreate, setIsVisibleModalCreate] = useState(false)

  function handleVisibleModalCreate() {
    setIsVisibleModalCreate(!isVisibleModalCreate)
  }

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex gap-2 border whitespace-nowrap border-cyan-800 bg-orange-400/10 text-orange-400 px-3 py-0.5 rounded-md text-md font-medium hover:border-orange-400 transition-colors">
          ACTIONS
          <ChevronDown aria-hidden="true" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleVisibleModalCreate}
                  className={`${active ? 'bg-orange-200 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm disabled:bg-zinc-200`}>
                  {active ? (
                    <PlusCircle
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  ) : (
                    <Plus
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  )}
                  Add a new product
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a href={`${process.env.NEXT_PUBLIC_API_ENDPOINT_PRODUCTION}/products/report`} target="__blank" className='no-underline'>
                  <button
                    className={`${active ? 'bg-orange-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <Download
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <Coffee
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Download menu
                  </button>
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>

      <CreateProductModal isVisible={true} onClose={() => console.log('Aqui serve pra fechar')} />
    </>
  )
}