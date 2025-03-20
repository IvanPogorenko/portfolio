import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {appRoutes} from '../router.service';
import {CartCardComponent} from './cart-card/cart-card.component';
import {CartService} from './cart.service';
import {ItemCardComponent} from '../catalog/item-card/item-card.component';
import {NgForOf, NgIf} from '@angular/common';
import {ICart} from '../interfaces/cart';
import {MessageComponent} from "../message/message.component";
import {MessageService} from '../message/message.service';
import {IMsg} from '../interfaces/msg';

@Component({
  selector: 'app-cart',
    imports: [RouterOutlet, RouterLink, CartCardComponent, ItemCardComponent, NgForOf, MessageComponent, NgIf],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  standalone: true
})
export class CartComponent implements OnInit{

  public constructor(
    private _cartService: CartService,
    private _messageService: MessageService
  ) {
  }

  public cart: ICart | null = null

  public showMessage: boolean = false;
  public message: IMsg | null = null;

  public ngOnInit() {
    this._cartService.cart$.subscribe(cart => {
      this.cart = cart
    })

    this._cartService.getUserCart()

    this._messageService.showMessage$.subscribe((message) => {
      if (message) {
        this.message = message;
        this.showMessage = true;

        setTimeout(() => {
          this.showMessage = false;
          this.message = null;
          this._messageService.hide()
        }, 2000);
      }
    });
  }

  protected readonly appRoutes = appRoutes;
}
