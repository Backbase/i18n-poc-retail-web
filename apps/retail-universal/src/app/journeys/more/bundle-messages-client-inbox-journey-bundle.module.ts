import { NgModule } from '@angular/core';
import {
  MessagesClientInboxJourneyModule,
  MESSAGES_CLIENT_INBOX_JOURNEY_MESSAGES_BASE_PATH,
  MessagesClientInboxJourneyConfiguration,
  MessagesClientInboxJourneyConfigurationToken,
  MESSAGES_CLIENT_INBOX_JOURNEY_METRIC_BASE_PATH,
} from '@backbase/messages-client-inbox-journey-ang';
import { APP_MESSAGES_BASE_PATH, APP_METRIC_BASE_PATH } from '../../service-paths.module';
import { APP_CONFIG } from '../../app.config';

const messagesClientInboxJourneyConfiguration: Partial<MessagesClientInboxJourneyConfiguration> = {
  itemsPerPage: APP_CONFIG.pageSize,
};

@NgModule({
  imports: [MessagesClientInboxJourneyModule.forRoot()],
  providers: [
    {
      provide: MessagesClientInboxJourneyConfigurationToken,
      useValue: messagesClientInboxJourneyConfiguration,
    },
    {
      provide: MESSAGES_CLIENT_INBOX_JOURNEY_MESSAGES_BASE_PATH,
      useExisting: APP_MESSAGES_BASE_PATH,
    },
    {
      provide: MESSAGES_CLIENT_INBOX_JOURNEY_METRIC_BASE_PATH,
      useExisting: APP_METRIC_BASE_PATH,
    },
  ],
})
export class MessagesClientInboxJourneyBundleModule {}
