import { NgModule } from '@angular/core';
import {
  IdentityPasswordResetJourneyModule,
  PASSWORD_RESET_ACCOUNT_RECOVERY_MANAGER_BASE_PATH,
  PasswordResetJourneyConfig,
  PasswordResetJourneyConfigurationToken,
} from '@backbase/identity-password-reset-journey';
import { APP_ACCOUNT_RECOVERY_BASE_PATH } from '../../service-paths.module';

const passwordResetJourneyConfig: PasswordResetJourneyConfig = {
  appUrl: '/',
  phoneNumber: '1234567890',
};

@NgModule({
  imports: [IdentityPasswordResetJourneyModule.forRoot()],
  providers: [
    {
      provide: PasswordResetJourneyConfigurationToken,
      useValue: passwordResetJourneyConfig,
    },
    {
      provide: PASSWORD_RESET_ACCOUNT_RECOVERY_MANAGER_BASE_PATH,
      useExisting: APP_ACCOUNT_RECOVERY_BASE_PATH,
    },
  ],
})
export class PasswordResetJourneyBundleModule {}
