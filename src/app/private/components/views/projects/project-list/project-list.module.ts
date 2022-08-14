import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProjectListComponent } from './project-list.component';



@NgModule({
  declarations: [ProjectListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ProjectListComponent}
    ])
  ]
})
export class ProjectListModule { }
