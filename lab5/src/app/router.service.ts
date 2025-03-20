import { Injectable } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {IPizza} from './interfaces/pizza';

export enum AppRoutes {
  HOME = 'home',
  CATALOG = 'catalog',
  CONSTRUCTOR = 'constructor',
  CART = 'cart',
  USER = 'user'
}

export enum CartRoutes {
  ORDER = 'order'
}

export enum CatalogRoutes {
  ITEM = 'item'
}

export const toApp = ['/']
export const toCart = [...toApp, AppRoutes.CART]
export const toCatalog = [...toApp, AppRoutes.CATALOG]

export const appRoutes = {
  index: toApp,
  home: [...toApp, AppRoutes.HOME],
  constructor: [...toApp, AppRoutes.CONSTRUCTOR],
  user: [...toApp, AppRoutes.USER],
  catalog: {
    index: toCatalog,
    item: [...toCatalog, CatalogRoutes.ITEM]
  },
  cart: {
    index: toCart,
    order: [...toCart, CartRoutes.ORDER]
  }
}

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(
      private _router: Router
  ) {
  }

  public toItem(itemName: string, params?: NavigationExtras): Promise<boolean>{
    return this._router.navigate(
      [...appRoutes.catalog.item],
      {
      ...params,
      queryParams: {name: itemName}
    }
    )
  }

}
