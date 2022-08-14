import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InventoriesComponent } from './inventories.component';

const routes: Routes = [
  {path: '', component: InventoriesComponent, children: [
    {path: '', redirectTo: '/lsit', pathMatch: 'full'},
    {path: 'list', loadChildren: () => import('./inventory-list/inventory-list.module').then(m => m.InventoryListModule)},
    {path: 'create', loadChildren: () => import('./inventory-action/inventory-action.module').then(m => m.InventoryActionModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoriesRoutingModule { }
