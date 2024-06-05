import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EntitlementsModule } from '@backbase/foundation-ang/entitlements';
import { IconModule } from '@backbase/ui-ang/icon';

import { SidebarQuickActionsComponent } from './sidebar-quick-actions.component';

@NgModule({
  imports: [CommonModule, RouterModule, EntitlementsModule, IconModule],
  declarations: [SidebarQuickActionsComponent],
  exports: [SidebarQuickActionsComponent],
})
export class SidebarQuickActionsModule {}
