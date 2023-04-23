'use client'; // Error components must be Client components

import { useEffect } from 'react';

export default function Error({ error, reset, }: { error: Error; reset: () => void; }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="prose prose-invert prose-headings:text-zinc-100 prose-headings:font-semibold prose-h1:text-3xl m-auto">
      <h2>Something went wrong!</h2>
      <button className='border whitespace-nowrap border-cyan-800 bg-orange-400/10 text-orange-400 px-3 py-0.5 rounded-full text-sm font-medium hover:border-orange-400 transition-colors' onClick={() => reset()} >
        Try again
      </button>
    </main>
  );
}
