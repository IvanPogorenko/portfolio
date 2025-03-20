import {Component, OnInit} from '@angular/core';
import {IIngredient, IPizza} from '../../interfaces/pizza';
import {ItemInfoService} from './item-info.service';
import {ActivatedRoute} from '@angular/router';
import {Location, NgForOf} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MessageService} from '../../message/message.service';

@Component({
  selector: 'app-item-info',
  imports: [
    NgForOf,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './item-info.component.html',
  styleUrl: './item-info.component.scss',
  standalone: true
})
export class ItemInfoComponent implements OnInit{

  public constructor(
    private _itemInfoService: ItemInfoService,
    private _route: ActivatedRoute,
    private _location: Location,
    private _messageService: MessageService
  ) {
  }

  public pizza!: IPizza
  public ingredients!: IIngredient[]

  public pizzaName!: string | null
  public pizzaPrices!: number[]
  public pizzaDiameters!: number[]

  public selectedSize!: number
  public pizzaPrice!: number

  public count = 1
  public additionalPrice = 0

  public ngOnInit() {
    this._route.queryParamMap.subscribe((params) =>{
      this.pizzaName = params.get('name')
    })
    this._itemInfoService.getIngredients().subscribe((ingredients) => {
      this.ingredients = ingredients
    })
    if(this.pizzaName){
      this._itemInfoService.getItemByName(this.pizzaName).subscribe((pizza) => {
        this.pizza = pizza
        this.pizzaPrices = Array.isArray(this.pizza.price) ? this.pizza.price : [this.pizza.price]
        this.pizzaDiameters = Array.isArray(this.pizza.diameter) ? this.pizza.diameter : [this.pizza.diameter]
        this.selectedSize = this.pizzaDiameters[0]
        this.pizzaPrice = this.pizzaPrices[0]
      })
    }
  }

  public onPizzaPriceChange(){
    const index = this.pizzaDiameters.indexOf(Number(this.selectedSize))
    this.pizzaPrice = this.pizzaPrices[index] * this.count + this.additionalPrice
  }

  public onChangeCount(action: string){
    if (action === 'minus' && this.count !== 1){
      this.count--
    } else if (action === 'plus') {
      this.count++
    }
    this.onPizzaPriceChange()
  }

  public isIngredientChecked(ingredient: IIngredient): boolean{
    if (!this.pizza || !this.ingredients){
      return false
    } else {
      return this.pizza.ingredients.some((pizzaIngredient) => pizzaIngredient.name === ingredient.name)
    }
  }

  public onIngredientChange(ingredient: IIngredient){
    if (!this.pizza || !this.ingredients){
      return
    }
    const isChecked = this.isIngredientChecked(ingredient)
    if (isChecked){
      this.pizza.ingredients = this.pizza.ingredients.filter((pizzaIngredient) => pizzaIngredient.name !== ingredient.name)
      this.additionalPrice -= ingredient.price
    } else {
      this.pizza.ingredients.push(ingredient)
      this.additionalPrice += ingredient.price
    }
    this.onPizzaPriceChange()
  }

  public onCloseForm(){
    this._location.back()
  }

  public submitForm(){
    this.pizza = {
      ...this.pizza,
      price: this.pizzaPrice,
      count: this.count,
      diameter: Number(this.selectedSize)
    }
    this._itemInfoService.addItemToCart(this.pizza).subscribe((msg) =>{
      this._location.back()
      this._messageService.show(msg);
    })
  }
}
