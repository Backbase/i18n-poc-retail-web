import { Component } from '@angular/core';
import { RemoteConfigService } from '@backbase/remote-config-ang';
import { PERMISSIONS } from '../../auth/permissions';
import { RetailAppRemoteConfig } from '../../remote-config/remote-config';
import { RtcCommunicationService } from '@backbase/real-time-communication-journey-ang';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'bb-navigation-menu',
  templateUrl: './navigation-menu.component.html',
})
export class NavigationMenuComponent {
  readonly permissions = PERMISSIONS;
  readonly showManageContacts = this.remoteConfigService.getValue('show_manage_contacts');

  dashboardEnabled = environment.dashboardEnabled ?? false;

  constructor(
    private remoteConfigService: RemoteConfigService<RetailAppRemoteConfig>,
    private rtcCommunicationService: RtcCommunicationService,
  ) {}

  toggleChatWindow() {
    this.rtcCommunicationService.toggleChatWindow();
  }
}
