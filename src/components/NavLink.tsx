'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  label?: string,
  href: string,
  children?: React.ReactNode
}

export function NavLink({ label, href, children }: NavLinkProps) {

  const activeHref = usePathname()

  return (
    <Link
      data-active={activeHref === href}
      className="px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors data-[active=true]:border-orange-400" 
      href={href}>
        {label || children}
        </Link>
  )
}