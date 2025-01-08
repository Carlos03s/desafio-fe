import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function minimumAgeValidator(minAge: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    const inputDate = new Date(value);
    const today = new Date();
    const minDate = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());

    if (inputDate > minDate) {
      return { tooYoung: true };
    }

    return null; 
  };
}
