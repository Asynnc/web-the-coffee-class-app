'use client'

import { Moon } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';

export function Header() {
  const { data: session } = useSession();

  return (
    <header className="w-screen px-8 py-3 border-b border-white/10 backdrop-blur flex items-center justify-end">
      <div className="grid grid-flow-col gap-x-2">
        <nav className="text-sm flex items-end gap-6">
          {/* <a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="">API</a> */}
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors" target="__blank" href="https://tonybsilvadev.gitbook.io/the-coffee-class/">Documentation</a>
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors" target="__blank" href="mailto:thecoffeeclassdev@gmail.com?subject=The Coffee Class - Support">Support</a>
        </nav>

        <div className="flex items-center border-l border-white/10 pl-6 ml-6 gap-6">
          {session?.user ? (
            <>
              <button id="buttonTheme" title="Theme">
                <Moon size={14} className="text-zinc-100 hover:text-orange-400 transition-colors" />
              </button>
              <button className="border whitespace-nowrap border-cyan-800 bg-orange-400/10 text-orange-400 px-3 py-0.5 rounded-full text-sm font-medium hover:border-orange-400 transition-colors" onClick={() => signOut()}>Sign out</button>
            </>
          ) : (
            <button className="border whitespace-nowrap border-cyan-800 bg-orange-400/10 text-orange-400 px-3 py-0.5 rounded-full text-sm font-medium hover:border-orange-400 transition-colors" onClick={() => signIn()}>Sign in</button>
          )}
        </div>
      </div>
    </header>
  )
}
