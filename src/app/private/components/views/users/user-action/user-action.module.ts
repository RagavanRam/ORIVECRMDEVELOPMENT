import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserActionComponent } from './user-action.component';



@NgModule({
  declarations: [UserActionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: UserActionComponent}
    ])
  ]
})
export class UserActionModule { }
