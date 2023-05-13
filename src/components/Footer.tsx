'use client'

import { ArrowUp } from "lucide-react"
import ButtonBanner from "./Button/BannerButton";


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

export function Footer() {
  const now = new Date

  return (
    <footer
      className="bg-zinc-50 text-center lg:text-left mt-24 bottom-0 w-full max-w-4xl">
      <div className="p-4 text-center text-gray-900 flex justify-center content-around">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold">The Coffee Class App</strong> <strong> · </strong> © {now.getFullYear()}
        </p>
        <div className="flex flex-1 justify-end">
          <ButtonBanner href="https://www.buymeacoffee.com/tonybsilvadev" content="Buy me a coffee" span={" ☕️ "} />
          <button type="button" className="-m-3 p-3 hover:bg-orange-200 hover:rounded-full focus-visible:outline-offset-[-4px] mr-2" onClick={scrollToTop}>
            <ArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}