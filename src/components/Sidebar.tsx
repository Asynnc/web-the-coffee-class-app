import Image from "next/image";
import Link from "next/link";
import LogoIMG from "../assets/images/banners/3.svg";
import { NavLink } from "./NavLink";

export function Sidebar() {
  return (
    <aside className="border-r border-white/10 w-80 fixed lest-0 top-0 bottom-0 p-6 hidden lg:block">
      <Link href="/">
        <Image src={LogoIMG} alt="The Coffee Class Sidebar Banner" style={{ marginTop: -16 }} />
      </Link>
      <nav className="mt-10 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <strong className="text-zinc-100 font-medium text-sm">Guides</strong>

          <div className="text-sm flex flex-col pl-2">
            <NavLink href="/dashboard/1" label="Introduction" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <strong className="text-zinc-100 font-medium text-sm">Resources</strong>

          <div className="text-sm flex flex-col pl-2">
            <NavLink href="/dashboard/2" label="Something" />
          </div>
        </div>
      </nav>
    </aside>
  )
}