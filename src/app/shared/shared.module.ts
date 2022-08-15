import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullScreenDirective } from './directives/full-screen.directive';



@NgModule({
  declarations: [FullScreenDirective],
  imports: [
    CommonModule
  ],
  exports: [CommonModule, FullScreenDirective]
})
export class SharedModule { }
