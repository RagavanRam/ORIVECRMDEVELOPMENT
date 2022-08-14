import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {path: '', component: ProjectsComponent, children: [
    {path: '', redirectTo: '/list', pathMatch: 'full'},
    {path: 'list', loadChildren: () => import('./project-list/project-list.module').then(m => m.ProjectListModule)},
    {path: 'create', loadChildren: () => import('./project-action/project-action.module').then(m => m.ProjectActionModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
