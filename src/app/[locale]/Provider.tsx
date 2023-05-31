'use client'

import SidebarContextProvider, { SidebarContext } from '@/context/sidebar';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

interface Props {
  children: React.ReactNode
}

export default function Provider({ children }: Props) {

  return (
    <SessionProvider>
      <SidebarContextProvider>
        {children}
      </SidebarContextProvider>
    </SessionProvider>
  )

}