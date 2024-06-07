import { NgModule, Provider } from '@angular/core';
import { Route } from '@angular/router';
import {
  AccountAliasDisplayingLevel,
  AccountsCommunicationService,
  AccountsPaymentsCommunication,
  AccountsStateCommunicationService,
  AccountsTransactionsJourneyConfiguration,
  AccountsTransactionsJourneyConfigurationToken,
  AccountsTransactionsJourneyModule,
  ACCOUNTS_TRANSACTIONS_JOURNEY_ARRANGEMENT_MANAGER_BASE_PATH,
  ACCOUNTS_TRANSACTIONS_JOURNEY_CATEGORIES_MANAGEMENT_BASE_PATH,
  ACCOUNTS_TRANSACTIONS_JOURNEY_FINANCIAL_INSTITUTION_MANAGER_BASE_PATH,
  ACCOUNTS_TRANSACTIONS_JOURNEY_MESSAGES_BASE_PATH,
  ACCOUNTS_TRANSACTIONS_JOURNEY_TRANSACTIONS_BASE_PATH,
  ACCOUNTS_TRANSACTIONS_JOURNEY_PAYMENT_BATCH_BASE_PATH,
  ProductKindUri,
  ACCOUNTS_TRANSACTIONS_JOURNEY_EXTERNAL_ACCOUNT_AGGREGATOR_BASE_PATH,
  ArrangementsListComponent,
  accountsTransactionsRoute,
} from '@backbase/accounts-transactions-journey-ang';
import { PubSubService } from '@backbase/foundation-ang/web-sdk';
import {
  AccountsCommunicationService as AccountsCommunicationServiceImplementation,
  AccountsStateCommunicationService as AccountsStateCommunicationServiceImplementation,
  AccountsInitiatePaymentCommunication,
} from '@backbase/retail/feature/communication';

import {
  APP_ARRANGEMENT_MANAGER_BASE_PATH,
  APP_CATEGORIES_MANAGEMENT_BASE_PATH,
  APP_FINANCIAL_INSTITUTION_MANAGER_BASE_PATH,
  APP_MESSAGES_BASE_PATH,
  APP_TRANSACTIONS_BASE_PATH,
  APP_PAYMENT_BATCH_BASE_PATH,
  APP_EXTERNAL_ACCOUNT_AGGREGATOR_BASE_PATH,
} from '../../../service-paths.module';
import { environment } from '../../../../environments/environment';
import { APP_CONFIG } from '../../../app.config';

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

const AccountsTransactionsConfigProvider: Provider = {
  provide: AccountsTransactionsJourneyConfigurationToken,
  useValue: ACCOUNTS_TRANSACTIONS_JOURNEY_CONFIGURATION,
};

const routeConfiguration: Route = environment.accountsUseArrangementViewsApi
  ? {
      ...accountsTransactionsRoute,
      children: [
        {
          path: 'list',
          component: ArrangementsListComponent,
          title: $localize`Tab label for my accounts:@@bb-account-transactions-journey.tabs.my-accounts:My Accounts`,
        },
        ...(accountsTransactionsRoute.children ?? []),
      ],
    }
  : accountsTransactionsRoute;

@NgModule({
  imports: [AccountsTransactionsJourneyModule.forRoot({ route: routeConfiguration })],
  providers: [
    AccountsTransactionsConfigProvider,
    { provide: AccountsPaymentsCommunication, useExisting: AccountsInitiatePaymentCommunication },
    { provide: AccountsCommunicationService, useExisting: AccountsCommunicationServiceImplementation },
    { provide: AccountsStateCommunicationService, useExisting: AccountsStateCommunicationServiceImplementation },
    PubSubService,
    {
      provide: ACCOUNTS_TRANSACTIONS_JOURNEY_ARRANGEMENT_MANAGER_BASE_PATH,
      useExisting: APP_ARRANGEMENT_MANAGER_BASE_PATH,
    },
    {
      provide: ACCOUNTS_TRANSACTIONS_JOURNEY_CATEGORIES_MANAGEMENT_BASE_PATH,
      useExisting: APP_CATEGORIES_MANAGEMENT_BASE_PATH,
    },
    {
      provide: ACCOUNTS_TRANSACTIONS_JOURNEY_FINANCIAL_INSTITUTION_MANAGER_BASE_PATH,
      useExisting: APP_FINANCIAL_INSTITUTION_MANAGER_BASE_PATH,
    },
    {
      provide: ACCOUNTS_TRANSACTIONS_JOURNEY_MESSAGES_BASE_PATH,
      useExisting: APP_MESSAGES_BASE_PATH,
    },
    {
      provide: ACCOUNTS_TRANSACTIONS_JOURNEY_TRANSACTIONS_BASE_PATH,
      useExisting: APP_TRANSACTIONS_BASE_PATH,
    },
    {
      provide: ACCOUNTS_TRANSACTIONS_JOURNEY_PAYMENT_BATCH_BASE_PATH,
      useExisting: APP_PAYMENT_BATCH_BASE_PATH,
    },
    {
      provide: ACCOUNTS_TRANSACTIONS_JOURNEY_EXTERNAL_ACCOUNT_AGGREGATOR_BASE_PATH,
      useExisting: APP_EXTERNAL_ACCOUNT_AGGREGATOR_BASE_PATH,
    },
  ],
})
export class AccountsTransactionsJourneyBundleModule {}
