import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import {IUser, toUser} from '../../interfaces/user';
import {HttpClient} from '@angular/common/http';
import {IOrder, IOrderInfo} from '../../interfaces/order';
import {IPizza, toPizza} from '../../interfaces/pizza';
import {toMsg} from '../../interfaces/msg';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private _http: HttpClient
  ) {
  }

  public getUserById(): Observable<IUser>{
    const userId = Number(localStorage.getItem('userId'))
    return this._http.post('user-by-id', {userId}).pipe(
      map((data: any) => toUser(data))
    )
  }

  public makeOrder(orderInfo: IOrderInfo) {
    const userId = Number(localStorage.getItem('userId'))
    return this._http.post('make-order', {orderInfo, userId}).pipe(
      map((data: any) => toMsg(data))
    )
  }
}
