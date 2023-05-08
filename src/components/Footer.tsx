export function Footer() {
  const now = new Date

  return (
    <footer
      className="bg-zinc-50 text-center lg:text-left mt-24 bottom-0 w-full max-w-4xl">
      <div className="p-4 text-center text-gray-900">
        {/* © {now.getFullYear()}: */}
        <a
          className="text-gray-900"
          href="https://www.buymeacoffee.com/tonybsilvadev" target="__blank"> Buy me a coffee</a>
      </div>
    </footer>
  )
}