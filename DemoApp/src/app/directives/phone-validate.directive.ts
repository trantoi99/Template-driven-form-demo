import { forwardRef } from '@angular/core';
import { Directive, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[phoneValidate]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PhoneValidateDirective),
      multi: true,
    },
  ],
})
export class PhoneValidateDirective implements OnInit, Validator {
  PHONE_NUMBER_REGEX = '^([+84|84|0])+([0-9]{9,255})$';
  constructor() {}

  ngOnInit(): void {}

  validate(control: FormControl): ValidationErrors | null {
    const value = control.value;
    if (value && !value.match(this.PHONE_NUMBER_REGEX)) {
      return { wrongPhone: true , exampleFormat:'0979123456'};
    }
    return null;
  }
}
