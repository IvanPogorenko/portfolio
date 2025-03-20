import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginService} from './login.service';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ILogin} from '../../interfaces/login';
import {NgIf} from '@angular/common';
import {UserService} from '../user.service';
import {loginDataValidator} from '../../validators/login-form.validator';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true
})
export class LoginComponent implements OnInit{

  public constructor(
    private _loginService: LoginService,
    private _userService: UserService,
    private _formBuilder: FormBuilder
  ) {
  }

  @Output() switchToRegister = new EventEmitter<void>()

  public form!: FormGroup<{
    phone: FormControl<string>
    password: FormControl<string>
  }>

  ngOnInit() {
    this.form = this._formBuilder.nonNullable.group({
      phone: ['', [Validators.required, Validators.pattern(/^8\d{10}$/)]],
      password: ['', {
        validators: [Validators.required, Validators.minLength(6)],
      }]
    },{
      asyncValidators: [loginDataValidator(this._loginService)]
    })
  }

  public submitForm(){
    const loginUser: ILogin = {
      phone: this.form.value.phone || '',
      password: this.form.value.password || ''
    }
    this._loginService.loginUser(loginUser).subscribe((response) => {
      this._userService.setUserId(response.id.toString())
    })
  }

  public onSwitchToRegister(): void {
    this.switchToRegister.emit();
  }

}
