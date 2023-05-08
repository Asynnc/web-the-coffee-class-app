'use client'

import { NavLink } from "@/components/NavLink";
import { COMMON_ITEMS, NAV_ITEMS } from "@/utils/navLink";
import { useSession } from "next-auth/react";

export default function NavLinks() {
  const { data: session } = useSession()
  return (
    <nav className="mt-10 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="text-sm flex flex-col pl-2 gap-2">
          {session?.user ? (
            NAV_ITEMS.map((element) => (
              <>
                <strong className="text-zinc-100 font-medium text-sm">{element.label}</strong>
                {element.children && (
                  element.children.map((child) => (
                    <NavLink key={child.label} href={String(child.href)} label={child.label} />
                  ))
                )}
              </>
            ))) : (
            COMMON_ITEMS.map((element) => (
              <>
                <strong className="text-zinc-100 font-medium text-sm">{element.label}</strong>
                {element.children && (
                  element.children.map((child) => (
                    <NavLink key={child.label} href={String(child.href)} label={child.label} />
                  ))
                )}
              </>
            ))
          )}
        </div>
      </div>
    </nav>
  )
}