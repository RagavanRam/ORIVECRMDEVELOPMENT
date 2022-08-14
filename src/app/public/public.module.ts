import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    PublicComponent
  ],
  imports: [
    PublicRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class PublicModule { }
