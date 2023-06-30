
export function formatDate(date: Date, format: string) {
  const map = {
    mm: date.getMonth() + 1,
    dd: date.getDate(),
    aa: date.getFullYear().toString().slice(-2),
    aaaa: date.getFullYear()
  }

  return format.replace(/mm|dd|aa|aaaa/gi, (matched: any) => map[matched])
}
