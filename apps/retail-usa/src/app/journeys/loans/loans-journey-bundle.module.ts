import { NgModule } from '@angular/core';
import {
  LoansJourneyModule,
  LOAN_RETAIL_JOURNEY_COMMUNICATOR,
  RETAIL_LOANS_JOURNEY_ARRANGEMENT_MANAGER_BASE_PATH,
  RETAIL_LOANS_JOURNEY_LOANS_BASE_PATH,
  RETAIL_LOANS_TRANSACTIONS_BASE_PATH,
  LoansJourneyConfiguration,
  loansConfigurationDefault,
  LoansJourneyConfigurationToken,
  AccountStatementPaginationType,
  TransactionPaginationType,
} from '@backbase/loans-retail-journey';
import { AMOUNT_CONFIG_TOKEN, AmountConfig } from '@backbase/ui-ang/amount';
import { LoansCommunicationService } from '@backbase/retail/feature/communication';

import {
  APP_ARRANGEMENT_MANAGER_BASE_PATH,
  APP_LOANS_JOURNEY_BASE_PATH,
  APP_TRANSACTIONS_BASE_PATH,
} from '../../service-paths.module';
import { APP_CONFIG } from '../../app.config';
import { appPaginationTypeMapper } from '@backbase/shared/feature/config';

const transactionPaginationTypeMapper = appPaginationTypeMapper(
  {
    pagination: TransactionPaginationType.PAGINATION,
    'load-more': TransactionPaginationType.LOAD_MORE,
    'infinite-scroll': TransactionPaginationType.INFINITE_SCROLL,
  },
  TransactionPaginationType.PAGINATION,
);

const accountStatementPaginationTypeMapper = appPaginationTypeMapper(
  {
    pagination: AccountStatementPaginationType.Pagination,
    'load-more': AccountStatementPaginationType.LoadMore,
  },
  AccountStatementPaginationType.Pagination,
);

const LOANS_JOURNEY_CONFIGURATION: LoansJourneyConfiguration = {
  ...loansConfigurationDefault,
  transaction: {
    ...loansConfigurationDefault.transaction,
    itemsPerPage: APP_CONFIG.pageSize,
    paginationType: transactionPaginationTypeMapper(APP_CONFIG.paginationType),
  },
  accountStatement: {
    ...loansConfigurationDefault.accountStatement,
    itemsPerPage: APP_CONFIG.pageSize,
    paginationType: accountStatementPaginationTypeMapper(APP_CONFIG.paginationType),
  },
  loansList: {
    ...loansConfigurationDefault.loansList,
    itemsPerPage: APP_CONFIG.pageSize,
  },
  paymentSchedule: {
    ...loansConfigurationDefault.paymentSchedule,
    itemsPerPage: APP_CONFIG.pageSize,
  },
  escrow: {
    ...loansConfigurationDefault.escrow,
    itemsPerPage: APP_CONFIG.pageSize,
  },
  loanChildren: {
    ...loansConfigurationDefault.loanChildren,
    itemsPerPage: APP_CONFIG.pageSize,
  },
};

const amountConfig: AmountConfig = {
  mapCurrency: true,
};

@NgModule({
  imports: [LoansJourneyModule.forRoot()],
  providers: [
    {
      provide: LoansJourneyConfigurationToken,
      useValue: LOANS_JOURNEY_CONFIGURATION,
    },
    {
      provide: LOAN_RETAIL_JOURNEY_COMMUNICATOR,
      useExisting: LoansCommunicationService,
    },
    {
      provide: RETAIL_LOANS_JOURNEY_LOANS_BASE_PATH,
      useExisting: APP_LOANS_JOURNEY_BASE_PATH,
    },
    {
      provide: RETAIL_LOANS_JOURNEY_ARRANGEMENT_MANAGER_BASE_PATH,
      useExisting: APP_ARRANGEMENT_MANAGER_BASE_PATH,
    },
    {
      provide: RETAIL_LOANS_TRANSACTIONS_BASE_PATH,
      useExisting: APP_TRANSACTIONS_BASE_PATH,
    },
    {
      provide: AMOUNT_CONFIG_TOKEN,
      useValue: amountConfig,
    },
  ],
})
export class LoansJourneyBundleModule {}
