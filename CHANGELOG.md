# Changelog

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [2024.02.1]

### Fixed

- Replace using `package.json` with `version.json` to get the calendar version of the application.

## [2024.02]

### Added

- Include the reusable workflows and related ones with app name within the .github folder in the extracted app
- Added configuration to prepare for future integration of the newer implementation of Transaction Signing into modelbank.

### Changed

- Bump [@backbase/account-statement-retail-journey-ang](https://backbase.io/developers/angular/libraries/account-statement-retail-journey/5.1.1/index.html) to `5.1.1`
- Bump [@backbase/contact-manager-journey-ang](https://backbase.io/developers/angular/libraries/contact-manager-journey/4.3.0/index.html) to `4.3.0`
- Bump [@backbase/manage-statements-retail-journey-ang](https://backbase.io/developers/angular/libraries/manage-statements-retail-journey/3.0.3/index.html) to `3.0.3`
- Bump [@backbase/identity-auth](https://backbase.io/developers/angular/libraries/identity-auth/3.3.0/changelog.html) to `3.3.0`
- Bump [@backbase/identity-password-reset-journey](https://backbase.io/developers/angular/libraries/identity-password-reset-journey/3.2.0/changelog.html) to `3.2.0`
- Bump [@backbase/identity-self-enrollment-journey](https://backbase.io/developers/angular/libraries/identity-self-enrollment-journey/4.2.0/changelog.html) to `4.2.0`
- Bump [@backbase/identity-self-service-journey-ang](https://backbase.io/developers/angular/libraries/identity-self-service-journey-ang/5.3.0/changelog.html) to `5.3.0`
- Bump [@backbase/cards-management-journey-angular](https://backbase.io/developers/angular/libraries/cards-management-journey/5.3.0/changelog.html) to `5.3.0`
- Bump [@backbase/accounts-transactions-journey-ang](https://backbase.io/developers/angular/libraries/accounts-transactions-journey/6.12.0/index.html) to `6.12.0`
- Bump [@backbase/places-journey-ang](https://backbase.io/developers/angular/libraries/places-journey-ang/4.5.0/index.html) to `4.5.0`
- Bump [@backbase/credit-score-journey-ang](https://backbase.io/developers/angular/libraries/credit-score-journey-ang/2.5.0/index.html) to `2.5.0`
- Bump [@backbase/budget-journey-ang](https://backbase.io/developers/angular/libraries/budget-journey-ang/4.1.0/index.html) to `4.1.0`
- Bump [@backbase/cashflow-journey-ang](https://backbase.io/developers/angular/libraries/cashflow-journey-ang/1.1.0/index.html) to `1.1.0`
- Bump [@backbase/fi-budget-journey-ang](https://backbase.io/developers/angular/libraries/fi-budget-journey-ang/1.1.0/index.html) to `1.1.0`
- Bump [@backbase/income-spending-analysis-journey-ang](https://backbase.io/developers/angular/libraries/income-spending-analysis-journey-ang/4.1.0/index.html) to `4.1.0`
- Bump [@backbase/insights-dashboard-journey-ang](https://backbase.io/developers/angular/libraries/insights-dashboard-journey-ang/1.2.0/index.html) to `1.2.0`
- Bump [@backbase/manage-pockets-journey-ang](https://backbase.io/developers/angular/libraries/manage-pockets-journey-ang/4.9.0/index.html) to `4.9.0`
- Bump [@backbase/turnovers-journey-ang](https://backbase.io/developers/angular/libraries/turnovers-journey-ang/4.1.0/index.html) to `4.1.0`
- Bump [@backbase/billpay-sso-journey-ang](https://backbase.io/developers/angular/libraries/billpay-sso-journey-ang/2.0.1/index.html) to `2.0.1`
- Bump [@backbase/initiate-payment-journey-ang](https://backbase.io/developers/angular/libraries/ip-ang/4.4.0/changelog.html) to `4.4.0`
- Bump [@backbase/loans-retail-journey](https://backbase.io/developers/angular/libraries/loans-retail-journey/2.3.0/index.html) to `2.3.0`
- Bump [@backbase/quick-transfer-journey-ang](https://backbase.io/developers/angular/libraries/quick-transfer-journey/4.2.0/index.html) to `4.2.0`
- Bump [@backbase/manage-upcoming-and-historical-payments-journey-ang](https://backbase.io/developers/angular/libraries/manage-upcoming-and-historical-payments-journey/4.2.1/index.html) to `4.2.1`
- Bump [@backbase/connect-external-accounts-journey-ang](https://backbase.io/developers/angular/libraries/connect-external-accounts-journey-ang/4.1.2/changelog.html) to `4.1.2`
- Bump [@backbase/messages-client-inbox-journey-ang](https://backbase.io/developers/angular/libraries/messages-client-inbox-journey-ang/5.2.0/changelog.html) to `5.2.0`

## [2024.01]

### Fixed

- Bump [@backbase/account-statement-retail-journey-ang](https://backbase.io/developers/angular/libraries/account-statement-retail-journey/5.1.0/index.html) to `5.1.0`
- fix incorrect configuration of internal transfer payment type config to allow proper working of the payments journey
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

- Move journey configurations to separate constants for better type checking.
- Bump [@backbase/quick-transfer-journey-ang](https://backbase.io/developers/angular/libraries/quick-transfer-journey/4.1.1/index.html) to `4.1.1`
- Bump [@backbase/manage-upcoming-and-historical-payments-journey-ang](https://backbase.io/developers/angular/libraries/manage-upcoming-and-historical-payments-journey/4.2.0/index.html) to `4.2.0`
- Bump [@backbase/connect-external-accounts-journey-ang](https://backbase.io/developers/angular/libraries/connect-external-accounts-journey-ang/4.1.1/changelog.html) to `4.1.1`
- Bump [@backbase/initiate-payment-journey-ang](https://backbase.io/developers/angular/libraries/ip-ang/4.3.0/changelog.html) to `4.3.0`
- Bump [@backbase/cards-management-journey-angular](https://backbase.io/developers/angular/libraries/cards-management-journey/5.2.0/changelog.html) to `5.2.0`
- Bump [@backbase/loans-retail-journey](https://backbase.io/developers/angular/libraries/loans-retail-journey/2.2.0/index.html) to `2.2.0`
- Bump [@backbase/accounts-transactions-journey-ang](https://backbase.io/developers/angular/libraries/accounts-transactions-journey/6.11.0/index.html) to `6.11.0`
- Bump [@backbase/quick-transfer-journey-ang](https://backbase.io/developers/angular/libraries/quick-transfer-journey/4.1.1/index.html) to `4.1.1`
- Bump [@backbase/manage-upcoming-and-historical-payments-journey-ang](https://backbase.io/developers/angular/libraries/manage-upcoming-and-historical-payments-journey/4.2.0/index.html) to `4.2.0`

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
- Bump [@backbase/cards-management-journey-angular](https://backbase.io/developers/angular/libraries/cards-management-journey/5.1.0/changelog.html) to `5.1.0`
- Bump [@backbase/places-journey-ang](https://backbase.io/developers/angular/libraries/places-journey-ang/4.3.1/index.html) to `4.3.1`
- Bump [@backbase/credit-score-journey-ang](https://backbase.io/developers/angular/libraries/credit-score-journey-ang/2.4.0/index.html) to `2.4.0`
- Bump [@backbase/identity-auth](https://backbase.io/developers/angular/libraries/identity-auth/3.1.0/changelog.html) to `3.1.0`
- Bump [@backbase/identity-password-reset-journey](https://backbase.io/developers/angular/libraries/identity-password-reset-journey/3.1.0/changelog.html) to `3.1.0`
- Bump [@backbase/identity-self-enrollment-journey](https://backbase.io/developers/angular/libraries/identity-self-enrollment-journey/4.1.0/changelog.html) to `4.1.0`
- Bump [@backbase/identity-self-service-journey-ang](https://backbase.io/developers/angular/libraries/identity-self-service-journey-ang/5.2.0/changelog.html) to `5.2.0`
- Bump [@backbase/quick-transfer-journey-ang](https://backbase.io/developers/angular/libraries/quick-transfer-journey/4.1.0/index.html) to `4.1.0`
- Bump [@backbase/manage-upcoming-and-historical-payments-journey-ang](https://backbase.io/developers/angular/libraries/manage-upcoming-and-historical-payments-journey/4.1.0/index.html) to `4.1.0`
- Bump [@backbase/initiate-payment-journey-ang](https://backbase.io/developers/angular/libraries/ip-ang/4.2.0/changelog.html) to `4.2.0`
- Bump [@backbase/accounts-transactions-journey-ang](https://backbase.io/developers/angular/libraries/accounts-transactions-journey/6.9.2/index.html) to `6.9.2`
- Bump [@backbase/loans-retail-journey](https://backbase.io/developers/angular/libraries/loans-retail-journey/2.1.0/index.html) to `2.1.0`
- Update "transaction" journeys configuration to use `disputeTopicCode` and `inquireTopicCode`

## [2023.10]

### Fixed

- Fixed flaky remote-config tests.
- Fix screen-readers-only elements inside `LayoutComponent`.
- Replaced the incorrect `i18n-heading` with `i18n` in `ActivityMonitorLayoutComponent` component

### Removed

- Remove `TemplateRegistry` provider that used to be imported from `@backbase/foundation-ang/core` as no longer supported
- Remove `StepUpAuthenticationComponent` as it was unused and no longer supported
- Remove `@backbase/accesscontrol-v2` from the app
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
- Bump [@backbase/identity-auth](https://backbase.io/developers/angular/libraries/identity-auth/3.0.1/changelog.html) to `3.0.1`
  - A new implementation of Transaction Signing has been introduced which support channel selection. The legacy implementation is used by default.
  - A new implementation of Step Up has been introduced which uses routing internally to navigate between views. This is enabled by default.
- Bump [@backbase/identity-password-reset-journey](https://backbase.io/developers/angular/libraries/identity-password-reset-journey/3.0.0/changelog.html) to `3.0.0`
- Bump [@backbase/identity-self-enrollment-journey](https://backbase.io/developers/angular/libraries/identity-self-enrollment-journey/4.0.0/changelog.html) to `4.0.0`
- Bump [@backbase/identity-self-service-journey-ang](https://backbase.io/developers/angular/libraries/identity-self-service-journey-ang/5.1.0/changelog.html) to `5.1.0`
  - Enabled the "change username" feature in the Login Security journey
  - Enabled the "improved phone number validation" feature in the User Profile journey
- Bump `@backbase/remote-config-ang` because of the migration to Angular 16
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
- Bump [@backbase/quick-transfer-journey-ang](https://backbase.io/developers/angular/libraries/quick-transfer-journey/4.0.0/index.html) to `4.0.0`
- Bump [@backbase/manage-upcoming-and-historical-payments-journey-ang](https://backbase.io/developers/angular/libraries/manage-upcoming-and-historical-payments-journey/4.0.0/index.html) to `4.0.0`
- Bump [@backbase/accounts-transactions-journey-ang](https://backbase.io/developers/angular/libraries/accounts-transactions-journey/6.2.1/index.html) to `6.2.1`
- Bump `@backbase/real-time-communication-journey-ang` to `3.0.1`

## [2023.09-LTS]

### Added

- Release the retail-universal web application.
