import { NgModule } from '@angular/core';
import {
  EditionTypeEnum,
  IdentitySelfEnrollmentJourneyModule,
  SelfEnrollmentJourneyConfig,
  SelfEnrollmentJourneyConfigurationToken,
  SELF_ENROLLMENT_ENROLLMENT_SERVICE_BASE_PATH,
} from '@backbase/identity-self-enrollment-journey';

import { APP_ENROLLMENT_MANAGER_BASE_PATH } from '../../service-paths.module';

const selfEnrollmentJourneyConfig: SelfEnrollmentJourneyConfig = {
  appUrl: '/',
  termsConditionsUrl: '/terms_&_conditions',
  privacyPolicyUrl: '/privacy_policy',
  phoneNumber: '01800999777',
  edition: EditionTypeEnum.Universal,
};

@NgModule({
  imports: [IdentitySelfEnrollmentJourneyModule.forRoot()],
  providers: [
    {
      provide: SelfEnrollmentJourneyConfigurationToken,
      useValue: selfEnrollmentJourneyConfig,
    },
    {
      provide: SELF_ENROLLMENT_ENROLLMENT_SERVICE_BASE_PATH,
      useExisting: APP_ENROLLMENT_MANAGER_BASE_PATH,
    },
  ],
})
export class SelfEnrollmentJourneyBundleModule {}
