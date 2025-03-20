import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {IOrder, toOrder} from '../../interfaces/order';
import {IPizza, toPizza} from '../../interfaces/pizza';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(
    private _http: HttpClient
  ) { }

  public getUserHistory(): Observable<IOrder[]> {
    const userId = Number(localStorage.getItem('userId'))
    return this._http.post('get-user-orders', {userId}).pipe(
      map((data: any) => data.map(toOrder))
    )
  }

  public getItemByName(pizzaName: string): Observable<IPizza> {
    return this._http.post('get-item-by-name', {pizzaName}).pipe(
      map((data: any) => toPizza(data))
    )
  }
}
