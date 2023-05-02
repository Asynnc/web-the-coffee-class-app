'use client';
import { LucideIcon, LucideProps } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  label?: string,
  href: string,
  children?: React.ReactNode,
  icon?: JSX.Element | LucideProps | LucideIcon | string
}

export function NavLink({ label, href, children, icon }: NavLinkProps) {

  const activeHref = usePathname()

  return (
    <Link
      data-active={activeHref === href}
      className="px-4 text-xs py-1.5 border-l border-white/5 text-zinc-300 hover:text-white transition-colors data-[active=true]:border-orange-400 data-[active=true]:bg-orange-500/10"
      href={href}
      aria-label={label}>
      <div className='flex items-center'>
        {icon && (icon as JSX.Element)}
        {label || children}
      </div>
    </Link>
  )
}