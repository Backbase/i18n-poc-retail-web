import { LOCALE_ID, NgModule } from '@angular/core';
import {
  IdentitySelfServiceJourneyConfiguration,
  IdentitySelfServiceJourneyConfigurationToken,
  IdentitySelfServiceJourneyModule,
  SELF_SERVICE_ACCESS_CONTROL_BASE_PATH,
  SELF_SERVICE_ADDRESS_AUTOCOMPLETE_BASE_PATH,
  SELF_SERVICE_DEVICE_BASE_PATH,
  SELF_SERVICE_DEVICE_MANAGEMENT_V2_BASE_PATH,
  SELF_SERVICE_USER_MANAGER_BASE_PATH,
} from '@backbase/identity-self-service-journey-ang';

import {
  APP_ACCESS_CONTROL_BASE_PATH,
  APP_DEVICE_BASE_PATH,
  APP_DEVICE_MANAGEMENT_V2_BASE_PATH,
  APP_USER_BASE_PATH,
  APP_ADDRESS_AUTOCOMPLETE_BASE_PATH,
} from '../../service-paths.module';
import { environment } from '../../../environments/environment';

export function profileConfigProvider(locale: string): DeepPartial<IdentitySelfServiceJourneyConfiguration> {
  const identitySelfServiceJourneyConfiguration: DeepPartial<IdentitySelfServiceJourneyConfiguration> = {
    userManageProfile: {
      maxEmailAddresses: 2,
      maxPhoneNumbers: 3,
      maxPostalAddresses: 1,
      isAddressSearchAutocompleteActive: true,
      enablePhoneNumberFormatter: false,
    },
    userIdentitySecurityCenter: {
      changeUsernameEnabled: true,
      changeUsernameSuccessPath: `${environment.baseHref}${locale}/logout/username-success`,
    },
  };
  return identitySelfServiceJourneyConfiguration;
}

@NgModule({
  imports: [IdentitySelfServiceJourneyModule.forRoot()],
  providers: [
    {
      provide: IdentitySelfServiceJourneyConfigurationToken,
      useFactory: profileConfigProvider,
      deps: [LOCALE_ID],
    },
    {
      provide: SELF_SERVICE_ACCESS_CONTROL_BASE_PATH,
      useExisting: APP_ACCESS_CONTROL_BASE_PATH,
    },
    {
      provide: SELF_SERVICE_USER_MANAGER_BASE_PATH,
      useExisting: APP_USER_BASE_PATH,
    },
    {
      provide: SELF_SERVICE_DEVICE_BASE_PATH,
      useExisting: APP_DEVICE_BASE_PATH,
    },
    {
      provide: SELF_SERVICE_DEVICE_MANAGEMENT_V2_BASE_PATH,
      useExisting: APP_DEVICE_MANAGEMENT_V2_BASE_PATH,
    },
    {
      provide: SELF_SERVICE_ADDRESS_AUTOCOMPLETE_BASE_PATH,
      useExisting: APP_ADDRESS_AUTOCOMPLETE_BASE_PATH,
    },
  ],
})
export class SelfServiceJourneyBundleModule {}
