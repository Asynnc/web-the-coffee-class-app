import { OrderProps } from '../types/Order';

export const ordersMock: OrderProps[] = [
  {
    _id: "644458b88493bb820e429517",
    table: "1",
    status: "WAITING",
    products: [
      {
        product: {
          _id: "63f4d53e56cac3d041012f87",
          name: "Café Latte",
          "description": "Um clássico!",
          "imagePath": "cleeceisu0002pm501fz17lyq-cafe-latte.jpg",
          "price": 11,
          "ingredients": [
            {
              "name": "Espuma",
              "icon": "🫧",
              "_id": "63f4d53e56cac3d041012f88"
            },
            {
              "name": "Leite",
              "icon": "🥛",
              "_id": "63f4d53e56cac3d041012f89"
            },
            {
              "name": "Café",
              "icon": "☕️",
              "_id": "63f4d53e56cac3d041012f8a"
            }
          ],
          "category": "63f4cf4c56cac3d041012f78",
          "__v": 0
        },
        "quantity": 2,
        "_id": "644458b88493bb820e429518"
      }
    ],
    "createdAt": "2023-04-22T21:59:20.300Z",
    "__v": 0
  },
  {
    "_id": "64447cbb8493bb820e4295b0",
    "table": "10",
    "status": "WAITING",
    "products": [
      {
        "product": {
          "_id": "63f677d2cfde242cb094386d",
          "name": "Pizza Tradicional de Calabresa",
          "description": "Atemporal entre as pizzas!",
          "imagePath": "cleg479df000005505ivd38pt-xPizza_de_calabresa.jpeg.pagespeed.ic.cZQ6UmJBXO.jpeg",
          "price": 45.5,
          "ingredients": [
            {
              "name": "Queijo",
              "icon": "🧀",
              "_id": "63f677d2cfde242cb094386e"
            },
            {
              "name": "Molho de tomate",
              "icon": "🥫",
              "_id": "63f677d2cfde242cb094386f"
            },
            {
              "name": "Calabresa",
              "icon": "🥩",
              "_id": "63f677d2cfde242cb0943870"
            },
            {
              "name": "Cebola",
              "icon": "🧅",
              "_id": "63f677d2cfde242cb0943871"
            },
            {
              "name": "Tomate",
              "icon": "🍅",
              "_id": "63f677d2cfde242cb0943872"
            },
            {
              "name": "Azeite",
              "icon": "🫗",
              "_id": "63f677d2cfde242cb0943873"
            },
            {
              "name": "Orégano",
              "icon": "🍃",
              "_id": "63f677d2cfde242cb0943874"
            }
          ],
          "category": "63f4cec756cac3d041012f72",
          "__v": 0
        },
        "quantity": 2,
        "_id": "64447cbb8493bb820e4295b1"
      }
    ],
    "createdAt": "2023-04-23T00:32:59.537Z",
    "__v": 0
  }
];
