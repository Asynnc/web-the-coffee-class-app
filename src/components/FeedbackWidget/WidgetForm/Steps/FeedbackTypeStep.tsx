'use client'
import { CloseButton } from '../../CloseButton'

import Image from 'next/image'
import { FeedbackType, feedbackTypes } from '..'

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className='text-xl leading-6'>Leave your feedback</span>

        <CloseButton />
      </header>

      <div className='flex py-8 gap-2 w-full'>
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return <button
            key={key}
            type='button'
            title={`Feedback sobre: ${value.title}`}
            aria-labelledby={`Feedback sobre: ${value.title}`}
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            className='bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-white focus:outline-none focus:border-orange-500 transition-all duration-400 ease-linear'
          >
            <Image src={value.image.source} alt={value.image.alt} width={32} height={32} />
            <span>{value.title}</span>
          </button>
        })}
      </div>
    </>
  )
}