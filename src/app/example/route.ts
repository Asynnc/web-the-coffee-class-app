import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await result.json()

  return NextResponse.json({ data })
}