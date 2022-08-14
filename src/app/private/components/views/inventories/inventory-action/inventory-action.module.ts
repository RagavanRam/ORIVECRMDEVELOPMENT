import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InventoryActionComponent } from './inventory-action.component';



@NgModule({
  declarations: [InventoryActionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: InventoryActionComponent}
    ])
  ]
})
export class InventoryActionModule { }
