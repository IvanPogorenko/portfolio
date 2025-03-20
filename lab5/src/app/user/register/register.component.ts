import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RegisterService} from './register.service';
import {IAddress, IUser} from '../../interfaces/user';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {repeatPasswordValidator} from '../../validators/password.validator';
import {NgIf} from '@angular/common';
import {UserService} from '../user.service';
import {userExistsValidator} from '../../validators/phone.validator';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  standalone: true
})
export class RegisterComponent implements OnInit{

  public constructor(
    private _registerService: RegisterService,
    private _userService: UserService,
    private _formBuilder: FormBuilder
  ) {
  }

  @Output() switchToLogin = new EventEmitter<void>()

  public form!: FormGroup<{
    name: FormControl<string>
    surname: FormControl<string>
    phone: FormControl<string>
    password: FormControl<string>
    passwordAgain: FormControl<string>
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
      street: [''],
      building: [''],
      apartment: [''],
    });

    this.form = this._formBuilder.nonNullable.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phone: ['', {
        validators: [Validators.required, Validators.pattern(/^8\d{10}$/)],
        asyncValidators: [userExistsValidator(this._registerService)],
    }],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordAgain: ['', {
        validators: [Validators.required]
      }],
      address: this.formAddress,
    },
      {
        validators: [repeatPasswordValidator()]
      });
  }

  public submitForm(){
    const address: IAddress = {
      street: this.form.value.address?.street || '',
      building: this.form.value.address?.building || '',
      apartment: this.form.value.address?.apartment|| ''
    }
    const user: IUser = {
      id: 0,
      name: this.form.value.name || '',
      surname: this.form.value.surname || '',
      phone: this.form.value.phone || '',
      password: this.form.value.password || '',
      address: address
    }
    this._registerService.postNewUser(user).subscribe((response) => {
      this._userService.setUserId(Object.values(response)[0])
    })
  }

  public onSwitchToLogin(): void {
    this.switchToLogin.emit();
  }
}
