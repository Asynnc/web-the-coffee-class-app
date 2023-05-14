'use client'

import { Loader } from 'lucide-react'

export function Loading() {
  return (
    <div className='w-6 h-6 flex items-center justify-center overflow-hidden'>
      <Loader className='w-4 h-4 animate-spin' />
    </div>
  )
}