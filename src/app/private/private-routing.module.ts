import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {path: '', component: PrivateComponent, children: [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', loadChildren: () => import('./components/views/dashboard/dashboard.module').then(m => m.DashboardModule)},
    {path: 'inventories', loadChildren: () => import('./components/views/inventories/inventories.module').then(m => m.InventoriesModule)},
    {path: 'projects', loadChildren: () => import('./components/views/projects/projects.module').then(m => m.ProjectsModule)},
    {path: 'tasks', loadChildren: () => import('./components/views/tasks/tasks.module').then(m => m.TasksModule)},
    {path: 'users', loadChildren: () => import('./components/views/users/users.module').then(m => m.UsersModule)}
  ], canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
