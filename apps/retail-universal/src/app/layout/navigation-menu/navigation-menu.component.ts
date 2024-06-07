import { Component } from '@angular/core';
import { RemoteConfigService } from '@backbase/remote-config-ang';
import { PERMISSIONS } from '../../auth/permissions';
import { RetailAppRemoteConfig } from '../../remote-config/remote-config';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'bb-navigation-menu',
  templateUrl: './navigation-menu.component.html',
})
export class NavigationMenuComponent {
  readonly permissions = PERMISSIONS;
  readonly showManageContacts = this.remoteConfigService.getValue('show_manage_contacts');
  readonly chatPanelLink = import('@backbase/retail/feature/rtc').then((c) => c.ChatPanelNavMenuItemComponent);

  dashboardEnabled = environment.dashboardEnabled ?? false;

  constructor(private remoteConfigService: RemoteConfigService<RetailAppRemoteConfig>) {}
}
