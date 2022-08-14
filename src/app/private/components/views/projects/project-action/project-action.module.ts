import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProjectActionComponent } from './project-action.component';



@NgModule({
  declarations: [ProjectActionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ProjectActionComponent}
    ])
  ]
})
export class ProjectActionModule { }
