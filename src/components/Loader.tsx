const myLoader = ({ src, width, quality }: any) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}