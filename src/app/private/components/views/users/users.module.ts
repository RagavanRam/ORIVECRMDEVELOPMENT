import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserActionComponent } from './user-action/user-action.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    UserActionComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
