import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoriesRoutingModule } from './inventories-routing.module';
import { InventoriesComponent } from './inventories.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryActionComponent } from './inventory-action/inventory-action.component';


@NgModule({
  declarations: [
    InventoriesComponent,
    InventoryListComponent,
    InventoryActionComponent
  ],
  imports: [
    CommonModule,
    InventoriesRoutingModule
  ]
})
export class InventoriesModule { }
