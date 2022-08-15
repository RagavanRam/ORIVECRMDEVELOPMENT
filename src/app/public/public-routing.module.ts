import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../core/guards/login.guard';
import { AuthComponent } from './components/auth/auth.component';
import { PublicComponent } from './public.component';

const routes: Routes = [{
  path: '', component: PublicComponent, children: [
    {path: '',redirectTo: '/Login', pathMatch: 'full'},
    {path: '/Login', component: AuthComponent}
  ], canActivate: [LoginGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
