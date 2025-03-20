import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {IPizza, toPizza} from '../interfaces/pizza';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  public constructor(
    private _http: HttpClient
  ) {
  }

  public getItems(): Observable<IPizza[]> {
    return this._http.get('pizzas').pipe(
      map((data: any) => data.map(toPizza))
    )
  }

}
