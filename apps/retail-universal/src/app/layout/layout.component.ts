import { Component, ElementRef, ViewChild } from '@angular/core';
import { ConditionsService } from '@backbase/foundation-ang/entitlements';
import { from, Observable, startWith } from 'rxjs';
import { PERMISSIONS } from '../auth/permissions';

@Component({
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  readonly permissions = PERMISSIONS;
  readonly chatPanel = import('@backbase/retail/feature/rtc').then((c) => c.ChatPanelContainerComponent);

  @ViewChild('mainContent', { read: ElementRef }) mainContent: ElementRef | undefined;

  displayNotificationSettingsButton$: Observable<boolean> = from(
    this.conditionService.resolveEntitlements(this.permissions.canViewManageNotifications),
  ).pipe(startWith(false));
  focusMainContent: boolean;

  constructor(private conditionService: ConditionsService) {}

  onActivate() {
    this.mainContent?.nativeElement?.focus();
  }
}
