import { OrderProps } from '../types/Order';

export const ordersMock: OrderProps[] = [
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '19',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: 'clba8truu00000x505ffh63n9-cerveja.png',
          price: 40,
        },
        quantity: 3,
        _id: '6372e48cbcd195b0d3d0f7f4'
      },
      {
        product: {
          name: 'Brahma - Duplo Malte',
          imagePath: 'clba8truu00000x505ffh63n9-cerveja.png',
          price: 7,
        },
        quantity: 1,
        _id: '6372e48cbcd195b0d3d0f7f5'
      }
    ],
  }
];
