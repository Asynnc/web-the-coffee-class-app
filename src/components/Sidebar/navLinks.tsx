'use client'

import { NavLink } from "@/components/NavLink";
import { COMMON_ITEMS, NAV_ITEMS } from "@/utils/navLink";
import { Search } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function NavLinks() {
  const { data: session } = useSession()
  return (
    <nav className="mt-10 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="text-sm flex flex-col pl-2 gap-2">
          {session?.user ? (
            NAV_ITEMS.map((element) => (
              <>
                <strong className="text-zinc-100 font-medium text-sm" key={element.label}>{element.label}</strong>
                {element.children && (
                  element.children.map((child) => (
                    <NavLink key={child.href} href={String(child.href)} label={child.label} />
                  ))
                )}
              </>
            ))) : (
            <>
              <button role='button' disabled className='w-full mb-2 max-w-md flex items-center gap-3 text-xs text-zinc-400 bg-white/5 border rounded-full border-white/10 px-3 h-8'>
                <Search size={14} />
                <span>Find something...</span>
              </button>
              {COMMON_ITEMS.map((element) => (
                <>
                  <strong className="text-zinc-100 font-medium text-sm" key={element.label}>{element.label}</strong>
                  {element.children && (
                    element.children.map((child) => (
                      <NavLink key={child.href} href={String(child.href)} label={child.label} description={child.subLabel} />
                    ))
                  )}
                </>
              ))}
            </>)}
        </div>
      </div>
    </nav>
  )
}