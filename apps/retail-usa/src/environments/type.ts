export interface Environment {
  production: boolean;
  animation: boolean;
  landingPageUrl: string;
  baseHref: string;
  apiRoot: string;
  localize?: boolean;
  googleApiKey: string;
  /**
   * @redudant
   * @deprecated This property is no longer used in the application
   * You can modify it directly in these files:
   * - src/app/journeys/accounts/bundle/accounts-transactions-journey-bundle.module.ts
   * - src/app/journeys/dashboard/bundle/dashboard-journey-bundle.module.ts
   */
  disputeTopicId?: string;
  /**
   * @redudant
   * @deprecated This property is no longer used in the application
   * You can modify it directly in these files:
   * - src/app/journeys/accounts/bundle/accounts-transactions-journey-bundle.module.ts
   * - src/app/journeys/dashboard/bundle/dashboard-journey-bundle.module.ts
   */
  inquireTopicId?: string;
  calendarVersion?: string;
  appVersion?: string;
  accountsUseArrangementViewsApi?: boolean;
  mocksEnabled?: boolean;
  /**
   * @deprecated - once the flag is removed, the dashboard page will become the primary application page
   *
   * The dashboard journey page is meant to replace the accounts page as the primary page of the application.
   * To avoid breaking changes for the customers who is not ready to use the dashboard, we disable it by default,
   * which falls back to the accounts journey page and thus leads to no changes in the app's behavior.
   */
  dashboardEnabled?: boolean;
  /**
   * Enables Backbase ModelBank-environment-specific features that are disabled otherwise.
   */
  modelbank?: boolean;
}
