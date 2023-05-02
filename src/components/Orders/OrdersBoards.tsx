'use client'

import api from '@/lib/api';
import { useState } from 'react';
import { OrderProps } from '../../types/Order';
import { OrderModal } from './OrderModal';

interface OrdersBoardsProps {
  icon?: string;
  title: string;
  orders: OrderProps[];
  onCancelOrder: (orderID: string) => void;
  onChangeOrderStatus: (orderID: string, orderStatus: OrderProps['status']) => void;
}

export function OrdersBoards({ icon, title, orders, onCancelOrder, onChangeOrderStatus }: OrdersBoardsProps) {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | OrderProps>();
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenOrderModal(order: OrderProps) {
    setSelectedOrder(order);
    setIsModalVisible(true);
  }

  function handleCloseOrderModal() {
    setIsLoading(true);
    setIsModalVisible(false);
    setIsLoading(false);
    setSelectedOrder(null);
  }

  async function handleCancelOrder() {
    setIsLoading(true);
    await api.delete(`/orders/${selectedOrder?._id}`);
    // toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado!`);
    setIsLoading(false);
    setIsModalVisible(false);
    onCancelOrder(selectedOrder!._id);
  }

  function handleChangeOrderStatus() {
    setIsLoading(true);
    const newStatus = selectedOrder?.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE';
    api.patch(`/orders/${selectedOrder?._id}`, { status: newStatus });
    // toast.success(`O pedido da mesa ${selectedOrder?.table} teve seu status alterado!`);
    onChangeOrderStatus(selectedOrder!._id, newStatus);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  return (
    <div className=' p-4 flex flex-col items-center flex-1 '>
      <OrderModal
        isVisible={isModalVisible}
        order={selectedOrder || null}
        onClose={handleCloseOrderModal}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
        isLoading={isLoading}
      />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>( {orders.length} )</span>
      </header>
      {
        orders.length > 0 && (
          <div className=' flex flex-col w-full mt-6 '>
            {
              orders.map((order) => (
                <button
                  className=' bg-white h-32 rounded-md w-full flex flex-col content-center items-center gap-2'
                  type='button'
                  key={order._id}
                  onClick={() => handleOpenOrderModal(order)}>
                  <strong className=' font-semibold ' >Mesa {order.table}</strong>
                  <span className=' text-sm '>{order.products.length} itens</span>
                </button>
              ))
            }
          </div>
        )
      }
    </div>
  );
}