'use client'

import { useState } from 'react'

import { FeedbackContentStep } from './Steps/FeedbackContentStep'
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep'
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'

import bugImageUrl from '../../../../public/bug.webp'
import ideaImageUrl from '../../../../public/idea.webp'
import thoughtImageUrl from '../../../../public/thought.webp'

export const feedbackTypes = {
  BUG: {
    title: 'Bug',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Idea',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Thought',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    }
  },
}
export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  const handleRestartFeedback = () => {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className='bg-orange-400 p-4 text-white relative rounded-md mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto max-w-sm'>
      {feedbackSent ?
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
        :
        <>
          {!feedbackType ?
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            :
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          }
        </>
      }

      <footer className='text-xs text-white'>
        Feito por <a href='https://www.linkedin.com/in/tony-silva/' target='_blank' className='underline underline-offset-2 hover:text-zinc-100'>Antonio Silva</a>
      </footer>
    </div>
  )
}