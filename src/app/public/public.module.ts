import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { AuthComponent } from './components/auth/auth.component';


@NgModule({
  declarations: [
    PublicComponent,
    AuthComponent
  ],
  imports: [
    PublicRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class PublicModule { }
