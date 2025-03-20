import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function repeatPasswordValidator(): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const password = formGroup.get('password')?.value
    const passwordAgain = formGroup.get('passwordAgain')?.value

    if(!password || !passwordAgain){
      return null
    }

    return password === passwordAgain ? null : {
      anotherPassword: true
    }
  }
}
