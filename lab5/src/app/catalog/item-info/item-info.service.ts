import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {IIngredient, IPizza, toIngredient, toPizza} from '../../interfaces/pizza';
import {toMsg} from '../../interfaces/msg';

@Injectable({
  providedIn: 'root'
})
export class ItemInfoService {

  constructor(
    private _http: HttpClient
  ) { }

  public getItemByName(pizzaName: string): Observable<IPizza> {
    return this._http.post('get-item-by-name', {pizzaName}).pipe(
      map((data: any) => toPizza(data))
    )
  }

  public getIngredients(): Observable<IIngredient[]> {
    return this._http.get('ingredients').pipe(
      map((data: any) => data.map(toIngredient))
    )
  }

  public addItemToCart(pizza: IPizza) {
    const user = Number(localStorage.getItem('userId'))
    return this._http.post('post-item-to-cart', {pizza, user}).pipe(
      map((data: any) => toMsg(data))
    )
  }
}
