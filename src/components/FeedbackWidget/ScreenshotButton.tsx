'use client'

import html2canvas from 'html2canvas'
import { Camera, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Loading } from './Loading'

interface ScreenshotButtonProps {
  screenshot: string | null
  onScreenshotTook: (screenshot: string | null) => void
}

export function ScreenshotButton({ screenshot, onScreenshotTook }: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  const handleTakeScreenshot = async () => {
    setIsTakingScreenshot(true)

    const canvas = await html2canvas(document.querySelector('html')!)
    const base64Image = canvas.toDataURL('image/png')
    onScreenshotTook(base64Image)
    setIsTakingScreenshot(false)
  }

  if (screenshot)
    return <button
      type='button'
      title='Remover print'
      aria-label='Remover print'
      onClick={() => onScreenshotTook(null)}
      className='p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors duration-200 ease-in-out'
      style={{ backgroundImage: `url(${screenshot})` }}
    ><Trash weight='fill' /></button>

  return (
    <button
      disabled
      type='button'
      title='Tirar print da tela.'
      aria-label='Tirar print da tela'
      onClick={handleTakeScreenshot}
      className='p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-orange-500 transition-colors duration-200 ease-in-out'
    >{isTakingScreenshot ? <Loading /> : <Camera weight='bold' className='w-6 h-6' />}</button>
  )
}