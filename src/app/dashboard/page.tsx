import { fetchWrapper } from "@/functions/fetch";
import { Product } from "@/types/Product";

export default async function Dashboard() {
  const data = await fetchWrapper<{ data: Product[] }>('products', {
    method: "GET",
    next: {
      revalidate: 1
    }
  });

  console.log(data);

  if (!data?.data?.length) {
    return null;
  }

  return (
    <main className="prose prose-invert prose-headings:text-zinc-100 prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-xl prose-h2:font-medium prose-p:text-zinc-400 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-a:text-cyan-400">
      <h1 id="dashboard">Dashboard</h1>

      {data.data.map((product) => (
        <div key={product._id}>

          <li>{product.name}</li>

        </div>
      ))}
    </main>
  );
}