
interface ButtonBannerProps {
  content: string;
  href: string;
  span?: any;
}

export default function ButtonBanner({ content, href, span }: ButtonBannerProps) {
  return (
    <a href={href} className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mr-4">{content} {span && (<span aria-hidden="true" className="ml-1"> ☕️ </span>)} </a>
  )
}