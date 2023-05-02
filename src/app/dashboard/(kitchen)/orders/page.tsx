'use client'

import api from '@/lib/api';
import { OrderProps } from '@/types/Order';
import { useEffect, useState } from 'react';
import socketIO from 'socket.io-client';

export function Orders() {

  const [orders, setOrders] = useState<OrderProps[]>([]);

  useEffect(() => {
    const socket = socketIO('https://api.the-coffee-class.com.br/api', {
      transports: ['websocket'],
    });

    socket.on('orders@new', (order) => {
      setOrders(prevState => prevState.concat(order));
    });
  }, []);

  useEffect(() => {
    api.get('/orders').then((response) => setOrders(response.data));
  }, []);

  const production = orders.filter((order) => order.status === 'IN_PRODUCTION');
  const waiting = orders.filter((order) => order.status === 'WAITING');
  const done = orders.filter((order) => order.status === 'DONE');

  function handleCancelOrder(orderID: string) {
    setOrders((prevState) => prevState.filter((order) => order._id !== orderID));
  }

  function handleOrderStatusChange(orderID: string, status: OrderProps['status']) {
    setOrders((prevState) => prevState.map((order) => (
      order._id === orderID
        ? { ...order, status }
        : order
    )));
  }

  return (
    <div className=' w-full max-w:md m-10-auto flex gap-6'>
      {/* <OrdersBoards icon='⏱️' title='Fila de espera' orders={waiting} onCancelOrder={handleCancelOrder} onChangeOrderStatus={handleOrderStatusChange} />
      <OrdersBoards icon='🔥' title='Em produção' orders={production} onCancelOrder={handleCancelOrder} onChangeOrderStatus={handleOrderStatusChange} />
      <OrdersBoards icon='✅' title='Finalizado' orders={done} onCancelOrder={handleCancelOrder} onChangeOrderStatus={handleOrderStatusChange} /> */}
    </div>
  );
}