import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InventoriesComponent } from './inventories.component';
import { InventoryActionComponent } from './inventory-action/inventory-action.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';

const routes: Routes = [
  {path: '', component: InventoriesComponent, children: [
    {path: '', redirectTo: '/lsit', pathMatch: 'full'},
    {path: 'list', component: InventoryListComponent},
    {path: 'create', component: InventoryActionComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoriesRoutingModule { }
