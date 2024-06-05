import { NgModule } from '@angular/core';
import {
  InsightsDashboardJourneyConfiguration,
  InsightsDashboardJourneyConfigurationToken,
  InsightsDashboardJourneyModule,
  FiDashboardCashflowWrapperComponent,
  FiDashboardBudgetWrapperComponent,
  FiDashboardCreditScoreWrapperComponent,
  PaginationType,
  OrderBy,
  TransactionDirection,
  InsightsDashboardNavigationService,
  CategoryTypes,
} from '@backbase/insights-dashboard-journey-ang';
import {
  BudgetsCommunicationService,
  FI_BUDGET_INCOME_EXPENSE_ANALYZER_BASE_PATH,
  FI_BUDGET_JOURNEY_BUDGETING_BASE_PATH,
  FI_BUDGET_JOURNEY_CATEGORIES_MANAGEMENT_BASE_PATH,
  FI_BUDGET_JOURNEY_TRANSACTIONS_BASE_PATH,
  FiBudgetNavigationService,
} from '@backbase/fi-budget-journey-ang';
import {
  CashFlowCommunicationService,
  FI_CASHFLOW_ARRANGEMENT_MANAGER_BASE_PATH,
  FI_CASHFLOW_INCOME_EXPENSE_ANALYZER_BASE_PATH,
  FI_CASHFLOW_JOURNEY_BUDGETING_BASE_PATH,
  FI_CASHFLOW_JOURNEY_TRANSACTIONS_BASE_PATH,
} from '@backbase/cashflow-journey-ang';
import { CREDIT_SCORE_SSO_JOURNEY_BASE_PATH } from '@backbase/credit-score-journey-ang';
import { FinancialInsightsCommunicationService as FinancialInsightsCommunicationServiceImplementation } from '@backbase/retail/feature/communication';
import { appPaginationTypeMapper } from '@backbase/shared/feature/config';

import {
  APP_ARRANGEMENT_BASE_PATH,
  APP_BUDGETING_BASE_PATH,
  APP_CATEGORIES_MANAGEMENT_BASE_PATH,
  APP_CREDIT_SCORE_BASE_PATH,
  APP_INCOME_EXPENSE_ANALYSER_BASE_PATH,
  APP_TRANSACTIONS_BASE_PATH,
} from '../../service-paths.module';
import { PERMISSIONS } from '../../auth/permissions';
import { APP_CONFIG } from '../../app.config';

const mapPaginationType = appPaginationTypeMapper(
  {
    pagination: PaginationType.pagination,
    'load-more': PaginationType.loadMore,
    'infinite-scroll': PaginationType.infiniteScroll,
  },
  PaginationType.loadMore,
);

export const INSIGHTS_DASHBOARD_JOURNEY_CONFIGURATION: Partial<InsightsDashboardJourneyConfiguration> = {
  leftColumnTiles: [{ component: FiDashboardCashflowWrapperComponent, entitlement: PERMISSIONS.canViewCashFlow }],
  rightColumnTiles: [
    { component: FiDashboardBudgetWrapperComponent, entitlement: PERMISSIONS.canViewBudgets },
    { component: FiDashboardCreditScoreWrapperComponent, entitlement: PERMISSIONS.canViewCreditScore },
  ],
  globalConfig: {
    currency: 'USD',
    filterDuration: 5,
    filterAccounts: ['currentAccounts', 'savingsAccounts'],
    showIncomeAndSpendingCategories: true,
    transactionsSize: APP_CONFIG.pageSize,
    paginationType: mapPaginationType(APP_CONFIG.paginationType),
    maxNavPages: 3,
    transactionsSortOptions: {
      orderBy: OrderBy.BOOKING_DATE,
      direction: TransactionDirection.DESC,
    },
    notificationDismissTime: 5000,
    showSpentAmount: false,
    categoryType: CategoryTypes.Expense,
    routeNameToNavigateBack: '/insights-dashboard',
  },
};

@NgModule({
  imports: [InsightsDashboardJourneyModule.forRoot()],
  providers: [
    {
      provide: InsightsDashboardJourneyConfigurationToken,
      useValue: INSIGHTS_DASHBOARD_JOURNEY_CONFIGURATION,
    },
    { provide: BudgetsCommunicationService, useExisting: FinancialInsightsCommunicationServiceImplementation },
    { provide: CashFlowCommunicationService, useExisting: FinancialInsightsCommunicationServiceImplementation },
    { provide: FiBudgetNavigationService, useExisting: InsightsDashboardNavigationService },
    {
      provide: CREDIT_SCORE_SSO_JOURNEY_BASE_PATH,
      useExisting: APP_CREDIT_SCORE_BASE_PATH,
    },
    {
      provide: FI_CASHFLOW_INCOME_EXPENSE_ANALYZER_BASE_PATH,
      useExisting: APP_INCOME_EXPENSE_ANALYSER_BASE_PATH,
    },
    {
      provide: FI_CASHFLOW_ARRANGEMENT_MANAGER_BASE_PATH,
      useExisting: APP_ARRANGEMENT_BASE_PATH,
    },
    {
      provide: FI_CASHFLOW_JOURNEY_TRANSACTIONS_BASE_PATH,
      useExisting: APP_TRANSACTIONS_BASE_PATH,
    },
    {
      provide: FI_CASHFLOW_JOURNEY_BUDGETING_BASE_PATH,
      useExisting: APP_BUDGETING_BASE_PATH,
    },
    {
      provide: FI_BUDGET_JOURNEY_BUDGETING_BASE_PATH,
      useExisting: APP_BUDGETING_BASE_PATH,
    },
    {
      provide: FI_BUDGET_JOURNEY_CATEGORIES_MANAGEMENT_BASE_PATH,
      useExisting: APP_CATEGORIES_MANAGEMENT_BASE_PATH,
    },
    {
      provide: FI_BUDGET_INCOME_EXPENSE_ANALYZER_BASE_PATH,
      useExisting: APP_INCOME_EXPENSE_ANALYSER_BASE_PATH,
    },
    {
      provide: FI_BUDGET_JOURNEY_TRANSACTIONS_BASE_PATH,
      useExisting: APP_TRANSACTIONS_BASE_PATH,
    },
  ],
})
export class InsightsDashboardJourneyBundleModule {}
