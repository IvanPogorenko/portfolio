import {Component, Input, OnInit} from '@angular/core';
import {IOrder} from '../../interfaces/order';
import {NgForOf, NgIf} from '@angular/common';
import {HistoryService} from './history.service';
import {IIngredient, IPizza} from '../../interfaces/pizza';

@Component({
  selector: 'app-history-card',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './history-card.component.html',
  styleUrl: './history-card.component.scss',
  standalone: true
})
export class HistoryCardComponent implements OnInit{

  public constructor(
    private _historyService: HistoryService
  ) {
  }

  @Input() order!: IOrder
  public additionalIngredients !: IIngredient[]

  public isExpanded: boolean = false

  public ngOnInit() {
    const items = this.order.items
    items.forEach(item => {
      this._historyService.getItemByName(item.name).subscribe(pizza => {
        this.additionalIngredients = item.ingredients.filter(ingredient =>
          !pizza.ingredients.some(pizzaIngredient => pizzaIngredient.name === ingredient.name)
        );
      })
    })
  }

  public toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }

}
