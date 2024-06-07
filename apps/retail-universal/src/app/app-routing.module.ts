/*
 *
 * The content of this file can be edited freely, but to maintain upgradability
 * this file should not be renamed and should always export an Angular module named
 * `AppRoutingModule`.
 *
 *
 */
import { NgModule, inject } from '@angular/core';
import { CanLoadFn, RouterModule, Routes, UrlSerializer } from '@angular/router';
import { EntitlementsGuard } from '@backbase/foundation-ang/entitlements';
import { AuthGuard } from '@backbase/shared/feature/auth';
import { SharedUserContextGuard } from '@backbase/shared/feature/user-context';
import { PERMISSIONS } from './auth/permissions';
import { IdentityJourneyWrapperComponent } from './journeys/wrapper-component/journey-wrapper.component';
import { LayoutComponent } from './layout/layout.component';
import { environment } from '../environments/environment';

/**
 * @deprecated The guard is deprecated and will be removed together with the Environment.dashboardEnabled flag
 * when the dashboard page becomes active by default.
 */
const canLoadDashboard: CanLoadFn = () => {
  return environment.dashboardEnabled ? true : inject(UrlSerializer).parse('/my-accounts');
};

// TODO: Find a more elegant solution to decide what landing page to choose
// in the event that the default one is not available due to entitlements
const routes: Routes = [
  {
    path: 'select-context',
    loadChildren: () => import('./user-context/user-context.module').then((m) => m.UserContextModule),
    title: $localize`:@@context-selection.nav.item.title:Select Context`,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: environment.dashboardEnabled ? 'dashboard' : 'my-accounts',
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./journeys/dashboard/wrapper').then((m) => m.DashboardJourneyWrapperModule),
        data: {
          entitlements: PERMISSIONS.canViewDashboard,
          cssClasses: ['container-fluid', 'container'],
          redirectTo: 'my-accounts',
        },
        title: $localize`:@@dashboard.nav.item.title:Dashboard`,
        canLoad: [canLoadDashboard],
      },
      {
        path: 'my-accounts',
        data: {
          entitlements: PERMISSIONS.canViewMyAccounts,
          cssClasses: ['container-fluid', 'container'],
          redirectTo: 'transfers/make-a-transfer',
        },
        title: $localize`:@@accounts.nav.item.title:My Accounts`,
        children: [
          {
            path: '',
            loadChildren: () => import('./journeys/accounts').then((_) => _.AccountsTransactionsJourneyWrapperModule),
          },
          {
            path: 'loans/details',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('./journeys/loans/loans-journey-bundle.module').then((_) => _.LoansJourneyBundleModule),
                data: {
                  entitlements: PERMISSIONS.canViewLoans,
                },
                title: $localize`:@@loans.nav.item.title:Loans - Accounts`,
              },
              {
                path: ':selectedAccount',
                loadChildren: () =>
                  import('./journeys/loans/loan-payments/loan-payment-wrapper-bundle.module').then(
                    (_) => _.LoanPaymentJourneyWrapperBundleModule,
                  ),
                data: {
                  entitlements: PERMISSIONS.canViewLoans,
                },
                title: $localize`:@@loans-item.nav.item.title:Loan - Accounts`,
              },
            ],
          },
        ],
      },
      {
        path: 'pockets',
        loadChildren: () =>
          import('./journeys/pockets/pockets-wrapper/pocket-wrapper-bundle.module').then(
            (m) => m.PocketWrapperBundleModule,
          ),
        data: {
          entitlements: PERMISSIONS.canViewManagePockets,
          cssClasses: ['container--fixed-width mx-auto'],
        },
        title: $localize`:@@accounts.nav.item.title:Pockets`,
      },
      {
        path: 'transfers',
        data: { cssClasses: ['container--fixed-width mx-auto'] },
        children: [
          {
            path: 'activity',
            loadChildren: () =>
              import('./journeys/transfers/upcoming-and-history-payments.module').then(
                (m) => m.ManageUpcomingAndHistoricalPaymentsJourneyBundleModule,
              ),
            data: {
              entitlements: PERMISSIONS.canViewScheduledTransfers,
            },
            title: $localize`:@@activity.nav.item.title:Activity - Transfer`,
          },
          {
            path: '',
            loadChildren: () =>
              import(
                './journeys/transfers/wrapper-initiate-payment-journey/initiate-payment-wrapper-bundle.module'
              ).then((m) => m.InitiatePaymentWrapperBundleModule),
          },
        ],
      },
      {
        path: 'insights-dashboard',
        data: {
          entitlements: PERMISSIONS.canViewInsightsDashboard,
        },
        title: $localize`:@@insights.nav.item.title.insightsDashboard:Insights Dashboard`,
        loadChildren: () =>
          import('./journeys/insights-dashboard/insights-dashboard-journey-bundle.module').then(
            (m) => m.InsightsDashboardJourneyBundleModule,
          ),
      },
      {
        path: 'insights',
        data: { cssClasses: ['container--fixed-width mx-auto'] },
        children: [
          {
            path: 'cashflow',
            loadChildren: () =>
              import('./journeys/insights/bundle-turnovers.module').then((m) => m.TurnoversJourneyBundleModule),
            title: $localize`:@@cash-flow.nav.item.title:Cash Flow`,
          },
          {
            path: 'income-analysis',
            loadChildren: () =>
              import('./journeys/insights/bundle-income-analysis.module').then((m) => m.IncomeAnalysisBundleModule),
            title: $localize`:@@income-analysis.nav.item.title:Income Analysis`,
          },
          {
            path: 'spending-analysis',
            loadChildren: () =>
              import('./journeys/insights/bundle-spending-analysis.module').then((m) => m.SpendingAnalysisBundleModule),
            title: $localize`:@@spending-analysis.nav.item.title:Spending Analysis`,
          },
        ],
        title: $localize`:@@insights.nav.item.title:Analytics`,
      },
      {
        path: 'self-service',
        data: { cssClasses: ['container--fixed-width mx-auto'] },
        children: [
          {
            path: 'profile',
            loadChildren: () =>
              import('./journeys/my-profile/my-profile/my-profile-bundle.module').then((m) => m.MyProfileBundleModule),
          },
          {
            path: 'manage-cards',
            loadChildren: () =>
              import('./journeys/self-service/bundle-cards-management-journey.module').then(
                (m) => m.CardsManagementJourneyBundleModule,
              ),
            data: {
              entitlements: PERMISSIONS.canViewManageCards,
            },
            title: $localize`:@@manage-cards.nav.item.title:Cards`,
          },
          {
            path: 'product-list',
            loadChildren: () =>
              import('./journeys/self-service/bundle-retail-notification-preferences-journey.module').then(
                (m) => m.RetailNotificationPreferencesJourneyBundleModule,
              ),
            data: {
              entitlements: PERMISSIONS.canViewManageNotifications,
            },
            title: $localize`:@@manage-notifications.nav.item.title:Manage Notifications`,
          },
          {
            path: 'marketing-preferences',
            loadChildren: () =>
              import('./journeys/self-service/bundle-marketing-preferences-journey.module').then(
                (m) => m.MarketingPreferencesJourneyBundleModule,
              ),
            data: {
              entitlements: PERMISSIONS.canViewMarketingPreferences,
            },
            title: $localize`:@@manage-notifications.nav.item.title:Marketing preferences`,
          },
          {
            path: 'manage-contacts',
            loadChildren: () =>
              import('./journeys/self-service/bundle-contact-journey.module').then(
                (m) => m.ContactManagerJourneyBundleModule,
              ),
            data: {
              entitlements: PERMISSIONS.canViewManageContacts,
            },
            title: $localize`:@@manage-contacts.nav.item.title:Manage Contacts`,
          },
          {
            path: 'download-statements',
            loadChildren: () =>
              import('./journeys/self-service/bundle-accounts-statement-retail-journey.module').then(
                (m) => m.AccountStatementRetailJourneyBundleModule,
              ),
            data: {
              entitlements: PERMISSIONS.canViewAccountStatements,
            },
            title: $localize`:@@download-statements.nav.item.title:Account Statements`,
          },
          {
            path: 'manage-statements',
            loadChildren: () =>
              import('./journeys/self-service/bundle-manage-statement-retail-journey.module').then(
                (m) => m.ManageStatementsJourneyBundleModule,
              ),
            data: {
              entitlements: PERMISSIONS.canViewManageStatements,
            },
            title: $localize`:@@manage-statements.nav.item.title:Manage Statements`,
          },
        ],
        title: $localize`:@@self-service.nav.item.title:Self Service`,
      },
      {
        path: 'more',
        data: { cssClasses: ['container--fixed-width mx-auto'] },
        children: [
          {
            path: 'budgets',
            loadChildren: () => import('./journeys/more/bundle-budget.module').then((m) => m.BudgetJourneyBundleModule),
            data: {
              entitlements: PERMISSIONS.canViewBudgets,
            },
            title: $localize`:@@budgets.nav.item.title:Budgets`,
          },
          {
            path: 'messages',
            loadChildren: () =>
              import('./journeys/more/bundle-messages-client-inbox-journey-bundle.module').then(
                (m) => m.MessagesClientInboxJourneyBundleModule,
              ),
            data: {
              entitlements: PERMISSIONS.canViewMessages,
            },
            title: $localize`:@@messages.nav.item.title:Messages`,
          },
          {
            path: 'find-us',
            loadChildren: () => import('./journeys/more/bundle-places.module').then((m) => m.PlacesJourneyBundleModule),
            data: {
              entitlements: PERMISSIONS.canViewPlaces,
            },
            title: $localize`:@@places.nav.item.title:Find Branches and ATMs`,
          },
        ],
      },
    ],
    canActivate: [AuthGuard, SharedUserContextGuard],
    canActivateChild: [EntitlementsGuard],
  },
  {
    path: 'consent',
    loadChildren: () =>
      import('./journeys/consent/bundle-consent-journey.module').then((m) => m.ConsentJourneyBundleModule),
  },
  {
    path: 'enrollment',
    component: IdentityJourneyWrapperComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./journeys/self-enrollment/self-enrollment-bundle.module').then(
            (m) => m.SelfEnrollmentJourneyBundleModule,
          ),
      },
    ],
  },
  {
    path: 'password-reset',
    component: IdentityJourneyWrapperComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./journeys/password-reset/password-reset-bundle.module').then(
            (m) => m.PasswordResetJourneyBundleModule,
          ),
      },
    ],
  },
  {
    path: 'logout',
    component: IdentityJourneyWrapperComponent,
    children: [
      {
        path: 'username-success',
        loadChildren: () =>
          import('./journeys/self-service/bundle-change-username.module').then(
            (m) => m.ChangeUsernameSuccessBundleModule,
          ),
      },
    ],
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  declarations: [IdentityJourneyWrapperComponent],
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
