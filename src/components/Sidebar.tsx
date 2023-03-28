import { NavLink } from "./NavLink";
import { Logo } from "./icons/logo";

export function Sidebar() {
  return (
    <aside className="border-r border-white/10 w-80 fixed lest-0 top-0 bottom-0 p-6">
      <Logo className="text-white h-4 w-auto" />

      <nav className="mt-10 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <strong className="text-zinc-100 font-medium text-sm">Guides</strong>

          <div className="text-sm flex flex-col pl-2">
            <NavLink href="#" label="Introduction" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <strong className="text-zinc-100 font-medium text-sm">Resources</strong>

          <div className="text-sm flex flex-col pl-2">
            <a className="px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors" href="">Something</a>
          </div>
        </div>
      </nav>
    </aside>
  )
}