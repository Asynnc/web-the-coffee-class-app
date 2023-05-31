'use client'

import { useTranslations } from 'next-intl';


export default function NotFound() {

  const t = useTranslations('NotFound');


  return (
    <main className="prose prose-invert prose-headings:text-zinc-100 prose-headings:font-semibold prose-h1:text-3xl m-auto">
      <div className="text-center pt-8">
        <h1 className="text-9xl font-bold text-purple-400">404</h1>
        <h1 className="text-6xl font-medium py-8">{t('title')}</h1>
        <p className="text-2xl pb-8 px-12 font-medium">{t('description')}</p>
        <button className='border whitespace-nowrap border-cyan-800 bg-orange-400/10 text-orange-400 px-3 py-0.5 rounded-full text-md font-medium hover:border-orange-400 transition-colors mr-4' onClick={() => window.location.href = '/'}>{t('home')}</button>
        <button disabled className='border whitespace-nowrap border-cyan-800 bg-gray-400/10 text-gray-400 px-3 py-0.5 rounded-full text-md font-medium hover:border-gray-400 transition-colors'>{t('contact')}</button>
      </div>
    </main>
  );
}