import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EntitlementsModule } from '@backbase/foundation-ang/entitlements';
import { RetailLayoutModule } from '@backbase/retail/feature/layout';
import { HeaderModule } from '@backbase/ui-ang/header';
import { IconModule } from '@backbase/ui-ang/icon';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsCommunication } from '../communication/notifications-communication.service';
import { LayoutComponent } from './layout.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { ButtonModule } from '@backbase/ui-ang/button';
import { BadgeCounterModule } from '@backbase/ui-ang/badge-counter';
import { RtcClientModule } from '@backbase/real-time-communication-journey-ang';

@NgModule({
  imports: [
    ButtonModule,
    BadgeCounterModule,
    CommonModule,
    RouterModule,
    HeaderModule,
    IconModule,
    NgbDropdownModule,
    EntitlementsModule,
    RtcClientModule,
    RetailLayoutModule.forRoot(NotificationsCommunication),
  ],
  exports: [LayoutComponent],
  declarations: [LayoutComponent, NavigationMenuComponent],
})
export class LayoutModule {}
