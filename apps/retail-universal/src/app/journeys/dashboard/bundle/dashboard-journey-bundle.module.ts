import { NgModule } from '@angular/core';
import { AccountsJourneyModule } from '@backbase/accounts-journey-ang';
import {
  DASHBOARD_JOURNEY_ARRANGEMENT_MANAGER_BASE_PATH,
  DASHBOARD_JOURNEY_TRANSACTIONS_BASE_PATH,
  DashboardJourneyModule,
  DashboardJourneyConfiguration,
  DEFAULT_ACCOUNTS_TILE_CONFIG,
  DEFAULT_LATEST_TRANSACTIONS_TILE_CONFIG,
  DashboardJourneyConfigurationToken,
  LatestTransactionsTileConfig,
  AccountsCommunicationService,
  DashboardJourneyComponent,
  DASHBOARD_JOURNEY_v1_BASE_PATH,
  CustomizePageComponent,
} from '@backbase/dashboard-journey-ang';
import {
  AccountsTransactionsJourneyModule,
  TransactionDetailsComponent,
  AccountAliasDisplayingLevel,
  AccountsTransactionsJourneyConfiguration,
  ProductKindUri,
  AccountsTransactionsJourneyConfigurationToken,
  ACCOUNTS_TRANSACTIONS_JOURNEY_CATEGORIES_MANAGEMENT_BASE_PATH,
} from '@backbase/accounts-transactions-journey-ang';

import {
  APP_ARRANGEMENT_MANAGER_BASE_PATH,
  APP_CATEGORIES_MANAGEMENT_BASE_PATH,
  APP_DASHBOARD_BASE_PATH,
  APP_TRANSACTIONS_BASE_PATH,
} from '../../../service-paths.module';
import { DashboardAccountsNavigationService } from './dashboard-accounts-navigation.service';
import { environment } from '../../../../environments/environment';
import { APP_CONFIG } from '../../../app.config';

const LATEST_TRANSACTIONS_TILE_CONFIG: LatestTransactionsTileConfig = {
  ...DEFAULT_LATEST_TRANSACTIONS_TILE_CONFIG,
  showSeeAllButton: false,
};

const DASHBOARD_JOURNEY_CONFIGURATION: DashboardJourneyConfiguration = {
  cacheTTL: 1000,
  tiles: [DEFAULT_ACCOUNTS_TILE_CONFIG, LATEST_TRANSACTIONS_TILE_CONFIG],
  headingAppearance: 'title',
  layoutBreakpoint: Number.POSITIVE_INFINITY,
  quickActions: [],
  isQuickActionsSectionOnColor: false,
  isCustomizeButtonOnColor: false,
};

const ACCOUNTS_TRANSACTIONS_JOURNEY_CONFIGURATION: Partial<AccountsTransactionsJourneyConfiguration> = {
  apiKey: environment.googleApiKey,
  showCheckImages: true,
  disputeTopicCode: 'Dispute Topic',
  inquireTopicCode: 'Inquire Topic',
  productKindsWithExternalDetailsPage: ProductKindUri.LOAN,
  accountAliasDisplayLevel: AccountAliasDisplayingLevel.USER,
  arrangementViewsName: 'legacy-summary',
  enableAccountLinking: false,
  itemsPerPage: APP_CONFIG.pageSize,
  paginationType: APP_CONFIG.paginationType,
  allowedExportTypes: ['CSV', 'OFX', 'QFX', 'QBO', 'PDF'],
};

if (environment.modelbank) {
  ACCOUNTS_TRANSACTIONS_JOURNEY_CONFIGURATION.enableNestedCategories = true;
}

@NgModule({
  imports: [
    DashboardJourneyModule.forRoot([
      {
        path: '',
        component: DashboardJourneyComponent,
        children: [
          {
            path: 'transaction-details',
            component: TransactionDetailsComponent,
          },
          {
            path: 'customize',
            component: CustomizePageComponent,
            outlet: 'popup',
          },
        ],
      },
    ]),
    AccountsJourneyModule,
    AccountsTransactionsJourneyModule,
  ],
  providers: [
    {
      provide: AccountsCommunicationService,
      useExisting: DashboardAccountsNavigationService,
    },
    {
      provide: AccountsTransactionsJourneyConfigurationToken,
      useValue: ACCOUNTS_TRANSACTIONS_JOURNEY_CONFIGURATION,
    },
    {
      provide: DashboardJourneyConfigurationToken,
      useValue: DASHBOARD_JOURNEY_CONFIGURATION,
    },
    {
      provide: DASHBOARD_JOURNEY_v1_BASE_PATH,
      useExisting: APP_DASHBOARD_BASE_PATH,
    },
    {
      provide: DASHBOARD_JOURNEY_TRANSACTIONS_BASE_PATH,
      useExisting: APP_TRANSACTIONS_BASE_PATH,
    },
    {
      provide: DASHBOARD_JOURNEY_ARRANGEMENT_MANAGER_BASE_PATH,
      useExisting: APP_ARRANGEMENT_MANAGER_BASE_PATH,
    },
    {
      provide: ACCOUNTS_TRANSACTIONS_JOURNEY_CATEGORIES_MANAGEMENT_BASE_PATH,
      useExisting: APP_CATEGORIES_MANAGEMENT_BASE_PATH,
    },
  ],
})
export class DashboardJourneyBundleModule {}
