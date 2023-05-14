'use client'

import { createContext, useContext, useState } from "react"

interface Props {
  children: React.ReactNode
}

export const SidebarContext = createContext({} as any)

export default function SidebarContextProvider({ children }: Props) {
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <SidebarContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        toggleSidebar,
      }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarContext = () => useContext(SidebarContext);
