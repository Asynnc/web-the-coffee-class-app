'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ToolTip } from '../Tooltip';

interface NavLinkProps {
  label?: string,
  href: string,
  description?: string | undefined | null;
  onClick?: () => void,
}

export function NavLink({ label, href, description, onClick }: NavLinkProps) {

  const activeHref = usePathname();

  return (
    <Link
      data-active={activeHref === href}
      className="px-4 py-1.5 border-l border-white/5 text-zinc-300 hover:text-white transition-colors data-[active=true]:border-orange-400 data-[active=true]:bg-orange-500/10"
      href={href}
      aria-label={label}
      onClick={onClick}
      rel="noopener noreferrer">
      <ToolTip tooltip={description}>
        <div className='flex align-middle'>
          {label}
        </div>
      </ToolTip>
    </Link>
  )
}