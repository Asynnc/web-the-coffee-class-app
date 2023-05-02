'use client'

import { NAV_ITEMS } from "@/utils/navLinks";
import { useSession } from "next-auth/react";
import Image from "next/image";
import LogoIMG from "../assets/images/banners/3.svg";
import { NavLink } from "./NavLink";

export function Sidebar() {

  const { data: session } = useSession()

  return (
    <aside className="border-r border-white/10 w-80 fixed lest-0 top-0 bottom-0 p-6 hidden lg:block">
      <Image src={LogoIMG} alt="The Coffee Class Logo" className="-mt-3 cursor-pointer" role='presentation' onClick={() => window.location.href = '/'} />
      <nav className="mt-12 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="text-xs flex flex-col pl-2 gap-2">
            {session?.user ? (
              NAV_ITEMS.map((element, index) => (
                <>
                  <strong className="text-zinc-100 font-medium text-sm">{element.label}</strong>
                  {element.children && (
                    element.children.map((child) => (
                      <NavLink key={child.label} href={String(child.href)} label={child.label} icon={child.icon} />
                    ))
                  )}
                </>
              ))) : (null)}
          </div>
        </div>
      </nav>
    </aside>
  )
}