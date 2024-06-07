import { NgModule } from '@angular/core';
import {
  ManageStatementsJourneyConfiguration,
  ManageStatementsJourneyModule,
  MANAGE_STATEMENTS_JOURNEY_ACCOUNT_STATEMENT_BASE_PATH,
  MANAGE_STATEMENTS_JOURNEY_CONFIG_TOKEN,
} from '@backbase/manage-statements-retail-journey-ang';

import { APP_ACCOUNT_STATEMENT_BASE_PATH } from '../../service-paths.module';

const manageStatementsJourneyConfiguration: Partial<ManageStatementsJourneyConfiguration> = {
  accountStatementsNavigationUrl: '/self-service/download-statements',
};

@NgModule({
  imports: [ManageStatementsJourneyModule.forRoot()],
  providers: [
    {
      provide: MANAGE_STATEMENTS_JOURNEY_CONFIG_TOKEN,
      useValue: manageStatementsJourneyConfiguration,
    },
    {
      provide: MANAGE_STATEMENTS_JOURNEY_ACCOUNT_STATEMENT_BASE_PATH,
      useExisting: APP_ACCOUNT_STATEMENT_BASE_PATH,
    },
  ],
})
export class ManageStatementsJourneyBundleModule {}
