'use client'

import { ArrowUp } from "lucide-react"
import PixModal from "./Modal/PixModal";
import { useState } from "react";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

export function Footer() {
  const now = new Date

  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleVisible() {
    setIsModalVisible(!isModalVisible)
  }

  function handleCloseModalPix() {
    setIsModalVisible(false);
  }

  console.log(isModalVisible)

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
              <button onClick={handleVisible} className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mr-4">
                Contribute
              </button>
            </div>
            <button type="button" className="-m-3 p-3 hover:bg-orange-200 hover:rounded-full focus-visible:outline-offset-[-4px] mr-2" onClick={scrollToTop}>
              <ArrowUp />
            </button>
          </div>
        </div>
      </footer>
      <PixModal isVisible={isModalVisible} onClose={handleCloseModalPix} />
    </>
  )
}