import Image from "next/image";
import LogoIMG from "../../assets/images/banners/3.svg";
import NavLinks from "./navLinks";

export function Sidebar() {

  return (
    <aside className="border-r border-white/10 w-80 fixed lest-0 top-0 bottom-0 p-6 hidden lg:block">
      <Image src={LogoIMG} alt="The Coffee Class Logo" className="-mt-4 cursor-pointer" role='presentation' />
      <NavLinks />
    </aside>
  )
}