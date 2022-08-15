import { NgModule } from '@angular/core';

import { AuthGuard } from '../core/guards/auth.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { PrimaryNavbarComponent } from './components/layouts/primary-navbar/primary-navbar.component';
import { CompactComponent } from './components/layouts/primary-navbar/compact/compact.component';
import { LargeComponent } from './components/layouts/primary-navbar/large/large.component';
import { SecondaryNavbarComponent } from './components/layouts/secondary-navbar/secondary-navbar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';


@NgModule({
  declarations: [
    PrivateComponent,
    PrimaryNavbarComponent,
    CompactComponent,
    LargeComponent,
    SecondaryNavbarComponent,
    FooterComponent,
  ],
  imports: [
    PrivateRoutingModule,
    CoreModule,
    SharedModule,
    NgbModule
  ]
})
export class PrivateModule { }
