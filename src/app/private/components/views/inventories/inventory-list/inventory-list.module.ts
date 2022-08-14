import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InventoryListComponent } from './inventory-list.component';



@NgModule({
  declarations: [InventoryListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: InventoryListComponent}
    ])
  ]
})
export class InventoryListModule { }
