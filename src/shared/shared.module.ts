import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmountDirective } from './directives/amount.directive';

const sharedComponents = [
  AmountDirective
]

@NgModule({
  declarations: [
    ...sharedComponents
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...sharedComponents
  ]
})
export class SharedModule { }
