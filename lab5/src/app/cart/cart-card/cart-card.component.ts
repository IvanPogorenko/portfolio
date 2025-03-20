import {Component, Input, OnInit} from '@angular/core';
import {IIngredient, IPizza} from '../../interfaces/pizza';
import {CartService} from '../cart.service';
import {CartCardService} from './cart-card.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
    selector: 'app-cart-card',
  imports: [
    NgIf,
    NgForOf
  ],
    templateUrl: './cart-card.component.html',
    standalone: true,
    styleUrl: './cart-card.component.scss'
})
export class CartCardComponent implements OnInit{

  @Input() data!: IPizza;

  public constructor(
    private _cartService: CartService,
    private _cartCardService: CartCardService
  ) {
  }

  public additionalIngredients!: IIngredient[]

  ngOnInit() {
    this._cartCardService.getItemByName(this.data.name).subscribe((pizza) => {
      const baseIngredients = pizza.ingredients
      this.additionalIngredients = this.data.ingredients.filter(
        (ingredient) => !baseIngredients.some((base) => base.name === ingredient.name)
      )
    })
  }

  public deleteItem(){
    this._cartService.deleteItemFromCart(this.data.id, this.data.diameter)
  }

  public calcPricePerCount(): number{
    return this.data.count ? Math.round(<number>this.data.price / this.data.count) : <number>this.data.price
  }

}
