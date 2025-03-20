import {AbstractControl, AsyncValidatorFn} from '@angular/forms';
import {inject} from '@angular/core';
import {RegisterService} from '../user/register/register.service';
import {map} from 'rxjs';

export function userExistsValidator(registerService: RegisterService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return registerService.findUserByPhone(control.value).pipe(
      map((user) => (user !== null ? {userExists: true} : null))
    )
  }
}
