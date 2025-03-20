import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {IPizza, toPizza} from '../../interfaces/pizza';

@Injectable({
  providedIn: 'root'
})
export class CartCardService {

  constructor(
    private _http: HttpClient
  ) { }

  public getItemByName(pizzaName: string): Observable<IPizza> {
    return this._http.post('get-item-by-name', {pizzaName}).pipe(
      map((data: any) => toPizza(data))
    )
  }
}
