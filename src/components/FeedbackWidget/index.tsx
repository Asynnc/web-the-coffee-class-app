'use client'

import { Popover } from '@headlessui/react'
import { ChatTeardropDots } from 'phosphor-react'
import { WidgetForm } from './WidgetForm'
import { HelpCircle } from 'lucide-react'

export function Widget() {
  return (
    <Popover className='fixed bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>
      <Popover.Panel><WidgetForm /></Popover.Panel>
      <Popover.Button
        title='Feedback'
        aria-label='Feedback'
        className='bg-orange-400 rounded-full px-3 h-12 text-white flex items-center group shadow-[0_0.5rem_1.5rem_#e5b85740]'>
        <HelpCircle className='w-6 h-6' />
        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
          <span className='pl-2' />
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}