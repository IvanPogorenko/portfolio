import {IPizza, toPizza} from './pizza';

export interface ICart{
  userId: number,
  totalPrice: number,
  items: IPizza[]
}

export function toCart(data: any): ICart{
  return{
    userId: data.userId,
    totalPrice: data.totalPrice,
    items: data.items.map((item: any) => toPizza(item))
  }
}
