import { Widget } from '@/components/FeedbackWidget';
import { Footer } from '@/components/Footer';
import { HeroPattern } from '@/components/HeroPattern';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { default as Spinner } from '@/components/Spinners/Spinner';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import { Header } from '../components/Header';
import Provider from './Provider';
import './globals.css';

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

export default function RootLayout({
  children
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className='bg-zinc-900'>
        <Provider>
          <Suspense fallback={<Spinner />}>
            <Sidebar />
          </Suspense>
          <div className='lg:ml-80 relative h-screen'>
            <Header />
            <HeroPattern />
            <div className='py-24 max-w-4xl px-8 mx-auto'>
              {children}
              <Footer />
            </div>
            <Suspense fallback={<Spinner />}>
              <Widget />
            </Suspense>
          </div>
        </Provider>
        <Analytics />
      </body>
    </html>
  )
}
