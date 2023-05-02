import Image from 'next/image';
import { useEffect } from 'react';
import closeButtonIcon from '../../assets/icons/close-icon.png';
import { OrderProps } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';

interface OrderModalProps {
  isVisible: boolean;
  order: OrderProps | null;
  onClose: () => void;
  onCancelOrder: () => Promise<void>;
  onChangeOrderStatus: () => void;
  isLoading: boolean;
}

export function OrderModal({ isVisible, order, onClose, onCancelOrder, isLoading, onChangeOrderStatus }: OrderModalProps) {

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!isVisible || !order) {
    return null;
  }

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + (product.price * quantity);
  }, 0);

  function handleCancelOrder() {
    onCancelOrder();
  }

  return (
    <div className=' w-full h-full left-0 top-0 backdrop-blur-md bg-rgba(0, 0, 0, 0.8) fixed flex items-center content-center '>
      <div className=' bg-white w-120 rounded-md p-6'>
        <header className='flex items-center content-between'>
          <strong className=' text-lg '>Mesa {order.table}</strong>
          <button className=' leading-none border-0 bg-transparent'>
            <Image src={closeButtonIcon} alt="Botão de fechar modal de pedidos" onClick={onClose} width={32} height={32} />
          </button>
        </header>

        <div className='mt-6'>
          <small className='text-sm opacity-80'> Status do pedido </small>
          <div className='flex gap-2 items-center mt-2'>
            <span>
              {order.status === 'WAITING' && '⏱️'}
              {order.status === 'IN_PRODUCTION' && '🔥'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'FILA DE ESPERA'}
              {order.status === 'IN_PRODUCTION' && 'EM PREPARAÇÃO'}
              {order.status === 'DONE' && 'PRONTO'}
            </strong>
          </div>
        </div>
        <div className='mt-6'>
          <strong className='text-base font-medium opacity-80'>Itens</strong>

          <div className="mt-4">
            {order.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <div className='item mt-16'>
                  <Image className='rounded-md' src={`https://the-coffee-class.s3.amazonaws.com/${product.imagePath}`} alt={product.name} width="100" height="28" priority />
                  <span className='text-sm text-gray-600 block w-min ml-12'> {quantity}x </span>

                  <div className="ml-1">
                    <strong className='block mb-1'>{product.name}</strong>
                    <span className='text-sm text-zinc-600'>{formatCurrency(product.price)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-24">
            <span className='text-base font-medium opacity-80'>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>


        </div>
        <footer className='flex flex-col mt-6'>
          {order.status !== 'DONE' && (
            <button type='button' className='bg-gray-800 rounded-full border-0 text-white px-6 py-3 flex items-center justify-center space-x-2' disabled={isLoading} onClick={onChangeOrderStatus}>
              <span>
                {order.status === 'WAITING' && '👨🏻‍🍳'}
                {order.status === 'IN_PRODUCTION' && '✅'}
              </span>
              <span>
                {order.status === 'WAITING' && 'INICIAR PRODUÇÃO'}
                {order.status === 'IN_PRODUCTION' && 'CONCLUIR PEDIDO'}
              </span>
            </button>
          )}

          <button
            type='button'
            className='text-red-600 px-24 py-12font-bold border-0 bg-transparent mt-12'
            onClick={handleCancelOrder}
            disabled={isLoading}>
            <span>CANCELAR PEDIDO</span>
          </button>
        </footer>
      </div>
    </div>
  );
}