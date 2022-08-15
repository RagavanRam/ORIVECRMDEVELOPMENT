import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { ProjectActionComponent } from './project-action/project-action.component';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  {path: '', component: ProjectsComponent, children: [
    {path: '', redirectTo: '/list', pathMatch: 'full'},
    {path: 'list', component: ProjectListComponent},
    {path: 'create', component: ProjectActionComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
