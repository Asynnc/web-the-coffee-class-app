'use client'

import { Moon, Search } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';

export function Header() {

  const { data: session } = useSession()

  return (
    <header className="fixed top-0 left-0 lg:left-80 right-0 px-8 py-3 border-b border-white/10 backdrop-blur flex items-center justify-between">
      <button role='button' className='w-full max-w-md flex items-center gap-3 text-xs text-zinc-400 bg-white/5 border rounded-full border-white/10 px-3 h-8'>
        <Search size={14} />
        <span>Find something...</span>
      </button>

      <div className="flex items-center">
        <nav className="text-sm flex items-center gap-6">
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="">API</a>
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors" target='__blank' href="https://tonybsilvadev.gitbook.io/the-coffee-class/">Documentation</a>
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors" target='__blank' href="mailto:tonybsilvadev@gmail.com?subject=The Coffee Class - Support">Support</a>
        </nav>

        <div className="flex items-center border-l border-white/10 pl-6 ml-6 gap-6"> {session?.user ? (
          <>
            <button id="buttonTheme" title="Theme"> <Moon size={14} className='text-zinc-100 hover:text-orange-400 transition-colors' /> </button>
            <button className='border whitespace-nowrap border-cyan-800 bg-orange-400/10 text-orange-400 px-3 py-0.5 rounded-full text-sm font-medium hover:border-orange-400 transition-colors' onClick={() => signOut()}> Sign out </button>
          </>
        ) : (
          <button className='border whitespace-nowrap border-cyan-800 bg-orange-400/10 text-orange-400 px-3 py-0.5 rounded-full text-sm font-medium hover:border-orange-400 transition-colors' onClick={() => signIn()}> Sign in </button>
        )}
        </div>
      </div>
    </header>
  )
}