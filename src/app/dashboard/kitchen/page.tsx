

export default async function Dashboard() {

  const response = await fetch('http://api.github.com/users/tonybsilva-dev', {
    next: {
      revalidate: 30,
    }
  })

  const user = await response.json()

  return (
    <main className="prose prose-invert prose-headings:text-zinc-100 prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-xl prose-h2:font-medium prose-p:text-zinc-400 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-a:text-cyan-400">
      <h1 id="kitchen">Kitchen</h1>

      <pre> {JSON.stringify(user, null, 2)} </pre>
    </main>
  )
}