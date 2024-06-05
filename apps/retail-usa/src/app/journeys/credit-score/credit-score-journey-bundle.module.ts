import { NgModule } from '@angular/core';
import {
  CREDIT_SCORE_SSO_JOURNEY_BASE_PATH,
  CreditScoreJourneyModule,
  CreditScoreSsoJourneyConfiguration,
  CreditScoreSsoJourneyConfigurationToken,
} from '@backbase/credit-score-journey-ang';

import { APP_CREDIT_SCORE_BASE_PATH } from '../../service-paths.module';

export const creditScoreJourneyConfiguration: Partial<CreditScoreSsoJourneyConfiguration> = {
  pageTitle: $localize`:@@credit-score-sso-journey.page-title:Credit Score`,
  capabilityRouteName: 'credit-score',
  iFrameSandboxAttributes: [
    'allow-same-origin',
    'allow-scripts',
    'allow-top-navigation',
    'allow-popups',
    'allow-forms',
    'allow-downloads',
  ],
  routeNameToNavigateBack: '/my-accounts',
  navigateBackArrowName: $localize`:@@credit-score-sso-journey.back-arrow-name:Back to Accounts`,
};

@NgModule({
  imports: [CreditScoreJourneyModule.forRoot()],
  providers: [
    {
      provide: CreditScoreSsoJourneyConfigurationToken,
      useValue: creditScoreJourneyConfiguration,
    },
    {
      provide: CREDIT_SCORE_SSO_JOURNEY_BASE_PATH,
      useExisting: APP_CREDIT_SCORE_BASE_PATH,
    },
  ],
})
export class CreditScoreJourneyBundleModule {}
