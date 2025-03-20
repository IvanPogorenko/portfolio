import {AbstractControl, AsyncValidatorFn} from '@angular/forms';
import {map} from 'rxjs';
import {LoginService} from '../user/login/login.service';

export function loginDataValidator(loginService: LoginService): AsyncValidatorFn {
  return (form: AbstractControl) => {
    const phone = form.get('phone')?.value.toString()
    const password = form.get('password')?.value.toString()
    return loginService.checkLoginData(phone, password).pipe(
      map((user) => (user === null ? {incorrectData: true} : null))
    )
  }
}
