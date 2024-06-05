import { Component } from '@angular/core';
import { RemoteConfigService } from '@backbase/remote-config-ang';
import { RetailAppRemoteConfig } from '@backbase/loans-retail-journey';

import { SidebarQuickActionLink } from '../../journeys/sidebar-quick-actions';
import { PERMISSIONS } from '../../auth/permissions';

@Component({
  selector: 'bb-wrapped-journey-layout',
  templateUrl: './wrapped-journey-layout.component.html',
})
export class WrappedJourneyLayoutComponent {
  readonly permissions = PERMISSIONS;

  remoteConfigParameters = {
    showMaintenanceBanner: this.remoteConfigService.getValue('show_maintenance_banner'),
    maintenanceBannerText: this.remoteConfigService.getValue('maintenance_banner_text'),
  };

  quickActionLinks: SidebarQuickActionLink[] = [
    {
      menuIcon: 'settings',
      title: $localize`:Link Title|Manage accounts@@accounts.quick-actions.span.manageAccounts:Manage Accounts`,
      url: '/my-accounts/manage',
      permission: PERMISSIONS.canViewMyAccounts,
    },
    {
      menuIcon: 'flight',
      title: $localize`:Link Title|Set travel notice@@accounts.quick-actions.span.setTravelNotice:Set Travel Notice`,
      url: '/self-service/manage-cards/travel-notice',
      permission: PERMISSIONS.canViewManageCards,
    },
    {
      menuIcon: 'description',
      title: $localize`:Link Title|Download statements@@accounts.quick-actions.span.downloadStatements:Download Statements`,
      url: '/self-service/download-statements',
      permission: PERMISSIONS.canViewAccountStatements,
    },
    {
      menuIcon: 'notifications-active',
      title: $localize`:Link Title|Manage notifications@@accounts.quick-actions.span.manageNotifications:Manage Notifications`,
      url: '/self-service/product-list/manage-notifications',
      permission: PERMISSIONS.canViewManageNotifications,
    },
    {
      menuIcon: 'room',
      title: $localize`:Link Title|Find branches and ATMS@@accounts.quick-actions.span.findBranchedAndATMS:Find Branches and ATMS`,
      url: '/more/find-us',
      permission: PERMISSIONS.canViewPlaces,
    },
  ];

  constructor(private remoteConfigService: RemoteConfigService<RetailAppRemoteConfig>) {}

  hideMaintenanceBanner() {
    this.remoteConfigParameters.showMaintenanceBanner = false;
  }
}
