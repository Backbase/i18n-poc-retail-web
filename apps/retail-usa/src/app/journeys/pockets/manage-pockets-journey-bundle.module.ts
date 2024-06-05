import { NgModule } from '@angular/core';
import {
  ManagePocketsJourneyConfigurationToken,
  ManagePocketsJourneyModule,
  MANAGE_POCKETS_JOURNEY_ACCESS_CONTROL_BASE_PATH,
  MANAGE_POCKETS_JOURNEY_ARRANGEMENT_MANAGER_BASE_PATH,
  MANAGE_POCKETS_JOURNEY_FINANCIAL_INSTITUTION_MANAGER_BASE_PATH,
  MANAGE_POCKETS_JOURNEY_PAYMENT_ORDER_BASE_PATH,
  MANAGE_POCKETS_JOURNEY_POCKET_TAILOR_BASE_PATH,
  PocketTransferCommunicationService,
  MANAGE_POCKETS_JOURNEY_TRANSACTIONS_BASE_PATH,
  PaginationType,
  ManagePocketsJourneyConfiguration,
} from '@backbase/manage-pockets-journey-ang';
import { PaymentsCommunicationService } from '@backbase/retail/feature/communication';
import { appPaginationTypeMapper } from '@backbase/shared/feature/config';

import {
  APP_ACCESS_CONTROL_BASE_PATH,
  APP_ARRANGEMENT_MANAGER_BASE_PATH,
  APP_FINANCIAL_INSTITUTION_MANAGER_BASE_PATH,
  APP_PAYMENT_ORDER_BASE_PATH,
  APP_POCKET_TAILOR_BASE_PATH,
  APP_TRANSACTIONS_BASE_PATH,
} from '../../service-paths.module';
import { initiatePaymentProviders } from '../transfers/initiate-payment-providers.util';
import { environment } from '../../../environments/environment';
import { APP_CONFIG } from '../../app.config';

const paginationTypeMapper = appPaginationTypeMapper(
  {
    pagination: PaginationType.PAGINATION,
    'load-more': PaginationType.LOAD_MORE,
    'infinite-scroll': PaginationType.INFINITE_SCROLL,
  },
  PaginationType.LOAD_MORE,
);

const managePocketsJourneyConfiguration: Partial<ManagePocketsJourneyConfiguration> = {
  journeyCurrency: 'USD',
  usePaymentJourney: environment.modelbank ?? false,
  paginationType: paginationTypeMapper(APP_CONFIG.paginationType),
  pocketTransactionsSize: APP_CONFIG.pageSize,
  pocketImages: [
    {
      iconName: 'home',
      displayedName: $localize`:@@managePockets-pocket-image.home:Home`,
    },
    {
      iconName: 'travel',
      displayedName: $localize`:@@managePockets-pocket-image.travel:Travel`,
    },
    {
      iconName: 'rent',
      displayedName: $localize`:@@managePockets-pocket-image.rent:Rent`,
    },
    {
      iconName: 'holidays',
      displayedName: $localize`:@@managePockets-pocket-image.holidays:Holidays`,
    },
    {
      iconName: 'savings',
      displayedName: $localize`:@@managePockets-pocket-image.savings:Savings`,
    },
    {
      iconName: 'utilities',
      displayedName: $localize`:@@managePockets-pocket-image.utilities:Utilities`,
    },
    {
      iconName: 'new-car',
      displayedName: $localize`:@@managePockets-pocket-image.new-car:New Car`,
    },
    {
      iconName: 'insurance',
      displayedName: $localize`:@@managePockets-pocket-image.insurance:Insurance`,
    },
    {
      iconName: 'new-phone',
      displayedName: $localize`:@@managePockets-pocket-image.new-phone:New Phone`,
    },
    {
      iconName: 'entertainment',
      displayedName: $localize`:@@managePockets-pocket-image.entertainment:Entertainment`,
    },
    {
      iconName: 'gift',
      displayedName: $localize`:@@managePockets-pocket-image.gift:Gift`,
    },
    {
      iconName: 'business',
      displayedName: $localize`:@@managePockets-pocket-image.business:Business`,
    },
    {
      iconName: 'custom',
      displayedName: $localize`:@@managePockets-pocket-image.custom:Custom`,
    },
  ],
};

@NgModule({
  imports: [ManagePocketsJourneyModule.forRoot()],
  providers: [
    ...initiatePaymentProviders,
    {
      provide: ManagePocketsJourneyConfigurationToken,
      useValue: managePocketsJourneyConfiguration,
    },
    {
      provide: MANAGE_POCKETS_JOURNEY_ACCESS_CONTROL_BASE_PATH,
      useExisting: APP_ACCESS_CONTROL_BASE_PATH,
    },
    {
      provide: MANAGE_POCKETS_JOURNEY_ARRANGEMENT_MANAGER_BASE_PATH,
      useExisting: APP_ARRANGEMENT_MANAGER_BASE_PATH,
    },
    {
      provide: MANAGE_POCKETS_JOURNEY_FINANCIAL_INSTITUTION_MANAGER_BASE_PATH,
      useExisting: APP_FINANCIAL_INSTITUTION_MANAGER_BASE_PATH,
    },
    {
      provide: MANAGE_POCKETS_JOURNEY_PAYMENT_ORDER_BASE_PATH,
      useExisting: APP_PAYMENT_ORDER_BASE_PATH,
    },
    {
      provide: MANAGE_POCKETS_JOURNEY_POCKET_TAILOR_BASE_PATH,
      useExisting: APP_POCKET_TAILOR_BASE_PATH,
    },
    {
      provide: MANAGE_POCKETS_JOURNEY_TRANSACTIONS_BASE_PATH,
      useExisting: APP_TRANSACTIONS_BASE_PATH,
    },
    {
      provide: PocketTransferCommunicationService,
      useExisting: PaymentsCommunicationService,
    },
  ],
})
export class ManagePocketsJourneyBundleModule {}
