export function Footer() {
  const now = new Date

  return (
    <footer
      className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left mt-24 bottom-0 w-full max-w-4xl">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        © {now.getFullYear()}:
        <a
          className="text-neutral-800 dark:text-neutral-400"
          href="https://www.linkedin.com/in/tony-silva/"> Antonio Silva</a>
      </div>
    </footer>
  )
}