'use client'

import axios from 'axios'
import Image from 'next/image'
import { ArrowLeft } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { FeedbackType, feedbackTypes } from '..'
import { CloseButton } from '../../CloseButton'
import { Loading } from '../../Loading'
import { ScreenshotButton } from '../../ScreenshotButton'


interface FeedbackContentStepProps {
  feedbackType: FeedbackType
  onFeedbackRestartRequested: () => void
  onFeedbackSent: () => void
}

export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequested, onFeedbackSent }: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType]

  const [isSendingFeedback, setIsSendingFeedback] = useState(false)
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')

  const handleSubmitFeedback = async (e: FormEvent) => {
    setIsSendingFeedback(true)
    e.preventDefault()

    await axios.post('http://213.136.81.169:3001/api/feedbacks', {
      type: feedbackType,
      comment,
      screenshot
    })

    setIsSendingFeedback(false)
    onFeedbackSent()
  }

  return (
    <>
      <header>
        <button
          type='button'
          title='Voltar'
          aria-label='Voltar'
          onClick={onFeedbackRestartRequested}
          className='top-5 left-5 absolute text-zinc-400 hover:text-zinc-100'
        ><ArrowLeft weight='bold' className='w-4 h-4' /></button>

        <span className='text-xl leading-6 flex items-center gap-2'>
          <Image src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className='w-6 h-6' />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className='my-4 w-full'>
        <textarea
          onChange={e => setComment(e.target.value)}
          placeholder='Tell us in detail whats going on...'
          className='md:min-w-[304px] w-full min-h-[112px] p-4 text-sm placeholder-zinc-400 text-zinc-100 border-black bg-transparent rounded-md focus:border-white focus:ring-white focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'
        />

        <footer className='flex gap-2 mt-2'>
          <ScreenshotButton screenshot={screenshot} onScreenshotTook={setScreenshot} />

          <button
            type='submit'
            title='Send feedback'
            aria-labelledby='Send feedback'
            disabled={comment.length === 0 || isSendingFeedback}
            className='p-2 bg-zinc-800 rounded-md border-transparent text-white flex flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors duration-200 ease-in-out disabled:opacity-50 disabled:hover:bg-zinc-500'
          >{isSendingFeedback ? <Loading /> : 'Send feedback'}</button>
        </footer>
      </form>
    </>
  )
}