import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users.component';

const routes: Routes = [{
  path: '', component: UsersComponent, children: [
    {path: '', redirectTo: '/list', pathMatch: 'full'},
    {path: 'list', loadChildren: () => import('./user-list/user-list.module').then(m => m.UserListModule)},
    {path: 'create', loadChildren: () => import('./user-action/user-action.module').then(m => m.UserActionModule)}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
