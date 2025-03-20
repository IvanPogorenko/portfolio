import {IAddress, toAddress} from './user';
import {IPizza, toPizza} from './pizza';

export interface IOrder{
  userId: number,
  totalPrice: number,
  items: IPizza[],
  info: IOrderInfo
}

export interface IOrderInfo{
  userName: string,
  userPhone: string,
  address: IAddress,
  comment?: string
}

export function toOrder(data: any): IOrder {
  return {
    userId: data.userId,
    info: toOrderInfo(data.info),
    totalPrice: data.totalPrice,
    items: data.items.map((item: any) => toPizza(item)),
  }
}


export function toOrderInfo(data: any): IOrderInfo {
  return {
    userName: data.userPhone,
    userPhone: data.userPhone,
    comment: data.comment,
    address: toAddress(data.address)
  }
}
