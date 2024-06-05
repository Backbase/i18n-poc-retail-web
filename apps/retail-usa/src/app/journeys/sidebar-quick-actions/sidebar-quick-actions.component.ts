import { Component, Input } from '@angular/core';

import { SidebarQuickActionLink } from './sidebar-quick-actions.models';

@Component({
  selector: 'bb-sidebar-quick-actions',
  templateUrl: './sidebar-quick-actions.component.html',
})
export class SidebarQuickActionsComponent {
  @Input() links: SidebarQuickActionLink[] = [];
}
