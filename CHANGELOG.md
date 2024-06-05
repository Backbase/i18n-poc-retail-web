# Changelog

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [2024.01]

### Fixed

- Bump [@backbase/places-journey-ang](https://backbase.io/developers/angular/libraries/places-journey-ang/4.4.0/index.html) to `4.4.0`
- Bump [@backbase/credit-score-journey-ang](https://backbase.io/developers/angular/libraries/credit-score-journey-ang/2.4.1/index.html) to `2.4.1`

### Removed

### Deprecated

### Added

- Add new configuration property `enableCalendarService` and base paths to `LOAN_PAYMENT` and `LOAN_ADVANCE` payment types to enable calendar service for loan payments journey.
- Add [AppVersionInterceptor](https://backbase.io/developers/angular/libraries/foundation/9.2.0/interceptors/AppVersionInterceptor.html) from `@backbase/foundation-ang`.
- Add a new configuration property `allowedExportTypes` to all "transaction" journeys with the default value as `['CSV', 'OFX', 'QFX', 'QBO', 'PDF']`
- Add app-level configuration for pagination on `APP_CONFIG`

### Changed

- Bump [`@backbase/account-statement-retail-journey-ang`](https://backbase.io/developers/angular/libraries/account-statement-retail-journey/5.1.0/index.html) to `5.1.0`
- Move journey configurations to separate constants for better type checking.
- Bump [@backbase/loans-retail-journey](https://backbase.io/developers/angular/libraries/loans-retail-journey/2.2.0/index.html) to `2.2.0`
- Bump [@backbase/quick-transfer-journey-ang](https://backbase.io/developers/angular/libraries/quick-transfer-journey/4.1.1/index.html) to `4.1.1`
- Bump [@backbase/manage-upcoming-and-historical-payments-journey-ang](https://backbase.io/developers/angular/libraries/manage-upcoming-and-historical-payments-journey/4.2.0/index.html) to `4.2.0`
- Bump [@backbase/connect-external-accounts-journey-ang](https://backbase.io/developers/angular/libraries/connect-external-accounts-journey-ang/4.1.1/changelog.html) to `4.1.1`
- Bump [@backbase/initiate-payment-journey-ang](https://backbase.io/developers/angular/libraries/ip-ang/4.3.0/changelog.html) to `4.3.0`
- Bump [@backbase/accounts-transactions-journey-ang](https://backbase.io/developers/angular/libraries/accounts-transactions-journey/6.11.0/index.html) to `6.11.0`
- Bump [@backbase/cards-management-journey-angular](https://backbase.io/developers/angular/libraries/cards-management-journey/5.2.0/changelog.html) to `5.2.0`
- Bump [@backbase/quick-transfer-journey-ang](https://backbase.io/developers/angular/libraries/quick-transfer-journey/4.1.1/index.html) to `4.1.1`
- Bump [@backbase/manage-upcoming-and-historical-payments-journey-ang](https://backbase.io/developers/angular/libraries/manage-upcoming-and-historical-payments-journey/4.2.0/index.html) to `4.2.0`
- Bump [@backbase/connect-external-accounts-journey-ang](https://backbase.io/developers/angular/libraries/connect-external-accounts-journey/4.1.1/index.html) to `4.1.1`

## [2023.12]

### Fixed

- Remote-config tests fixed

### Deprecated

- `disputeTopicId` and `inquireTopicId` environment variables are deprecated and will be removed in next breaking release

### Added

- Integrate new financial insights dashboard `@backbase/insights-dashboard-journey-ang`, including child journeys `@backbase/cashflow-journey-ang` & `@backbase/fi-budget-journey-ang`.
- Add [BreadcrumbTitleStrategy](https://backbase.io/developers/angular/libraries/foundation/9.1.1/injectables/BreadcrumbTitleStrategy.html) from `@backbase/foundation-ang/core`
- Add `LocaleSelectorComponent` from [@backbase/ui-ang](https://backbase.io/developers/angular/design-system/ui-ang/10.5.11/components/LocaleSelectorComponent.html)
- Added integration for new journey [`@backbase/engagement-marketing-preferences-journey`](https://backbase.io/developers/angular/libraries/marketing-preferences-journey/1.0.0/index.html)
- Added configuration for Calendar Service base path for Initiate Payment journey
- Added configuration for M2M validation base path for Initiate Payment journey
- Bump [@backbase/notifications-ang](https://backbase.io/developers/angular/libraries/notifications-ang/latest/index.html) to `4.1.0`

### Changed

- Bump [@backbase/manage-pockets-journey-ang](https://backbase.io/developers/angular/libraries/manage-pockets-journey-ang/4.7.0/index.html) to `4.7.0`
- Bump [@backbase/contact-manager-journey-ang](https://backbase.io/developers/angular/libraries/contact-manager-journey/4.1.0/index.html) to `4.1.0`
- Bump [@backbase/ui-ang](https://backbase.io/developers/angular/design-system/ui-ang/10.5.11/changelog.html) to `10.5.11`
- Bump [@backbase/authorized-users-journey-ang](https://backbase.io/developers/angular/libraries/authorized-users-journey-ang/4.0.2/index.html) to `4.0.2`
- Bump [@backbase/cards-management-journey-angular](https://backbase.io/developers/angular/libraries/cards-management-journey/5.1.0/changelog.html) to `5.1.0`
- Bump [@backbase/places-journey-ang](https://backbase.io/developers/angular/libraries/places-journey-ang/4.3.1/index.html) to `4.3.1`
- Bump [@backbase/credit-score-journey-ang](https://backbase.io/developers/angular/libraries/credit-score-journey-ang/2.4.0/index.html) to `2.4.0`
- Bump [@backbase/identity-auth](https://backbase.io/developers/angular/libraries/identity-auth/3.1.0/changelog.html) to `3.1.0`
- Bump [@backbase/identity-password-reset-journey](https://backbase.io/developers/angular/libraries/identity-password-reset-journey/3.1.0/changelog.html) to `3.1.0`
- Bump [@backbase/identity-self-enrollment-journey](https://backbase.io/developers/angular/libraries/identity-self-enrollment-journey/4.1.0/changelog.html) to `4.1.0`
- Bump [@backbase/identity-self-service-journey-ang](https://backbase.io/developers/angular/libraries/identity-self-service-journey-ang/5.2.0/changelog.html) to `5.2.0`
- Bump [@backbase/quick-transfer-journey-ang](https://backbase.io/developers/angular/libraries/quick-transfer-journey/4.1.0/index.html) to `4.1.0`
- Bump [@backbase/manage-upcoming-and-historical-payments-journey-ang](https://backbase.io/developers/angular/libraries/manage-upcoming-and-historical-payments-journey/4.1.0/index.html) to `4.1.0`
- Bump [@backbase/connect-external-accounts-journey-ang](https://backbase.io/developers/angular/libraries/connect-external-accounts-journey/4.1.0/index.html) to `4.1.0`
- Bump [@backbase/initiate-payment-journey-ang](https://backbase.io/developers/angular/libraries/ip-ang/4.2.0/changelog.html) to `4.2.0`
- Bump [@backbase/accounts-transactions-journey-ang](https://backbase.io/developers/angular/libraries/accounts-transactions-journey/6.9.2/index.html) to `6.9.2`
- Bump [@backbase/loans-retail-journey](https://backbase.io/developers/angular/libraries/loans-retail-journey/2.1.0/index.html) to `2.1.0`
- Update "transaction" journeys configuration to use `disputeTopicCode` and `inquireTopicCode`

## [2023.10]

### Fixed

- Fix flaky remote-config tests.
- Fix screen-readers-only elements inside `LayoutComponent`.
- Replaced the incorrect `i18n-heading` with `i18n` in `ActivityMonitorLayoutComponent` component

### Removed

- Remove `TemplateRegistry` provider that used to be imported from `@backbase/foundation-ang/core` as no longer supported
- Remove `StepUpAuthenticationComponent` as it was unused and no longer supported
- Remove `@backbase/accesscontrol-v2` from the app
- Remove `@backbase/manage-bill-payments-journey-ang`, `@backbase/manage-payees-journey-ang` and `@backbase/pay-bills-journey-ang` from the app; please use [@backbase/billpay-sso-journey-ang](https://backbase.io/developers/angular/libraries/billpay-sso-journey-ang/2.0.0/index.html) instead
- Remove `Environment.refactoredAccountsRouting` flag
- Remove the deprecated `CampaignSpaceJourneyBundleModule` and its related files:
  - removed: `src/app/journeys/accounts/accounts-transactions-wrapper/campaign-space-journey.module.ts`;
  - replaced by: `src/app/journeys/campaign/campaign-space-journey-bundle.module.ts`.
- Remove the deprecated `AccountsTransactionsJourneyBundleModule` and its related files:
  - the module has been copied and refactored as `AccountsTransactionsJourneyWrapperModule` and its related files;
  - the new module uses `WrappedJourneyLayoutModule`, which now contains the shared sidebar component (selector: `bb-wrapped-journey-layout`);
  - removed: `src/app/journeys/accounts/accounts-transactions-wrapper/wrapper-accounts-transactions-journey.module.ts`;
  - replaced by: `src/app/journeys/accounts/wrapper/accounts-transactions-journey-wrapper.module.ts`.
- Remove the deprecated `AccountsTransactionsJourneyWrapperComponent` (selector: `bb-accounts-transactions-journey-wrapper`):
  - the component has been copied and refactored as a separate shared component (selector: `bb-wrapped-journey-layout`; module path: `src/app/wrapped-journey-layout`);
  - removed: `src/app/journeys/accounts/accounts-transactions-wrapper/wrapper-accounts-transactions-journey.component.ts`;
  - replaced by: `src/app/wrapped-journey-layout/wrapped-journey-layout/wrapped-journey-layout.component.ts`.
- Remove the deprecated `AccountsTransactionsJourneyBundleModule` and its related files:
  - removed: `src/app/journeys/accounts/bundle-accounts-transactions-journey.module.ts`;
  - replaced by: `src/app/journeys/accounts/bundle/accounts-transactions-journey-bundle.module.ts`.
- Remove the deprecated `QuickActionsComponent` (selector: `bb-quick-actions`; module: `AccountsTransactionsJourneyBundleModule`) and its related files:
  - the component has been copied and moved as a separate journey component `SidebarQuickActionsComponent` (selector: `bb-sidebar-quick-actions`; module path: `src/app/journeys/sidebar-quick-actions`):
  - removed: `src/app/journeys/accounts/quick-actions.component.ts`;
  - replaced by: `src/app/journeys/sidebar-quick-actions/sidebar-quick-actions.component.ts`.
- Remove the deprecated `LoansJourneyBundleModule` and its related files:
  - removed: `src/app/journeys/accounts/loans/loans-journey-bundle.module.ts`;
  - replaced by: `src/app/journeys/loans/loans-journey-bundle.module.ts`.
- Remove the deprecated `NewLoansAdvanceJourneyBundleModule` and its related files:
  - removed: `src/app/journeys/accounts/loans/loan-payments/new-loan-advance-bundle.module.ts`;
  - replaced by: `src/app/journeys/loans/loan-payments/new-loan-advance-bundle.module.ts`.
- Remove the deprecated `NewLoansPaymentJourneyBundleModule` and its related files:
  - removed: `src/app/journeys/accounts/loans/loan-payments/new-loan-payment-bundle.module.ts`;
  - replaced by: `src/app/journeys/loans/loan-payments/new-loan-payment-bundle.module.ts`.
- Remove the deprecated `LoanPaymentJourneyWrapperComponent` and its related files:
  - removed: `src/app/journeys/accounts/loans/loan-payments/loan-payment-wrapper-component/loan-payment-wrapper.component.ts`;
  - replaced by: `src/app/journeys/loans/loan-payments/loan-payment-wrapper/loan-payment-wrapper.component.ts`.
- Remove the deprecated `LoanPaymentJourneyWrapperBundleModule` and its related files:
  - removed: `src/app/journeys/accounts/loans/loan-payments/loan-payment-wrapper-bundle.module.ts`;
  - replaced by: `src/app/journeys/loans/loan-payments/loan-payment-wrapper-bundle.module.ts`.

### Deprecated

### Added

- Added configurarion for metrics base path for campaign space journey

### Changed

- Migrate to Angular 16 and NX 16
- Bump Angular-related dependencies to comply with Angular 16
- Bump `@backbase/backbase-theme-retail-preset` to `3.0.0`
- Bump [@backbase/ui-ang](https://backbase.io/developers/angular/design-system/ui-ang/10.3.8/changelog.html) to `10.3.8`
- Bump [@backbase/foundation-ang](https://backbase.io/developers/angular/libraries/foundation/9.1.1/index.html) to `9.1.1`
- Bump [@backbase/dashboard-journey-ang](https://backbase.io/developers/angular/libraries/dashboard-journey/2.0.1/index.html) to `2.0.1`
- Bump [@backbase/notifications-ang](https://backbase.io/developers/angular/libraries/notifications-ang/4.0.0/index.html) to `4.0.0`
- Bump [@backbase/messages-client-inbox-journey-ang](https://backbase.io/developers/angular/libraries/messages-client-inbox-journey-ang/5.0.0/changelog.html) to `5.0.0`
- Bump [@backbase/retail-notification-preferences-journey-ang](https://backbase.io/developers/angular/libraries/retail-notification-preferences-journey-ang/2.0.0/index.html) to `2.0.0`
- Bump [@backbase/authorized-users-journey-ang](https://backbase.io/developers/angular/libraries/authorized-users-journey-ang/4.0.0/index.html) to `4.0.0`
- Bump [@backbase/identity-auth](https://backbase.io/developers/angular/libraries/identity-auth/3.0.1/changelog.html) to `3.0.1`
  - A new implementation of Transaction Signing has been introduced which support channel selection. The legacy implementation is used by default.
  - A new implementation of Step Up has been introduced which uses routing internally to navigate between views. This is enabled by default.
- Bump [@backbase/identity-password-reset-journey](https://backbase.io/developers/angular/libraries/identity-password-reset-journey/3.0.0/changelog.html) to `3.0.0`
- Bump [@backbase/identity-self-enrollment-journey](https://backbase.io/developers/angular/libraries/identity-self-enrollment-journey/4.0.0/changelog.html) to `4.0.0`
- Bump [@backbase/identity-self-service-journey-ang](https://backbase.io/developers/angular/libraries/identity-self-service-journey-ang/5.1.0/changelog.html) to `5.1.0`
  - Enabled the "change username" feature in the Login Security journey
  - Enabled the "improved phone number validation" feature in the User Profile journey
- Bump `@backbase/remote-config-ang` because of the migration to Angular 16
- Bump [@backbase/billpay-sso-journey-ang](https://backbase.io/developers/angular/libraries/billpay-sso-journey-ang/2.0.0/index.html) to `2.0.0`.
- Bump [@backbase/campaign-space-ang](https://backbase.io/developers/angular/libraries/campaign-space-ang/4.0.0/changelog.html) to `4.0.0`
- Enable the dashboard page (as the primary application page) by default
- Bump [@backbase/cards-management-journey-ang](https://backbase.io/developers/angular/libraries/cards-management-journey/5.0.1/changelog.html) to `5.0.1`
- Bump [@backbase/places-journey-ang](https://backbase.io/developers/angular/libraries/places-journey-ang/4.0.0/index.html) to `4.0.0`
- Bump [@backbase/budget-journey-ang](https://backbase.io/developers/angular/libraries/budget-journey-ang/4.0.1/index.html) to `4.0.1`
- Bump [@backbase/income-spending-analysis-journey-ang](https://backbase.io/developers/angular/libraries/income-spending-analysis-journey-ang/4.0.1/index.html) to `4.0.1`
- Bump [@backbase/manage-pockets-journey-ang](https://backbase.io/developers/angular/libraries/manage-pockets-journey-ang/4.0.1/index.html) to `4.0.1`
- Bump [@backbase/turnovers-journey-ang](https://backbase.io/developers/angular/libraries/turnovers-journey-ang/4.0.1/index.html) to `4.0.1`
- Bump [@backbase/credit-score-journey-ang](https://backbase.io/developers/angular/libraries/credit-score-journey-ang/2.2.1/index.html) to `2.2.1`
- Bump [@backbase/initiate-payment-journey-ang](https://backbase.io/developers/angular/libraries/ip-ang/3.5.0/changelog.html) to `4.0.0`
- Bump [@backbase/connect-external-accounts-journey-ang](https://backbase.io/developers/angular/libraries/connect-external-accounts-journey/4.0.0/index.html) to `4.0.0`
- Bump [@backbase/quick-transfer-journey-ang](https://backbase.io/developers/angular/libraries/quick-transfer-journey/4.0.0/index.html) to `4.0.0`
- Bump [@backbase/manage-upcoming-and-historical-payments-journey-ang](https://backbase.io/developers/angular/libraries/manage-upcoming-and-historical-payments-journey/4.0.0/index.html) to `4.0.0`
- Bump [@backbase/loans-retail-journey](https://backbase.io/developers/angular/libraries/loans-retail-journey/2.0.0/index.html) to `2.0.0`
- Bump [@backbase/accounts-transactions-journey-ang](https://backbase.io/developers/angular/libraries/accounts-transactions-journey/6.2.1/index.html) to `6.2.1`
- Bump `@backbase/real-time-communication-journey-ang` to `3.0.1`

## [2023.09-LTS]

### Changed

- Bump [`@backbase/account-statement-retail-journey-ang`](https://backbase.io/developers/angular/libraries/account-statement-retail-journey/4.2.2/index.html) to `4.2.2`
- Bump Real Time Communication Journey `@backbase/real-time-communication-journey-ang` to 2.2.0
- Removed custom `RtcCommunicationService` was and replaced with `RtcCommunicationService` from `@backbase/real-time-communication-journey-ang`
- Removed custom chat button (`RtcChatButtonComponent`) and replaced with default button implementation `EwaRtcClientComponent` from `@backbase/real-time-communication-journey-ang`.
- Bump [`@backbase/retail-notification-preferences-journey-ang`](https://backbase.io/developers/angular/libraries/retail-notification-preferences-journey-ang/1.4.0/index.html) to `1.4.0`
- Bump [`@backbase/notifications-ang`](https://backbase.io/developers/angular/libraries/notifications-ang/3.4.0/changelog.html) to `3.4.0`
- Bump [`@backbase/places-journey-ang`](https://backbase.io/developers/angular/libraries/places-journey-ang/3.0.6/index.html) to `3.0.6`
- Bump [`@backbase/manage-pockets-journey-ang`](https://backbase.io/developers/angular/libraries/manage-pockets-journey-ang/3.5.0/index.html) to `3.5.0`
- Bump [`@backbase/turnovers-journey-ang`](https://backbase.io/developers/angular/libraries/turnovers-journey-ang/3.2.0/index.html) to `3.3.0`
- Bump [`@backbase/income-spending-analysis-journey-ang`](https://backbase.io/developers/angular/libraries/income-spending-analysis-journey-ang/3.3.0/index.html) to `3.3.0`
- Bump [`@backbase/loans-retail-journey`](https://backbase.io/developers/angular/libraries/loans-retail-journey/1.5.1/index.html) to `1.5.1`
- Bump [`@backbase/initiate-payment-journey-ang`](https://backbase.io/developers/angular/libraries/ip-ang/3.5.0/changelog.html) to `3.5.0`
- Bump [`@backbase/identity-auth`](https://backbase.io/developers/angular/libraries/identity-auth/2.4.0/changelog.html) to `2.4.0`
- Bump [`@backbase/identity-self-service-journey-ang`](https://backbase.io/developers/angular/libraries/identity-self-service-journey-ang/4.4.0/changelog.html) to `4.4.0`
- Bump [`@backbase/identity-self-enrollment-journey`](https://backbase.io/developers/angular/libraries/identity-self-enrollment-journey/3.2.0/changelog.html) to `3.2.0`
- Bump [`@backbase/identity-password-reset-journey`](hhttps://backbase.io/developers/angular/libraries/identity-password-reset-journey/2.2.0/changelog.html) to `2.2.0`
- Bump [`@backbase/accounts-transactions-journey-ang`](https://backbase.io/developers/angular/libraries/accounts-transactions-journey/5.10.4/index.html) to `5.10.4`
- Bump [`@backbase/cards-management-journey-ang`](https://backbase.io/developers/angular/libraries/cards-management-journey/4.8.0/changelog.html) to `4.8.0`
- Bump [`@backbase/connect-external-accounts-journey-ang`](https://backbase.io/developers/angular/libraries/connect-external-accounts-journey/3.1.3/changelog.html) to `3.1.3`
- Bump [`@backbase/manage-upcoming-and-historical-payments-journey-ang`](https://backbase.io/developers/angular/libraries/manage-upcoming-and-historical-payments-journey/3.1.3/changelog.html) to `3.1.3`
- Bump [`@backbase/accounts-transactions-journey-ang`](https://backbase.io/developers/angular/libraries/accounts-transactions-journey/5.11.0/index.html) to `5.11.0`
- Bump [`@backbase/loans-retail-journey`](https://backbase.io/developers/angular/libraries/loans-retail-journey/1.5.2/index.html) to `1.5.2`

### Fixed

- Fixed translations for `@backbase/accounts-transactions-journey`

## [2023.08]

### Added

- Added e2e test cases for pocket details and transactions
- **Identity Self Service Journey** A success screen bundle has been added to support navigation on logout after username has changed.
- Provide service base path for address-autocomplete.
- Added [`@backbase/dashboard-journey-ang`](https://backbase.io/developers/angular/libraries/dashboard-journey/1.4.0/index.html):
  - The dashboard journey becomes the primary page of the application when enabled.
  - The accounts page is the primary page of the application when dashboard is disabled.
  - Dashboard is disabled by default; set `environment.dashboardEnabled = true` in `environment.ts` to enable it;
- Added `Environment.dashboardEnabled` flag to avoid breaking changes when introducing the dashboard journey;
- Added `Environment.refactoredAccountsRouting` flag to avoid breaking changes and continue using the accounts-related files and modules (see the **Deprecated** section below).
  - Set `environment.refactoredAccountsRouting = true` to start using the refactored files and modules and disable the deprecated ones.
- Added pocket details screen with pocket transactions.
- Added e2e test case for new travel notice entry point.

### Changed

- Bump [`@backbase/identity-auth`](https://backbase.io/developers/angular/libraries/identity-auth/2.3.0/changelog.html) to `2.3.0`
- Bump [`@backbase/identity-password-reset-journey`](hhttps://backbase.io/developers/angular/libraries/identity-password-reset-journey/2.1.0/changelog.html) to `2.1.0`
- Bump [`@backbase/identity-self-enrollment-journey`](https://backbase.io/developers/angular/libraries/identity-self-enrollment-journey/3.1.0/changelog.html) to `3.1.0`
- Bump [`@backbase/identity-self-service-journey-ang`](https://backbase.io/developers/angular/libraries/identity-self-service-journey-ang/4.2.0/changelog.html) to `4.2.0`
- Bump [`@backbase/contact-manager-journey-ang`](https://backbase.io/developers/angular/libraries/contact-manager-journey/3.5.0/index.html) to `3.5.0`
- Bump [`@backbase/messages-client-inbox-journey-ang`](https://backbase.io/developers/angular/libraries/messages-client-inbox-journey-ang/4.4.0/changelog.html) to `4.4.0`
- Bump [`@backbase/real-time-communication-journey-ang`](https://backbase.io/developers/angular/libraries/real-time-communication-journey-ang/2.1.7/index.html) to `2.1.7`
- Bump [`@backbase/billpay-sso-journey-ang`](https://backbase.io/developers/angular/libraries/billpay-sso-journey-ang/1.2.0/index.html) to `~1.2.0`
- Bump [`@backbase/dashboard-journey-ang`](https://backbase.io/developers/angular/libraries/dashboard-journey/1.3.0/index.html) to `1.3.0`
- Bump [`@backbase/ui-ang`](https://backbase.io/developers/angular/design-system/ui-ang/9.11.5/changelog.html) to `9.11.5`
- Bump [`@backbase/manage-pockets-journey-ang`](https://backbase.io/developers/angular/libraries/manage-pockets-journey-ang/3.4.5/index.html) to `3.4.5`
- Bump [`@backbase/income-spending-analysis-journey-ang`](https://backbase.io/developers/angular/libraries/income-spending-analysis-journey-ang/3.2.0/index.html) to `3.2.0`
- Bump [`@backbase/turnovers-journey-ang`](https://backbase.io/developers/angular/libraries/turnovers-journey-ang/3.2.0/index.html) to `3.2.0`
- Bump [`@backbase/accounts-transactions-journey-ang`](https://backbase.io/developers/angular/libraries/accounts-transactions-journey/5.6.1/index.html) to `5.6.1`
- Bump [`@backbase/retail-notification-preferences-journey-ang`](https://backbase.io/developers/angular/libraries/retail-notification-preferences-journey-ang/1.3.0/index.html) to `1.3.0`
- Bump [`@backbase/notifications-ang`](https://backbase.io/developers/angular/libraries/notifications-ang/3.3.0/changelog.html) to `3.3.0`
- Bump [`@backbase/loans-retail-journey`](https://backbase.io/developers/angular/libraries/loans-retail-journey/1.4.0/index.html) to `1.4.0`
- Bump [`@backbase/cards-management-journey-ang`](https://backbase.io/developers/angular/libraries/cards-management-journey/4.7.1/index.html) to `4.7.1`
- Bump [`@backbase/initiate-payment-journey-ang`](https://backbase.io/developers/angular/libraries/ip-ang/3.4.0/changelog.html) to `3.4.0`
- Bump [`@backbase/quick-transfer-journey-ang`](https://backbase.io/developers/angular/libraries/quick-transfer-journey/3.1.2/changelog.html) to `3.1.2`
- Bump [`@backbase/campaign-space-ang`](https://backbase.io/developers/angular/libraries/campaign-space-journey/3.1.0/changelog.html) to `3.1.0`
- Bump [`@backbase/connect-external-accounts-journey-ang`](https://backbase.io/developers/angular/libraries/connect-external-accounts-journey/3.1.2/changelog.html) to `3.1.2`
- Bump [`@backbase/manage-upcoming-and-historical-payments-journey-ang`](https://backbase.io/developers/angular/libraries/manage-upcoming-and-historical-payments-journey/3.1.2/changelog.html) to `3.1.2`
- Bump [`@backbase/places-journey-ang`](https://backbase.io/developers/angular/libraries/places-journey-ang/3.0.5/index.html) to `3.0.5`

### Fixed

- **Transaction Signing** Process is now cancelled if the users navigates away from the application
- Fixed missing assets in Travel Notice
- Sonar report addressed (code coverage, code smells, etc)
- Fixed scrolling issue for body when screen width is <=575px.
- Fixed user context menu positioning in medium screens.
- Fixed a locator in E2E Playwright test.
- Fixed double display issue of empty state.
- Fixed E2E Playwright test for model bank.
- Fixed cards e2e tests.
- Fixed scroll to the selected place from the places list.
- Fixed places e2e tests

### Deprecated

- Deprecating `@backbase/manage-bill-payments-journey-ang` and will be removed in 2023.10 major release. Please use [`@backbase/billpay-sso-journey-ang`](https://backbase.io/developers/angular/libraries/billpay-sso-journey-ang/latest/index.html) instead.
- Deprecating `@backbase/manage-payees-journey-ang` and will be removed in 2023.10 major release. Please use [`@backbase/billpay-sso-journey-ang`](https://backbase.io/developers/angular/libraries/billpay-sso-journey-ang/latest/index.html) instead.
- Deprecating `@backbase/pay-bills-journey-ang` and will be removed in 2023.10 major release. Please use [`@backbase/billpay-sso-journey-ang`](https://backbase.io/developers/angular/libraries/billpay-sso-journey-ang/latest/index.html) instead.
- Deprecating `@backbase/internal-billpay-journeys-common` and will be removed in 2023.10 major release. Please use [`@backbase/billpay-sso-journey-ang`](https://backbase.io/developers/angular/libraries/billpay-sso-journey-ang/latest/index.html) instead.
- Deprecating `Pay a Bill` from quick links and will be removed in 2023.10 major release. Please use `Bill Pay` menu option from main menu instead.
- `Environment.dashboardEnabled` flag is deprecated.
- `Environment.refactoredAccountsRouting` flag is deprecated.
- `CampaignSpaceJourneyBundleModule` has been copied and moved as a separate journey module:
  - deprecated: `src/app/journeys/accounts/accounts-transactions-wrapper/campaign-space-journey.module.ts`;
  - replaced by: `src/app/journeys/campaign/campaign-space-journey-bundle.module.ts`.
- `AccountsTransactionsJourneyBundleModule` (it originally has incorrect naming) has been copied and refactored as `AccountsTransactionsJourneyWrapperModule`:
  - the new module uses `WrappedJourneyLayoutModule`, which now contains the shared sidebar component (selector: `bb-wrapped-journey-layout`):
  - deprecated: `src/app/journeys/accounts/accounts-transactions-wrapper/wrapper-accounts-transactions-journey.module.ts`;
  - replaced by: `src/app/journeys/accounts/wrapper/accounts-transactions-journey-wrapper.module.ts`.
- `AccountsTransactionsJourneyWrapperComponent` (selector: `bb-accounts-transactions-journey-wrapper`) has been copied and refactored as a separate shared component (selector: `bb-wrapped-journey-layout`; module path: `src/app/wrapped-journey-layout`):
  - deprecated: `src/app/journeys/accounts/accounts-transactions-wrapper/wrapper-accounts-transactions-journey.component.ts`;
  - replaced by: `src/app/wrapped-journey-layout/wrapped-journey-layout/wrapped-journey-layout.component.ts`.
- `AccountsTransactionsJourneyBundleModule` has been copied and moved:
  - deprecated: `src/app/journeys/accounts/bundle-accounts-transactions-journey.module.ts`;
  - replaced by: `src/app/journeys/accounts/bundle/accounts-transactions-journey-bundle.module.ts`.
- `QuickActionsComponent` (selector: `bb-quick-actions`; module: `AccountsTransactionsJourneyBundleModule`) has been copied and moved as a separate journey component `SidebarQuickActionsComponent` (selector: `bb-sidebar-quick-actions`; module path: `src/app/journeys/sidebar-quick-actions`):
  - deprecated: `src/app/journeys/accounts/quick-actions.component.ts`;
  - replaced by: `src/app/journeys/sidebar-quick-actions/sidebar-quick-actions.component.ts`.
- `LoansJourneyBundleModule` has been copied and moved:
  - deprecated: `src/app/journeys/accounts/loans/loans-journey-bundle.module.ts`;
  - replaced by: `src/app/journeys/loans/loans-journey-bundle.module.ts`.
- `NewLoansAdvanceJourneyBundleModule` has been copied and moved:
  - deprecated: `src/app/journeys/accounts/loans/loan-payments/new-loan-advance-bundle.module.ts`;
  - replaced by: `src/app/journeys/loans/loan-payments/new-loan-advance-bundle.module.ts`.
- `NewLoansPaymentJourneyBundleModule` has been copied and moved:
  - deprecated: `src/app/journeys/accounts/loans/loan-payments/new-loan-payment-bundle.module.ts`;
  - replaced by: `src/app/journeys/loans/loan-payments/new-loan-payment-bundle.module.ts`.
- `LoanPaymentJourneyWrapperComponent` has been copied and moved:
  - deprecated: `src/app/journeys/accounts/loans/loan-payments/loan-payment-wrapper-component/loan-payment-wrapper.component.ts`;
  - replaced by: `src/app/journeys/loans/loan-payments/loan-payment-wrapper/loan-payment-wrapper.component.ts`.
- `LoanPaymentJourneyWrapperBundleModule` has been copied and moved:
  - deprecated: `src/app/journeys/accounts/loans/loan-payments/loan-payment-wrapper-bundle.module.ts`;
  - replaced by: `src/app/journeys/loans/loan-payments/loan-payment-wrapper-bundle.module.ts`.

## [2023.07]

### Added

- Added e2e test cases for notification list
- Added e2e test cases for low balance toggle of notification preference.
- Added e2e test cases for notifications badge.
- Added e2e test cases for debits and credits toggle of notification preference.
- Added e2e test cases for credit score journey

### Changed

- Bump [`@backbase/contact-journey-ang`](https://backbase.io/developers/angular/libraries/contacts-journey/3.6.0/index.html) to `~3.6.0`
- Bump [`@backbase/contact-manager-journey-ang`](https://backbase.io/developers/angular/libraries/contact-manager-journey/3.4.0/index.html) to `~3.4.0`
- Bump [`@backbase/account-statement-business-journey-ang`](https://backbase.io/developers/angular/libraries/account-statement-business-journey/4.2.0/index.html) to `4.2.0`
- Bump [`@backbase/account-statement-retail-journey-ang`](https://backbase.io/developers/angular/libraries/account-statement-retail-journey/4.2.0/index.html) to `4.2.0`
- Bump [`@backbase/manage-statements-retail-journey-ang`](https://backbase.io/developers/angular/libraries/manage-statements-retail-journey/2.1.0/index.html) to `2.1.0`
- Mocks folder structure changed, new mocks are generated from the latest clients versions
- Bump [`@backbase/messages-client-inbox-journey-ang`](https://backbase.io/developers/angular/libraries/messages-client-inbox-journey-ang/4.3.0/changelog.html) to `4.3.0`
- Bump [`@backbase/retail-notification-preferences-journey-ang`](https://backbase.io/developers/angular/libraries/retail-notification-preferences-journey-ang/1.2.1/changelog.html) to `1.2.1`
- Bump [`@backbase/loans-retail-journey`](https://backbase.io/developers/angular/libraries/loans-retail-journey/1.3.1/index.html) to `1.3.1`
- Bump [`@backbase/initiate-payment-journey-ang`](https://backbase.io/developers/angular/libraries/ip-ang/3.3.0/changelog.html) to `3.3.0`
- Bump [`@backbase/cards-management-journey-ang`](https://backbase.io/developers/angular/libraries/cards-management-journey/4.6.0/changelog.html) to `4.6.0`
- Bump [`@backbase/accounts-transactions-journey-ang`](https://backbase.io/developers/angular/libraries/accounts-transactions-journey/5.5.0/index.html) to `5.5.0`

### Fixed

- Updated `pay a bill` quick link entitlements with `Bill Pay` journey entitlements [GAR-1249]
- Provide self-service base paths
- Fixed the bug for user context menu positioning in smaller screens.

## [2023.06]

### Added

- Added e2e tests case scenarios for message conversation details
- Added e2e test case scenarios for compose message
- Added new way of calling Employee messages API & updated messages e2e tests
- Added messages e2e test cases for mark message as read/unread functionality.
- Added integration for new journey [`@backbase/credit-score-journey-ang`](https://backbase.io/developers/angular/libraries/credit-score-journey-ang/1.0.0/index.html)
- Added e2e test case scenarios for delete messages.
- Added e2e test case scenarios for reply messages functionality.
- Added e2e test case scenarios for view incoming and sent messages tables.
- Added e2e test case scenarios for delete notification.
- Added more e2e test cases for remote-config.

### Changed

- Bump [`@backbase/ui-ang`](https://backbase.io/developers/angular/design-system/ui-ang/9.7.14/changelog.html) to `9.7.14`
- Bump [`@backbase/notifications-ang`](https://backbase.io/developers/angular/libraries/notifications-ang/3.2.1/changelog.html) to `3.2.1`
- Bump [`@backbase/cards-management-journey-ang`](https://backbase.io/developers/angular/libraries/cards-management-journey/4.5.0/changelog.html) to `4.5.0`
- Bump [`@backbase/manage-pockets-journey-ang`](https://backbase.io/developers/angular/libraries/manage-pockets-journey/3.3.0/changelog.html) to `3.3.0`
- Bump [`@backbase/identity-self-service-journey-ang`](https://backbase.io/developers/angular/libraries/identity-self-service-journey-ang/4.1.0/changelog.html) to `4.1.0` to support centralised configuration for phone validation
- Bump [`@backbase/accounts-transactions-journey-ang`](https://backbase.io/developers/angular/libraries/accounts-transactions-journey/5.3.10/index.html) to `5.3.10`
- Bump [`@backbase/loans-retail-journey`](https://backbase.io/developers/angular/libraries/loans-retail-journey/1.2.2/index.html) to `1.2.2`
- Bump [`@backbase/initiate-payment-journey-ang`](https://backbase.io/developers/angular/libraries/ip-ang/3.2.0/changelog.html) to `3.2.0`
- Bump [`@backbase/connect-external-accounts-journey-ang`](https://backbase.io/developers/angular/libraries/connect-external-accounts-journey/3.1.1/changelog.html) to `3.1.1`
- Bump [`@backbase/manage-upcoming-and-historical-payments-journey-ang`](https://backbase.io/developers/angular/libraries/manage-upcoming-and-historical-payments-journey/3.1.1/changelog.html) to `3.1.1`
- Bump [`@backbase/quick-transfer-journey-ang`](https://backbase.io/developers/angular/libraries/quick-transfer-journey/3.1.1/changelog.html) to `3.1.1`

### Fixed

- Fixed accessibility issues in Navigation bar
- Manage web app session pre-expire pop-up for user's actions in bill pay journey (SSO Iframe).

## [2023.05]

### Removed

- Remove deprecated mocks action-recipes

### Added

- Add e2e test to View historical payments with status
- Added mocks for notifications-preferences
- Add popup on successful update of notification preferences
- Add message save and view draft e2e tests
- Add RTC Audio happy path test, add client for DBS & Twilio APIs
- Bump Real Time Communication Journey `@backbase/real-time-communication-journey-ang` to 2.1.4
- Updated arai-label for RTC chat icon
- Added new journey Bill Pay SSO v1.0.0 and deprecating native Bill Pay journeys [GAR-300]
- Added catalog file to integrate with software catalog [WEB2-2083]

### Changed

- Bump `@backbase/places-journey-ang` to `3.0.3`
- Bump `@backbase/ui-ang` to `9.5.1`
- Bump `@backbase/retail-notification-preferences-journey-ang` to `1.2.0`
- Bump `@backbase/messages-client-inbox-journey-ang` to `4.2.0`
- Bump `@backbase/notifications-ang` to `3.2.0`
- Bump `@backbase/manage-statements-retail-journey-ang` to `2.0.3`
- Bump `@backbase/account-statement-retail-journey-ang` to `4.1.1`
- Bump `@backbase/contact-manager-journey-ang` to `3.2.0`
- Bump `@backbase/loans-retail-journey` to `1.1.3`
- Bump `@backbase/cards-management-journey-ang` to `4.3.0`
  - `TravelNoticesHttpService` has been added to the list of providers in CardsManagementJourney [NVCTS-2149]
  - Removed reference of @backbase/cards-management-journey-ang in bankingsapp monorepo `app-data.module.ts` file [NVCTS-2149]
  - Implemented and exported a new service `CardActionsService` in order to have control over the visibility of the Card Details section [NVCTS-1972]
  - Implemented a new pipe `cardFeatureAvailable` which makes use of `CardActionsService` [NVCTS-1972]
- Bump `@backbase/identity-password-reset-journey` to `2.0.3`
- Bump `@backbase/identity-self-enrollment-journey` to `3.0.3`
- **Shared Auth**

  - The `AuthGuard`, `AuthEventsHandlerService`, and `ActivityMonitorComponent` all utilise `@backbase/identity-auth` `AuthService` to perform `initLoginFlow` which provides a `ui_locales` property to the Identity Auth Server on logout.

- Bump `@backbase/manage-upcoming-and-historical-payments-journey-ang` to version `3.1.0` contains configuration to show raw dates instead of today / tomorrow texts
- Bump `@backbase/connect-external-accounts-journey-ang` to version `3.1.0` contains internal updates and bugfixes
- Bump `@backbase/budget-journey-ang` to `3.1.0` contains internal updates and bugfixes
- Bump `@backbase/income-spending-analysis-journey-ang` to `3.1.0`
  - Fixed an issue with income/spending analysis chart showing `undefined` instead of currency code [NVCTS-2180]
  - Fixed an `a11y` issue with income/spending analysis 6 and 12 months chart [NVCTS-1893]
  - Fixed an `a11y` issue with Income/Spending analysis tabList, tabs and tabPanel not being properly linked [NVCTS-2234]
- Bump `@backbase/turnovers-journey-ang` to `3.1.0`
  - Fixed an `a11y` issue with Cash Flow chart, not fully representing the data shown in the tooltip [NVCTS-2236]
  - Fixed an `a11y` issue with Cash Flow tabList, tabs and tabPanel not being properly linked [NVCTS-2235]
  - [Internal] Removed explicit `dependencies` from library, now entirely managed via `nx` [NVCTS-2212]
- Bump `@backbase/manage-pockets-journey-ang` to `3.2.0`
  - [Internal] Removed explicit `dependencies` from library, now entirely managed via `nx` [NVCTS-2212]

### Fixed

- **Activity Monitor** - `activity-monitor-layout.component.html`:
- `H3` header is now `H2`, meeting AA WCAG conformance level
- Fixed screen reader not announcing session timeout modal by adding a visually hidden alert
- Fixed CARDS_MANAGEMENT_JOURNEY_BASE_PATH issue not being provided correctly in travel-notice
- Fixed accessibility issues in Compose Message Modal Window

## [2023.04]

### Added

- **Identity Auth** - Added push notification support to Step Up
- Added 'My Profile' header to the Self Service journey
- Updated `@backbase/identity-self-service-journey-ang` to support centralised configuration for email validation

### Changed

- **Identity Auth** - patched with UX updates to several views within `Step Up` for better readability.
- **Self Enrollment Journey** - patched with UX updates to `Two Fa Selection View` & `Contact Advisor View` for better readability.
- Bump `@backbase/business-notification-preferences-journey-ang` to `1.0.0`
- Bump `@backbase/messages-client-inbox-journey-ang` to `4.1.0`
- Bump `@backbase/notifications-ang` to `3.1.0`
- Bump `@backbase/cards-management-journey-ang` to `4.1.2`.
  - New `LimitFrequencyMappingConfigToken` that allows the addition of new frequencies via token, and also provides proper translatable strings to the app [NVCTS-1906]
  - New `defaultLimitFrequencyMapping` to define default values for a new `LimitFrequencyMappingConfigToken` token [NVCTS-1906]
  - New `PaymentCardLimitFrequencyMapping` interface to strong type `defaultLimitFrequencyMapping` [NVCTS-1906]
  - New `PaymentCardLimitFrequency` enum to strong type `defaultLimitFrequencyMapping` [NVCTS-1906]
  - `Travel Notice`: `Select All` checkbox now initiates unselected if no cards are elligible
  - `Travel Notice`: `Select All` checkbox now correctly gets marked as unselected when all the individual cards are manually unselected [NVCTS-2051]
  - Removed cache from `getCard` and `getCards`, all the information will now be fetched on demand to make sure all displayed data is up to date [NVCTS-2053]
  - Updated `bb-payment-card-limit` template to remove use of `titleCase` pipe. Text now relies on a proper string, and not the `enum` provided by the API [NVCTS-1906]
  - `defaultLimitChannelMapping` now has `i18n` tags to facilitate translations [NVCTS-1906]
  - `defaultReplacementReasonMapping` now has `i18n` tags to facilitate translations [NVCTS-1906]
- Bump `@backbase/turnovers-journey-ang` to `3.0.1`
  - Fixed Accessibility issues in cash flow [NVCTS-1990]
- Bump `@backbase/manage-pockets-journey-ang` to `3.1.0`
  - Added missing exports for `PocketTransferItem` and `TransferTypeEnum` [NVCTS-1004]
  - Integrated Payment Journey for Pocket Transfers with it's required Communication Service [NVCTS-1004]
  - Added journey configuration `usePaymentJourney` to opt-in for Payment Journey transfers. Default value `false` [NVCTS-1004]
  - Implemented `Schedule Transfer` for `Add Money` (Payment Journey) [NVCTS-1004]
  - Bump `@backbase/initiate-payment-journey-ang` to `3.1.0`
  - Bump `@backbase/places-journey-ang` to `3.0.3`
  - Bump `@backbase/ui-ang` to `9.4.0`
  - Bump `@backbase/manage-statements-retail-journey-ang` to `2.0.3`
  - Bump `@backbase/account-statement-retail-journey-ang` to `4.1.1`
  - Bump `@backbase/contact-manager-journey-ang` to `3.2.0`
  - Changed Payment related http-clients references in communication service to the journeys ones [MAINT-22245]

### Fixed

- Provide password reset base path correctly
- Added missing aria-labels in `retail-layout` component.
- Fixed skip to main content to be `a` tag instead of `button` tag
- Fixed missing `asset` on Empty Travel Notices

## [2023.03]

### Removed

- Removed `@backbase/manage-statements-journey-ang` [CONT-1056]
- Removed `@backbase/rtc-v1-client-ang` [YIN-516]

### Added

- Added `@backbase/manage-statements-retail-journey-ang` [CONT-1056]
- Introduce new business function for messages and added FE validation, based on user permissions.

### Changed

- Bump `@backbase/remote-config-ang`
- Bump `@backbase/contact-journey-ang`and `@backbase/contact-manager-journey-ang` [CONT-1056]
- Bump `@backbase/manage-bill-payments-journey-ang`, `@backbase/manage-payees-journey-ang` & `@backbase/pay-bills-journey-ang` with angular 14 and bootstrap 5
- Bump `@backbase/places-journey-ang` to version `3.0.0` [YIN-434]
- Bump `@backbase/account-statement-retail-journey-ang` and `@backbase/account-statements-http-ang` [CONT-1056]
- Update Angular to version 14
- Update Bootstrap to version 5
- Update ui-ang to version 9
- Apply new theme for the app
- Add default router configuration to `RoutableModalModule`
- `@backbase/accounts-transations-journey` - remove `defaultUseShortCurrencyValue` from quick actions configuration to utilise global `mapCurrency` configuration.
- **Self Enrollment & Password Reset Journey** - journey wrapper updated to make use of `bb-stack`
- Replaced `@backbase/actions-retail-notification-preferences-journey-ang` with `@backbase/retail-notification-preferences-journey-ang`.
- Remove `notificationPreferencesApiMode` variable from `environment`.
- Update identity journeys to provide Angular 14 support
- Fixed self service navigation item text
- Bump `@backbase/accounts-transactions-journey-ang` to version `5.0.0`:
  - Migrate to `angular@14.x`, `foundation@8.x`, `ui-ang@9.x`, `Bootstrap@5.x` and `@backbase/messages-v5-http-ang`.
  - Rename transactions widgets to internal dependencies `@backbase/internal-at-shared-transactions-common-ang@1.0.0` and `@backbase/internal-at-shared-transactions-list-feature-ang@1.0.0`.
  - Remove deprecated APIs.
  - Bump `@backbase/authorized-users-journey-ang` to version `3.0.1`
  - replace `@backbase/retail-loans-journey-ang` with version `1.0.7` of @backbase/loans-retail-journey`
  - remove `@backbase/initiate-loans-payment-journey`
  - change configuration of bandle modules for loans payment
- Bump Entitlements capabilities minor fixes for release 2023.03
- Bump `@backbase/retail-notification-preferences-journey-ang` to `1.0.1`
- Bump `@backbase/messages-client-inbox-journey-ang` to `4.0.0`
- Bump `@backbase/notifications-ang` to `3.0.0`
- Bump `@backbase/campaign-space-ang` to `3.0.1`
- Change view height css unit from `vb` to `vh`
- Bump `@backbase/quick-transfer-journey-ang` to version `3.0.0`
- Bump `@backbase/manage-upcoming-and-historical-payments-journey-ang` to version `3.0.0`
- Bump `@backbase/connect-external-accounts-journey-ang` to version `3.0.0`
- Bump `@backbase/budget-journey-ang` to `3.0.0`
  - Removed dependency on `@backbase/product-summary-common-ang` [NVCTS-1971]
  - Migration to Angular 14 [NVCTS-1898]
  - Updated the budgets BE api to v3 [NVCTS-1771]
  - The `BUDGETING_BASE_PATH` has been removed and replaced with `BUDGETING_V3_BASE_PATH` [NVCTS-1771]
  - Migration to Bootstrap 5 [NVCTS-1897]
  - Fixed issues with new preset [NVCTS-2077]
- Bump `@backbase/income-spending-analysis-journey-ang` to `3.0.0`
  - Removed dependency on `@backbase/product-summary-account-selector-widget-ang` [NVCTS-1971]
  - Renamed `i18n` id tags from `product-summary-account-selector`
  - Migration to Angular 14 [NVCTS-1898]
  - Migration to Bootstrap 5 [NVCTS-1897]
- Bump `@backbase/manage-pockets-journey-ang` to `3.0.0`
  - Removed dependency on `@backbase/product-summary-common-ang` [NVCTS-1971]
  - Migration to Angular 14 [NVCTS-1898]
  - Migration to Bootstrap 5 [NVCTS-1897]
  - Fixed duplicated `i18n` keys
- Bump `@backbase/turnovers-journey-ang` to `3.0.0`
  - Removed dependency on `@backbase/product-summary-account-selector-widget-ang` [NVCTS-1971]
  - Renamed `i18n` id tags from `product-summary-account-selector`
  - Migration to Angular 14 [NVCTS-1898]
  - Migration to Bootstrap 5 [NVCTS-1897]
  - Fixed color issue with turnovers bar charts [NVCTS-2078]
- Bump `@backbase/ui-ang` to `9.1.0`
- Bump `@backbase/accounts-transactions-journey-ang` to version `5.1.3` - Added nested categories feature.
- Bump Real Time Communication Journey `@backbase/real-time-communication-journey-ang` to 2.1.2
- Added RTL for Real Time Communication Journey chat button.
- Updated unit tests for `RetailNotificationPreferencesJourneyBundleModule`.
- `contact-manager-journey` - define contact manager base path for http client
- Read `disputeTopicId` and `inquireTopicId` from `environment` parameters in `@backbase/accounts-transactions-journey-ang`.

## [2023.02]

### Added

- Basic setup and tests for Account Statements Journey

### Changed

- Bump Entitlements capabilities for release 2023.02
- Bump `@backbase/initiate-payment-journey-ang` to version `2.6.4`, `@backbase/manage-payment-templates-journey-ang` to version `4.6.1`, `@backbase/manage-payments-journey-ang` to version `3.6.2`. and `@backbase/stop-checks-journey-ang` to version `3.6.1`
- Bump `@backbase/identity-self-service-journey-ang` to version `3.0.0`
- Bump `@backbase/accounts-transactions-journey-ang` to version `4.29.0`. Add EAA flows, fix `0` values displaying.
- Bump `@backbase/initiate-loans-payment-journey` to version `2.3.4`
- Bump `@backbase/retail-loans-journey-ang` to version `2.4.4`
- Bump `@backbase/quick-transfer-journey-ang` to version `2.6.1`, `@backbase/manage-upcoming-and-historical-payments-journey-ang` to version `2.3.1`, `@backbase/connect-external-accounts-journey-ang` to version `2.4.0` - contains ui and a11y bugfixes
- **Self Enrollment Journey** - patched to correctly ignore `accountNumberMaxLength` when edition is set to Universal.
- Bump `@backbase/company-permissions-journey-ang` to version `2.10.2`

### Fixed

- Fix Quick Actions navigation overflow on small screens. [WEB2-1892]
- Bump `@backbase/messages-client-inbox-journey-ang` to `3.4.0`
- Fix focus issues in main navigation

### Deprecated

- Bump billpay journeys, deprecating `@backbase/billpay-journeys-common` internal lib

## [2023.01]

### Added

- Add env configuration `accountsUseArrangementViewsApi` to configure arrangements/view API usage in `accounts-transactions-journey-ang` [PRSUM-8706]
- Add back button in payment edit flow, update loan payment page titles [KB-2291]
- Add default value for `displayNotificationSettingsButton$` property to fix `ExpressionChangedAfterItHasBeenCheckedError` error [DLRN-4525]
- Update identity journeys to provide RTL support.

### Changed

- Bump `@backbase/authorized-users-journey-ang` and `@backbase/places-journey-ang` to `2.1.0` - apply nx executor for handling peer deps.
- Change `arrangementViewsName` journey configuration to `legacy-summary` in `@backbase/accounts-transactions-journey-ang`.
- Bump `@backbase/account-statement-retail-journey-ang` to `3.4.1` - journey title is configurable
- Bump `@backbase/manage-statements-journey-ang` to `1.1.0` - improved account number masking
- **Shared Auth** - All usages of `revokeTokenAndLogout` have been changed to `logOut` as the `LOGOUT` event was not being generated in the Identity Audit logs.
- **Self Enrollment Journey** - Universal edition selected as default in retail app, to select the US edition modify the `SelfEnrollmentJourneyConfig`.
- Bump `@backbase/accounts-transactions-journey-ang` to version `4.22.1`. Read transactions list configurations from journey configuration service.
- Bump `@backbase/accounts-transactions-journey-ang` to version `4.25.0`. Disable proof of transaction / Support RTL.
- **Identity Auth** - Issuer URLs beginning with `auth` will no longer be transformed incorrectly when the user responds to a Step Up challenge
- Bump `@backbase/initiate-loans-payment-journey`,`@backbase/loans-journey-ang` and `@backbase/retail-loans-journey-ang` to fix Visibility Service injection error
- Bump retail payment journeys, add support for loan-payment in Upcoming Payments Journey
- Bump `@backbase/manage-upcoming-and-historical-payments-journey-ang` to 2.3.0 - updates incorrect peer dependencies, supports new spec for `"@backbase/payment-order-http-ang`
- Bump `@backbase/connect-external-accounts-journey-ang` to 2.3.0 and `@backbase/quick-transfer-journey-ang` to 2.6.0 - updates incorrect peer dependencies
- Bump `@backbase/ui-ang` to version `8.9.0`
- Bump `@backbase/manage-pockets-journey-ang` to `2.0.7`.
  - Show goal amount in pocket list view with decimals [NVCTS-1719]
  - Goal date validation messages are now more specific and accessible [NVCTS-1272]
  - Removed extra usage of date pipe in pocket deadline [NVCTS-1716]
- Bump `@backbase/cards-management-journey-ang` to `3.1.7`.
  - Fixed card limit error message formatting ignoring the currency [NVCTS-1395]

### Fixed

- Fix `Send money to someone` title by updating translation keys
- Fix clipped focus on buttons in `@backbase/contact-manager-journey-ang`
- Fix automation tests for `@backbase/manage-pockets-journey-ang`
- **Self Enrollment Journey** - `accountNumberMaxLength` configuration now will allow entries with fewer digits than the limit to be submitted as its name suggests.
- Fix account-details failing e2e test.

## [2022.12]

### Deprecated

- `bb-session-timeout-modal` is deprecated and will be removed in 2023.9 release. Please use `bb-activity-monitor` instead.

### Added

- Add missing `ACCOUNTS_TRANSACTIONS_JOURNEY_EXTERNAL_ACCOUNT_AGGREGATOR_BASE_PATH` in `accounts-transactions-journey-ang` bundle. [TRANS-7473]
- Integrated Password Reset journey [IDULS-578]
- Integrated Self Enrollment journey [IDWOJ-1489]
- Added E2E test for messages
- Replaced usage of `bb-session-timeout-modal` with `bb-activity-monitor` fixing an issue with logouts not occurring after long inactivity when the web app is run in a background tab.

### Changed

- Bump Entitlements capabilities for release 2022.12
- Bump `@backbase/identity-auth` to `1.4.0` - New header for transaction signing for reverse a batch
- Bump `@backbase/initiate-loans-payment-journey` to version `2.1.2`
- Bump `@backbase/retail-loans-journey-ang` to version `2.2.2`
- Bump `@backbase/loans-http-ang` to version `1.0.0`,
- Bump Entitlements capabilities for release 2022.11
- Bump `@backbase/manage-pockets-journey-ang` to `2.0.2` - Fixed empty screen conditions for it to be displayed [MAINT-19558]
- Bump `@backbase/cards-management-journey-ang` to `3.1.3` - Exposed `CardDetailsComponent`, `CardsListComponent`, `CardsTravelNoticeComponent`, `PaymentCardComponent` [MAINT-18406]
- Update `my-accounts` page locators, Exporting a Single Transaction as a PDF Statement [TRANS-3900].
- Bump `@backbase/ui-ang` to version `8.6.0-pr.11`
- Bump `@backbase/arrangement-manager-http-ang` to version `3.2.0`
- Bump `@backbase/accounts-transactions-journey-ang` to version `4.14.0`
- Bump `@backbase/identity-self-service-journey-ang` to version `2.2.0`
- Bump `@backbase/initiate-payment-journey-ang` to version `2.4.3`, `@backbase/manage-payment-templates-journey-ang` to version `4.4.2`, `@backbase/manage-payments-journey-ang` to version `3.4.2`. and `@backbase/stop-checks-journey-ang` to version `3.4.2`
- Removed custom mock provider for actions
- Bump `@backbase/cards-management-journey-ang` to `3.1.4` - Fixed unexpected form submission on enter key press. [NVCTS-1720]
- Bump `@backbase/manage-pockets-journey-ang` to `2.0.4` - Proper handling of balance display on pocket cards to be RTL friendly [NVCTS-1552]
- Bump `@backbase/income-spending-analysis-journey-ang` to `2.1.3` - Fixed RTL related issues [NVCTS-1493]
- `@backbase/income-spending-analysis-journey-ang` - Spending analysis: Fixed an issue with categories list being summed up when they should not be. [NVCTS-1760]
- Bump `@backbase/budget-journey-ang` to `2.0.1` - Proper internal structure alignment (Nx dependencies) [NVCTS-1774]
- Bump `@backbase/turnovers-journey-ang` to `2.0.3` - Fixed RTL related issues [NVCTS-1493]
- Bump `@backbase/notifications-ang` to `2.2.0`, `@backbase/actions-retail-notification-preferences-journey-ang` to `4.5.0`, `@backbase/messages-client-inbox-journey-ang` to `3.1.0`, `@backbase/campaign-space-ang` to `2.1.0`
- Bump `@backbase/connect-external-accounts-journey-ang` to version `2.2.1`, `@backbase/manage-upcoming-and-historical-payments-journey-ang` to version `2.1.3`, `@backbase/quick-transfer-journey-ang` to version `2.4.1`
- Fix failing payment e2e tests, refactor stop checks journey tests to be against modelbank env
- Bump `@backbase/accounts-transactions-journey-ang` to version `4.18.0`. Provide configuration for translating the transaction type field into user friendly language.

### Fixed

- corrected registry for product release

## [2022.11]

### Changed

- Bump `@backbase/account-statement-retail-journey-ang` to version `3.2.0`
- Bump `@backbase/account-statements-http-ang` to version `2.3.0`
- Bump `@backbase/contact-manager-journey-ang` to `2.2.0`
- Bump `@backbase/ui-ang` to version `8.3.0` - fix displaying of "initiate payment" dialog [MAINT-18078]
- Bump `@backbase/ui-ang` to version `~8.4.0-pr.1` and `@backbase/places-journey-ang` to fix [MAINT-14722]
- Bump `@backbase/income-spending-analysis-journey-ang` to `2.1.0` - limit donut chart for one month view in spending|income analysis [NVCTS-1432]
- `@backbase/income-spending-analysis-journey-ang` - Align month-selector buttons with design-works [NVCTS-1432]
- Bump `@backbase/turnovers-journey-ang` to `2.0.1` - Align month-selector buttons with design-works [NVCTS-1432]
- Bump `@backbase/places-journey-ang` to `2.0.4` - Fix work-time UI inconsistency on tablet screen [WEB2-1737]
- Bump `@backbase/authorized-users-journey-ang` to `2.0.1` - expose assets path token [MAINT-18518]
- Bump `@backbase/accounts-transactions-journey-ang` to version `4.10.0` - Include EAA (External Account Aggregation) feature and add Api docs to `accounts-transactions-journey-ang`.
- Bump `@backbase/identity-self-service-journey-ang` to `2.1.0` - Secondary addresses for address autocomplete [IDULS-1185]
- Added e2e testing for `@backbase/stop-checks-journey-ang` [KB-1993]

### Fixed

- Fix the spacing issue when the maintenance banner is dismissed [RCON-45]

### Added

- Add Remote Config feature flags in the Retail Web App [RCON-45]

## [2022.10.1]

### Changed

- Bump `@backbase/retail-loans-journey-ang` to version `2.0.2`
- Change label header for Edit Payment - Internal transfer, M2M and P2P [KB-2123]
- Bump `@backbase/manage-pockets-journey-ang` - Fixed aria attributes not being bound to a value. [NVCTS-1281]
- `@backbase/cards-management-journey-ang` - Added misssing exports to the public exportable apis. [MAINT-18406]
- `@backbase/cards-management-journey-ang`- Fixed the issue with plain texts being focusable via tab key. [NVCTS-1553]
- `@backbase/pay-bills-journey-ang` - Fixed total payment visibility issue after deleting payee [GAR-420]
- `@backbase/manage-payees-journey-ang` - Fixed issue when user can not exit payee on edit page when clicking lose changes button [GAR-430]
- Add loan payments e2e tests [KB-2271]
- Bump `@backbase/retail-loans-journey-ang` to version `2.0.5` - Fix dispay amount options on create loan payment [CME-2504]
- Bump `@backbase/actions-retail-notification-preferences-journey-ang` to version `3.1.2`
- Bump `@backbase/notifications-ang` to version `2.1.3`

### Fixed

- Fixed 'Added a test case to add electronic payee and removed unused code'

### Added

- New app version display to the `bb-user-context-menu-widget` from environment variables [NOJIRA]

## [2022.10]

### Changed

- Bump Entitlements capabilities for release 2022.10
- Bump `@backbase/cards-management-journey-ang` - Implemented new journey configuration named `cardPinLength`. [NVCTS-1353]
- Bump Payments Journeys for release 2022.10 - contains bank timezone configuration for payment submit

## [2022.09]

### Changed

- Change configuration of Account Statements to hide "Manage Statements" button if user lacks permissions
- Removed popup&sticky notifications [DLRN-4516]
- Changed configuration for engagement base path [DLRN-4543]
- Code refactored to remove duplication.
- `@backbase/accounts-transactions-journey-ang` - move http clients to peer dependencies
- Bump @backbase/connect-external-accounts-journey-ang (moved http clients to peer dependencies)
- Bump @backbase/manage-upcoming-and-historical-payments-journey-ang (Improved error handling, moved http clients to peer dependencies, other minor improvements)
- Bump @backbase/quick-transfer-journey-ang (moved http clients to peer dependencies)
- Remove `MessageCenter.ManageMessages.view` permission from permissions check
- Start using modelbank stg env instead of ret-latest.
- Bump @backbase/manage-bill-payments-journey-ang @backbase/manage-payees-journey-ang @backbase/pay-bills-journey-ang (moved http clients to peer dependencies)
- Remove payment forms duplicate titles, update loans payments
- Bump `@backbase/identity-self-service-journey-ang` (Address autocomplete [IDULS-352])
- Bump `@backbase/cards-management-journey-ang`. Fixed i18n repeated keys and removed `data-ang` dependency
- Rename Remote config release registration `provisioning-package` folder to `release-template`
- Update register-release action with the new path for creating the provisioning package
- E2E configuration will change as per the environment.
- Bump `@backbase/initiate-payment-journey-ang`, `@backbase/manage-payment-templates-journey-ang`, `@backbase/manage-payments-journey-ang` and `@backbase/stop-checks-journey-ang` versions (Fixes the date-picker timezone issue on edit flow)
- Changed test data for E2E tests
- Bump `@backbase/authorized-users-journey-ang` version (split create authorized user flow into routable/extendable views )
- Bump `@backbase/retail-loans-journey-ang`. Removed `@backbase/account-statement-business-widget-ang`, `@backbase/account-statement-store-ang` and updated `@backbase/account-statement-common-ang`.
- regex updated in pipeline for LTS release.
- Update `@backbase/identity-auth` to version `1.2.0`
- Enabled USA-only address autocomplete
- Angular update to v13.
- Bump `@backbase/places-journey-ang` - Angular v13 update + add full path to markerUrl assets.
- Bump `@backbase/account-statement-retail-journey-ang` version (changed journey name and added link to Manage Statements).
- Change menu link from "Download Statements" to "Account Statements"
- Deprecated `PUBSUB` and `SET_LOCALE` replaced with services compatible with `foundation-ang` v7
- Bump `@backbase/quick-transfer-journey-ang` - Angular v13 update + update assets handling.
- Bump `@backbase/remote-config-ang` to version `2.0.0`
- Bump `@backbase/actions-retail-notification-preferences-journey-ang` to version `4.0.1`
- Bump `@backbase/campaign-space-ang` to version `2.0.1`
- Bump `@backbase/messages-client-inbox-journey-ang` to version `3.0.2`
- Bump `@backbase/notifications-ang` to version `2.0.2`
- Set `engagements` as default value for api mode of notification preferences
- Bump `@backbase/places-journey-ang` for a small bugfix.
- Bump Entitlements capabilities (Angular 13)
- Bump `@backbase/accounts-transactions-journey-ang` to version `3.10.0`
- Bump `@backbase/manage-bill-payments-journey-ang`,`@backbase/manage-payees-journey-ang`,`@backbase/pay-bills-journey-ang` - Angular 13 update
- Bump `@backbase/retail-loans-journey-ang` to version `1.0.3` and `@backbase/initiate-loans-payment-journey` to version 2.0.1.
- Bump `@backbase/arrangement-manager-http-ang` to version `2.5.0`
- Bump `@backbase/cards-management-journey-ang` - Angular 13 update and i18n bugfixes
- Bump `@backbase/budget-journey-ang` - Angular 13
- Bump `@backbase/income-spending-analysis-journey-ang` - Angular 13, UI improvements and bugfixes
- Bump `@backbase/manage-pockets-journey-ang` - Angular 13
- Bump `@backbase/turnovers-journey-ang` - Angular 13
- Baas key made configurable.
- Bump `@backbase/accounts-transactions-journey-ang` to version `4.0.0`
- Bump `@backbase/retail-loans-journey-ang` to version `2.0.1`
- Patch ranges allowed for Backbase dependencies

### Fixed

- Stop calling `initLoginFlow` after `revokeTokenAndLogout`, to prevent unwanted side-effect of cancelling `/logout` page request.
- Added add/withdraw money and delete pocket scenario to pocket e2e tests
- Fixed `accounts-transactions-journey-ang` to read `apiKey` from an environment variable.
- Fixed 'User can edit existing budget' test
- Fixed 'Added a test case to add electronic payee and removed unused code'
- Fixed 'Create budget" test
- Fixed 'Edit budget' and 'Create travel notice' tests

### Added

- Added E2E tests for P2P limits
- Added E2E tests for cards and budgets
- New Proxy configurations added for e2e tests
- End to end test cases for Accounts & Transactions.
- Extracting fixtures, configs, PO to retail-e2e lib.
- End to end test cases for Pockets based on new structure and stg modelbank.
- End to end test cases for Travel notice
- Loans Journey retaled basepaths to relevant modules.
- Changelog check + an automatic versioning.
- E2E tests for transfers and connected accounts.
- E2E tests for Bill Pay.
- Support for testing transaction signing in E2E tests
- E2E tests for Edit External A2A scheduled payments
- Add new journey "Manage Statements" `@backbase/manage-statements-journey-ang`.
- **Step Up** integrated via `@backbase/identity-auth/step-up` [IDWOJ-1241]
- **AuthEventsHandlerService** Added example version of how auth events could be handled [IDWOJ-1261]
- For `@backbase/manage-upcoming-and-historical-payments-journey-ang` updated route paths, title & version (added Historical payments tab into Activity tab)
- **AuthInterceptor** Updated implementation to align with recommendation from Identity. If an action is rejected with a 401 `invalid_token` error, attempt to refresh the user's token and replay the original request. Otherwise surface the original error. [IDWOJ-1259]
- **AuthGuard** Updated implementation to align with recommendation from Identity. If the user is not logged in, redirect them to the login flow. [IDWOJ-1260]
- E2E tests for `Places journey`.
- New app version display to the `bb-user-context-menu-widget` from environment variables [NOJIRA]
- Add new journey "Real Time Communication Journey" `@backbase/real-time-communication-journey-ang`
- Bump Real Time Communication Journey `@backbase/real-time-communication-journey-ang` to 2.0.0
