import { Widget } from '@/components/FeedbackWidget';
import { Footer } from '@/components/Footer';
import { HeroPattern } from '@/components/HeroPattern';
import { default as Spinner } from '@/components/Spinners/Spinner';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import Provider from './Provider';
import './globals.css';
import Sidebar2 from '@/components/Sidebar';
import { Header } from '@/components/Header/Header';
import { useLocale } from 'next-intl';
import NextIntlProvider from '@/context/next-intl-client';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Coffee Class',
  icons: {
    icon: 'favicon.ico'
  },
  description: 'A pilot project to demonstrate my learnings in Next 13, TailwindCSS, AWS, UX | UI, Project Management, Documentation, Widgets, MongoDB, Deploy ... Well... the true Fullstack of things.',
  openGraph: {
    type: "website",
    url: "https://app.the-coffee-class.com.br/",
    title: "The Coffee Class",
    description: "A pilot project to demonstrate my learnings in Next 13, TailwindCSS, AWS, UX | UI, Project Management, Documentation, Widgets, MongoDB, Deploy ... Well... the true Fullstack of things.",
    siteName: "The Coffee Class",
    images: [{
      url: "https://i.imgur.com/k9pZQUN.png",
    }],
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: {
    locale: string
  }
}) {

  let messages;
  const locale = useLocale();

  if (params.locale !== locale) {
    <Spinner />
  }

  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (error) {
    <Spinner />
  }

  return (
    <html lang={locale} className={inter.className}>
      <body className='bg-zinc-900'>
        <Provider>
          <NextIntlProvider locale={params.locale} messages={messages}>
            <Suspense fallback={<Spinner />}>
              {/* <Sidebar /> */}
              <Sidebar2 />
            </Suspense>
            <div className='relative h-screen'>
              <Header />
              <HeroPattern />
              <div className='py-12 max-w-6xl px-8 mx-auto'>
                {children}
                <Footer />
              </div>
              <Suspense fallback={<Spinner />}>
                <Widget />
              </Suspense>
            </div>
          </NextIntlProvider>
        </Provider>
        <Analytics />
      </body >
    </html >
  )
}
