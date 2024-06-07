import { NgModule } from '@angular/core';
import {
  BudgetJourneyConfiguration,
  BudgetJourneyConfigurationToken,
  BudgetJourneyModule,
  BUDGET_JOURNEY_BUDGETING_BASE_PATH,
  BUDGET_JOURNEY_CATEGORIES_MANAGEMENT_BASE_PATH,
} from '@backbase/budget-journey-ang';

import { APP_BUDGETING_BASE_PATH, APP_CATEGORIES_MANAGEMENT_BASE_PATH } from '../../service-paths.module';

export const budgetJourneyConfiguration: BudgetJourneyConfiguration = {
  showPercentage: false,
  budgetSafeZoneLimit: 80,
  notificationDismissTime: 5,
  maxBudgets: undefined,
};

@NgModule({
  imports: [BudgetJourneyModule.forRoot()],
  providers: [
    {
      provide: BudgetJourneyConfigurationToken,
      useValue: budgetJourneyConfiguration,
    },
    {
      provide: BUDGET_JOURNEY_BUDGETING_BASE_PATH,
      useExisting: APP_BUDGETING_BASE_PATH,
    },
    {
      provide: BUDGET_JOURNEY_CATEGORIES_MANAGEMENT_BASE_PATH,
      useExisting: APP_CATEGORIES_MANAGEMENT_BASE_PATH,
    },
  ],
})
export class BudgetJourneyBundleModule {}
