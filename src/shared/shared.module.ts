import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IinDirective } from './directives/iin.directive';

const sharedComponents = [
  IinDirective
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
