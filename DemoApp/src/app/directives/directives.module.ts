import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneValidateDirective } from './phone-validate.directive';



@NgModule({
  declarations: [
    PhoneValidateDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PhoneValidateDirective
  ]
})
export class DirectivesModule { }
