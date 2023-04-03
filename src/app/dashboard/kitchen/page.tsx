import OrdersBoard from "@/components/OrderBoard";
import PageTitle from "@/components/PageTitle";
import { OrderProps } from "@/types/Order";

export default async function Dashboard() {

  // Force Delay Render
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch('http://localhost:3001/api/orders', {
    next: {
      revalidate: 1,
    },
    cache: 'no-store'
  })

  const orders = await response.json();

  const production = orders.filter((order: OrderProps) => order.status === 'IN_PRODUCTION');
  const waiting = orders.filter((order: OrderProps) => order.status === 'WAITING');
  const done = orders.filter((order: OrderProps) => order.status === 'DONE');

  return (
    <main className="prose prose-invert prose-headings:text-zinc-100 prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-xl prose-h2:font-medium prose-p:text-zinc-300 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-a:text-cyan-400">
      <PageTitle title="Kitchen" description="Manage the status of all orders here."/>

      <div aria-label="Orders Board" className="flex items-center justify-center w-full">
      <OrdersBoard ordersWaiting={waiting} ordersProduction={production} ordersDone={done}/>
      </div>
    </main>
  )
}