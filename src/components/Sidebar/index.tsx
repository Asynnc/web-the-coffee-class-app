'use client'

import { SidebarClose, SidebarOpen } from "lucide-react";
import { Spinner } from "phosphor-react";
import { Suspense, useEffect } from "react";
import NavLinks from "./navLinks";
import LogoIMG from '../../assets/images/banners/3.svg'
import Image from "next/image";
import { useSidebarContext } from "../../context/sidebar";

export default function Sidebar2() {
  const { showSidebar, setShowSidebar } = useSidebarContext();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setShowSidebar(false);
      }

      if ((event.key === 's' || event.key === 'S') && (event.shiftKey)) {
        setShowSidebar(true);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setShowSidebar, showSidebar]);


  const handleLinkClick = () => {
    setShowSidebar(false);
  };

  return (
    <div>
      {
        showSidebar ? (
          <button
            className="flex text-2xl text-white items-center cursor-pointer fixed left-10 top-4 z-50"
            onClick={() => setShowSidebar(!showSidebar)}> <SidebarClose stroke="orange" /> </button>
        ) : (
          <button className="fixed z-30 flex items-center cursor-pointer left-10 top-4" onClick={() => setShowSidebar(!showSidebar)}>
            <SidebarOpen stroke="orange" />
          </button>)}
      <aside
        className={`bg-zinc-900 border-r border-white/10 w-80 fixed lest-0 top-0 bottom-0 p-6 z-40 ease-in-out duration-300 ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}>
        <Image src={LogoIMG} alt="The Coffee Class Logo" className="-mt-4 cursor-pointer" role='presentation' />
        <Suspense fallback={<Spinner />}>
          <NavLinks onClick={handleLinkClick} />
        </Suspense>
      </aside>
    </div>
  )
}
