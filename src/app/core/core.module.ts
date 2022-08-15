import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { RoleGuard } from './guards/role.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AuthGuard, LoginGuard, RoleGuard]
})
export class CoreModule { }
