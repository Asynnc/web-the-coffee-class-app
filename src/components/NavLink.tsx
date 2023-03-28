import Link from 'next/link'

interface NavLinkProps {
  label: string,
  href: string
}

export function NavLink({ label, href }: NavLinkProps) {
  return (
    <Link className="px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors" href={href}>{label}</Link>
  )
}