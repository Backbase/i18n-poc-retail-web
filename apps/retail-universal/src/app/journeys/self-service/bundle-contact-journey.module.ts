import { NgModule } from '@angular/core';
import {
  ContactManagerJourneyConfig,
  ContactManagerJourneyConfigurationToken,
  ContactManagerJourneyModule,
  CONTACTS_MANAGER_JOURNEY_CONTACT_MANAGER_BASE_PATH,
  LoadMoreMethod,
} from '@backbase/contact-manager-journey-ang';
import { appPaginationTypeMapper } from '@backbase/shared/feature/config';

import { APP_CONTACT_MANAGER_BASE_PATH } from '../../service-paths.module';
import { APP_CONFIG } from '../../app.config';

const paginationTypeMapper = appPaginationTypeMapper(
  { pagination: LoadMoreMethod.PAGINATION, 'load-more': LoadMoreMethod.LOAD_MORE },
  LoadMoreMethod.LOAD_MORE,
);

const contactManagerJourneyConfig: Partial<ContactManagerJourneyConfig> = {
  createContactIBAN: false,
  createContactAccount: true,
  createContactPhone: false,
  createContactEmail: false,
  pageSize: APP_CONFIG.pageSize,
  paginationType: paginationTypeMapper(APP_CONFIG.paginationType),
};

@NgModule({
  imports: [ContactManagerJourneyModule.forRoot()],
  providers: [
    {
      provide: ContactManagerJourneyConfigurationToken,
      useValue: contactManagerJourneyConfig,
    },
    {
      provide: CONTACTS_MANAGER_JOURNEY_CONTACT_MANAGER_BASE_PATH,
      useExisting: APP_CONTACT_MANAGER_BASE_PATH,
    },
  ],
})
export class ContactManagerJourneyBundleModule {}
