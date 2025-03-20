import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPizza, toPizza} from '../interfaces/pizza';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {ICart, toCart} from '../interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private _http: HttpClient
  ) { }

  private cartSubject = new BehaviorSubject<ICart | null>(null);
  public cart$ = this.cartSubject.asObservable();

  public getUserCart(){
    const userId = Number(localStorage.getItem('userId'))
    this._http.post('get-user-cart', {userId}).pipe(
      map((cart: any) => toCart(cart))
    ).subscribe((cart) => {
      this.cartSubject.next(cart)
    })
  }

  public deleteItemFromCart(itemId: number, diameter: number[] | number){
    const userId = Number(localStorage.getItem('userId'))
    this._http.delete(`delete-item-from-cart/${userId}/${itemId}/${diameter}`).pipe(
      map((data: any) => toCart(data))
    ).subscribe((cart) => {
      this.cartSubject.next(cart)
    })
  }

  public clearCart() {
    this.cartSubject.next(null);
  }

}
