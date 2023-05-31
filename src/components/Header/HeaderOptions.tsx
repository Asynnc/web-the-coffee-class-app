'use client'

import { Menu, Transition } from '@headlessui/react'
import { Globe } from 'lucide-react'
import { Fragment } from 'react'
import Link from 'next-intl/link'

export default function HeaderOptions() {

  interface ItemsProps {
    label: string,
    locale: 'en' | 'pt-BR'
  }

  const items: Array<ItemsProps> = [
    { label: "English", locale: "en" },
    { label: "Portuguese", locale: "pt-BR" },
  ]

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="flex ml-4 text-md">
          <Globe aria-hidden="true" fill='white' stroke='orange' />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item as={'a'} >
              {items.map((item, index) => (
                <Link
                  className={`bg-orange-400 z-50 text-white group flex w-full items-center px-2 py-2 text-sm disabled:bg-zinc-200`}
                  key={index}
                  href={`/`}
                  locale={item.locale}
                  rel="noopener noreferrer">
                  {item.label}
                </Link>
              ))}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}