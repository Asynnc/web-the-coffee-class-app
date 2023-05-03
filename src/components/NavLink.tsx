'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  label?: string,
  href: string,
  children?: React.ReactNode,
  icon?: string
}

export function NavLink({ label, href, children, icon }: NavLinkProps) {

  const activeHref = usePathname()

  return (
    <Link
      data-active={activeHref === href}
      className="px-4 py-1.5 border-l border-white/5 text-zinc-300 hover:text-white transition-colors data-[active=true]:border-orange-400 data-[active=true]:bg-orange-500/10"
      href={href}
      aria-label={label}>
      <div className='flex align-middle'>
        {icon && (
          <Image
            data-active={activeHref === href}
            src={icon}
            alt='label'
          />
        )}
        {label || children}
      </div>
    </Link>
  )
}