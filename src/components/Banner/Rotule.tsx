'use client'

export default function Rotule() {
  return (
    <div className="relative isolate flex items-center gap-x-6 mb-4 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
      </div>
      <div className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold">The Coffee Class App</strong> <strong> · </strong> You are using/viewing a pilot of a technology suite study.
        </p>
        <a href="https://www.linkedin.com/in/tony-silva/" className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Follow me <span aria-hidden="true">&rarr;</span></a>
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px] mr-6">
          <span className="sr-only">Coffee</span>
          ☕
        </button>
      </div>
    </div>
  )
}