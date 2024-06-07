import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EntitlementsModule } from '@backbase/foundation-ang/entitlements';
import {
  QuickTransferJourneyCommunicationService,
  QuickTransferJourneyModule,
  QUICK_TRANSFER_JOURNEY_ARRANGEMENT_MANAGER_BASE_PATH,
  QUICK_TRANSFER_JOURNEY_CONTACT_MANAGER_BASE_PATH,
  QUICK_TRANSFER_JOURNEY_PAYMENT_ORDER_A2A_BASE_PATH,
  QUICK_TRANSFER_JOURNEY_PAYMENT_ORDER_BASE_PATH,
  QuickTransferJourneyConfigurationToken,
  configDefaults as QUICK_TRANSFER_JOURNEY_CONFIG_DEFAULT,
  QuickTransferProductKinds,
} from '@backbase/quick-transfer-journey-ang';
import { AccountsStateCommunicationService } from '@backbase/retail/feature/communication';
import { AlertModule } from '@backbase/ui-ang/alert';

import {
  APP_ARRANGEMENT_MANAGER_BASE_PATH,
  APP_CONTACT_MANAGER_BASE_PATH,
  APP_PAYMENT_ORDER_A2A_BASE_PATH,
  APP_PAYMENT_ORDER_BASE_PATH,
} from '../service-paths.module';
import { WrappedJourneyLayoutComponent } from './wrapped-journey-layout/wrapped-journey-layout.component';
import { SidebarQuickActionsModule } from '../journeys/sidebar-quick-actions';
import { CampaignSpaceJourneyBundleModule } from '../journeys/campaign';

const quickTransferConfig = QUICK_TRANSFER_JOURNEY_CONFIG_DEFAULT;

function excludeUnsupportedProducts(productKinds: QuickTransferProductKinds[]): QuickTransferProductKinds[] {
  return productKinds.filter((kind) => kind !== QuickTransferProductKinds.connectedAccounts);
}

if (quickTransferConfig?.fields.fromAccount.productKinds) {
  quickTransferConfig.fields.fromAccount.productKinds = excludeUnsupportedProducts(
    quickTransferConfig.fields.fromAccount.productKinds,
  );
}

if (quickTransferConfig?.fields.toAccount.productKinds) {
  quickTransferConfig.fields.toAccount.productKinds = excludeUnsupportedProducts(
    quickTransferConfig.fields.toAccount.productKinds,
  );
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AlertModule,
    QuickTransferJourneyModule,
    CommonModule,
    CampaignSpaceJourneyBundleModule,
    EntitlementsModule,
    SidebarQuickActionsModule,
  ],
  declarations: [WrappedJourneyLayoutComponent],
  exports: [WrappedJourneyLayoutComponent],
  providers: [
    {
      provide: QuickTransferJourneyCommunicationService,
      useExisting: AccountsStateCommunicationService,
    },
    {
      provide: QUICK_TRANSFER_JOURNEY_ARRANGEMENT_MANAGER_BASE_PATH,
      useExisting: APP_ARRANGEMENT_MANAGER_BASE_PATH,
    },
    {
      provide: QUICK_TRANSFER_JOURNEY_CONTACT_MANAGER_BASE_PATH,
      useExisting: APP_CONTACT_MANAGER_BASE_PATH,
    },
    {
      provide: QUICK_TRANSFER_JOURNEY_PAYMENT_ORDER_A2A_BASE_PATH,
      useExisting: APP_PAYMENT_ORDER_A2A_BASE_PATH,
    },
    {
      provide: QUICK_TRANSFER_JOURNEY_PAYMENT_ORDER_BASE_PATH,
      useExisting: APP_PAYMENT_ORDER_BASE_PATH,
    },
    {
      provide: QuickTransferJourneyConfigurationToken,
      useValue: quickTransferConfig,
    },
  ],
})
export class WrappedJourneyLayoutModule {}
