import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserActionComponent } from './user-action/user-action.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [{
  path: '', component: UsersComponent, children: [
    {path: '', redirectTo: '/list', pathMatch: 'full'},
    {path: 'list', component: UserListComponent},
    {path: 'create', component: UserActionComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
