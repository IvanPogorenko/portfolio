import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CartComponent} from './cart/cart.component';
import {OrderComponent} from './cart/order/order.component';
import {ConstructorComponent} from './constructor/constructor.component';
import {CatalogComponent} from './catalog/catalog.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AppRoutes, CartRoutes, CatalogRoutes} from './router.service';
import {UserComponent} from './user/user.component';
import {ItemInfoComponent} from './catalog/item-info/item-info.component';

export const routes: Routes = [
  {
    path: AppRoutes.HOME,
    component: HomeComponent
  },
  {
    path: AppRoutes.USER,
    component: UserComponent
  },
  {
    path: AppRoutes.CART,
    component: CartComponent,
    children: [{
      path: CartRoutes.ORDER,
      component: OrderComponent
    }]
  },
  {
    path: AppRoutes.CONSTRUCTOR,
    component: ConstructorComponent
  },
  {
    path: AppRoutes.CATALOG,
    component: CatalogComponent,
    children: [{
      path: CatalogRoutes.ITEM,
      component: ItemInfoComponent
    }]
  },
  {
    path: '',
    redirectTo: `/${AppRoutes.HOME}`,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
