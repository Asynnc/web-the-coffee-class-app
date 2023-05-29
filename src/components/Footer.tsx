'use client'

import { ArrowUp } from "lucide-react"

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

export function Footer() {
  const now = new Date

  return (
    <>
      <footer
        className="bg-zinc-50 text-center lg:text-left mt-24 bottom-0 w-full max-w-5xl">
        <div className="p-4 text-center text-gray-900 flex justify-center content-around">
          <p className="text-sm leading-6 text-gray-900">
            <strong className="font-semibold">The Coffee Class App</strong> <strong> · </strong> © {now.getFullYear()}
          </p>

          <div className="flex flex-1 justify-end">
            <div>
              <a
                target="__blank"
                rel="noopener noreferrer"
                className="flex-none rounded-md bg-gray-800 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mr-4"
                href="https://stats.uptimerobot.com/No5gmhZgx7">
                STATUS
              </a>
            </div>
            <button type="button" className="-m-3 p-3 hover:bg-orange-200 hover:rounded-full focus-visible:outline-offset-[-4px] mr-2" onClick={scrollToTop}>
              <ArrowUp />
            </button>
          </div>
        </div>
      </footer>
    </>
  )
}