import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {OrderService} from './order.service';
import {Location, NgIf} from '@angular/common';
import {IAddress} from '../../interfaces/user';
import {IPizza} from '../../interfaces/pizza';
import {IOrder, IOrderInfo} from '../../interfaces/order';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../cart.service';
import {IMsg} from '../../interfaces/msg';
import {MessageService} from '../../message/message.service';

@Component({
  selector: 'app-order',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
  standalone: true
})
export class OrderComponent implements OnInit{

  public constructor(
    private _orderService: OrderService,
    private _cartService: CartService,
    private _formBuilder: FormBuilder,
    private _location: Location,
    private _messageService: MessageService
  ) {
  }

  public items!: IPizza[]

  public form!: FormGroup<{
    name: FormControl<string>
    phone: FormControl<string>
    comment: FormControl<string>,
    address: FormGroup<{
      street: FormControl<string>
      building: FormControl<string>
      apartment: FormControl<string>
    }>
  }>

  public formAddress!: FormGroup<{
    street: FormControl<string>
    building: FormControl<string>
    apartment: FormControl<string>
  }>

  public ngOnInit() {
    this.formAddress = this._formBuilder.nonNullable.group({
      street: [``, Validators.required],
      building: [``, Validators.required],
      apartment: [``, Validators.required],
    });

    this.form = this._formBuilder.nonNullable.group({
      name: [``, Validators.required],
      phone: [``, {
        validators: [Validators.required, Validators.pattern(/^8\d{10}$/)],
      }],
      comment: [''],
      address: this.formAddress,
    });

    this._orderService.getUserById().subscribe((user) => {
      this.form.controls.name.setValue(user.name)
      this.form.controls.phone.setValue(user.phone)
      this.formAddress.controls.street.setValue(user.address.street)
      this.formAddress.controls.building.setValue(user.address.building)
      this.formAddress.controls.apartment.setValue(user.address.apartment)
    })

  }

  public isAddressInvalid(): boolean {
    return (
      this.formAddress.controls.street.invalid && this.formAddress.controls.street.dirty ||
      this.formAddress.controls.building.invalid && this.formAddress.controls.building.dirty ||
      this.formAddress.controls.apartment.invalid && this.formAddress.controls.apartment.dirty
    );
  }

  public onCloseForm(){
    this._location.back()
  }

  public submitForm(){
    const address: IAddress = {
      street: this.formAddress.controls.street.value,
      building: this.formAddress.controls.building.value,
      apartment: this.formAddress.controls.apartment.value,
    }
    const orderInfo: IOrderInfo = {
      userName: this.form.controls.name.value,
      userPhone: this.form.controls.phone.value,
      address: address,
      comment: this.form.controls.comment?.value,
    }

    this._orderService.makeOrder(orderInfo).subscribe((msg) => {
      this._cartService.clearCart()
      this.onCloseForm()
      this._messageService.show(msg)
    })
  }

}
