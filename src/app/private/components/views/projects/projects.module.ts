import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectActionComponent } from './project-action/project-action.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectListComponent,
    ProjectActionComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
