import Image from 'next/image'
import { CloseButton } from '../../CloseButton'

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void
}

export function FeedbackSuccessStep({ onFeedbackRestartRequested }: FeedbackSuccessStepProps) {
  return (
    <>
      <header><CloseButton /></header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <Image src={'/success.webp'} alt='Imagem de enviado com sucesso' width={32} height={32} quality={100} />

        <span className='text-xl mt-2'>Agradecemos o feedback!</span>

        <button
          type='button'
          title='Enviar outro feedback'
          aria-labelledby='Enviar outro feedback'
          onClick={onFeedbackRestartRequested}
          className='py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-orange-500 transition-colors duration-200 ease-in-out'
        >Quero enviar outro</button>
      </div>
    </>
  )
}