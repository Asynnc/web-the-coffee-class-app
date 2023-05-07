'use client'

export default async function Test() {

  const result = await fetch('https://api.github.com/users/Tonybsilva-dev/repos',
    {
      cache: 'force-cache',
      next: {
        revalidate: 5
      }
    }
  )
    .then(response => response.json())

  return (
    <div>
      {JSON.stringify(result, null, 2)}
    </div>
  )

}