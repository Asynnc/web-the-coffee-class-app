import OrdersBoard from "@/components/Orders/OrderBoard";
import PageTitle from "@/components/PageTitle";
import Spinner from "@/components/Spinners/Spinner";
import { ordersMock } from "@/mocks/order";
import { OrderProps } from "@/types/Order";
import { Suspense } from "react";

const getOrders = async (): Promise<OrderProps[] | any> => {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_PRODUCTION}/orders`, {
      next: {
        revalidate: 1
      }
    });
    return data.json()
  } catch (error) {
    console.log(error)
    return ordersMock
  }
}

export default async function Orders() {
  const orders = await getOrders()
  if (!orders) {
    return null
  }
  const production = orders.filter((order: OrderProps) => order.status === 'IN_PRODUCTION');
  const waiting = orders.filter((order: OrderProps) => order.status === 'WAITING');
  const done = orders.filter((order: OrderProps) => order.status === 'DONE');

  return (
    <main className="prose prose-invert prose-headings:text-zinc-100 prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-xl prose-h2:font-medium prose-p:text-zinc-400 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-a:text-cyan-400 max-w-5xl ">
      <PageTitle title="Kitchen" description="Manage the status of all orders here." />
      <div aria-label="Orders Board" className="flex items-center justify-center w-full">
        <Suspense fallback={<Spinner />}>
          <OrdersBoard ordersWaiting={waiting} ordersProduction={production} ordersDone={done} />
        </Suspense>
      </div>
    </main>
  )
}