import { NgModule } from '@angular/core';
import {
  ACCOUNT_STATEMENT_RETAIL_JOURNEY_ACCOUNT_STATEMENT_BASE_PATH,
  ACCOUNT_STATEMENT_RETAIL_JOURNEY_ARRANGEMENT_MANAGER_BASE_PATH,
  ACCOUNT_STATEMENT_RETAIL_JOURNEY_CONFIGURATION_TOKEN,
  AccountStatementRetailJourneyConfiguration,
  AccountStatementRetailJourneyModule,
  PaginationType,
} from '@backbase/account-statement-retail-journey-ang';
import { appPaginationTypeMapper } from '@backbase/shared/feature/config';

import { APP_ACCOUNT_STATEMENT_BASE_PATH, APP_ARRANGEMENT_MANAGER_BASE_PATH } from '../../service-paths.module';
import { APP_CONFIG } from '../../app.config';

const mapPaginationType = appPaginationTypeMapper(
  { pagination: PaginationType.pagination, 'load-more': PaginationType.loadMore },
  PaginationType.loadMore,
);

const accountStatementRetailJourneyConfiguration: Partial<AccountStatementRetailJourneyConfiguration> = {
  showManageStatementsNavigation: true,
  manageStatementsNavigationUrl: '/self-service/manage-statements',
  pageSize: APP_CONFIG.pageSize,
  paginationType: mapPaginationType(APP_CONFIG.paginationType),
};

@NgModule({
  imports: [AccountStatementRetailJourneyModule.forRoot()],
  providers: [
    {
      provide: ACCOUNT_STATEMENT_RETAIL_JOURNEY_CONFIGURATION_TOKEN,
      useValue: accountStatementRetailJourneyConfiguration,
    },
    {
      provide: ACCOUNT_STATEMENT_RETAIL_JOURNEY_ACCOUNT_STATEMENT_BASE_PATH,
      useExisting: APP_ACCOUNT_STATEMENT_BASE_PATH,
    },
    {
      provide: ACCOUNT_STATEMENT_RETAIL_JOURNEY_ARRANGEMENT_MANAGER_BASE_PATH,
      useExisting: APP_ARRANGEMENT_MANAGER_BASE_PATH,
    },
  ],
})
export class AccountStatementRetailJourneyBundleModule {}
