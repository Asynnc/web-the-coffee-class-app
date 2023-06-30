import Rotule from '@/components/Banner/Rotule'
import Image from 'next/image'
import BannerImage from '../../assets/images/banners/3.svg'
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');

  const features = [
    { name: t('interface'), description: t('interface-description') },
    { name: t('real-time'), description: t('real-time-details') },
    { name: t('management'), description: t('management-details') },
    { name: t('data-analysis'), description: t('data-analysis-details') }
  ]

  return (
    <>
      <Rotule />
      <main className="prose prose-invert prose-headings:text-zinc-100 prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-xl prose-h2:font-medium prose-p:text-zinc-400 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-a:text-cyan-400 max-w-6xl ">
        <h1 id="presentation">{t('presentation')}</h1>
        <p>{t('description')}</p>
        <Image src={'/3.webp'} alt={'Banner The Coffe Class'} width={1000} height={300} quality={100} priority />
        <h2 id="project-description">{t('project-description-title')}</h2>
        <p>{t('project-description')}</p>
        <h2 id="other-notes">{t('other-notes')}</h2>
        <p>{t('other-details-1')}</p>
        <p>{t('other-details-2')}</p>
        <p>{t('other-details-3')}</p>

        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-400 sm:text-2xl">{t('technical-specifications')}</h1>
          <p className="mt-4 text-gray-500">{t('technical-description')}</p>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
    </>
  )
}