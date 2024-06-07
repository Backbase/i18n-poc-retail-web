import { NgModule } from '@angular/core';
import {
  CampaignSpaceConfiguration,
  CampaignSpaceConfigurationToken,
  CampaignSpaceModule,
  CAMPAIGN_JOURNEY_ENGAGEMENT_BASE_PATH,
  CAMPAIGN_JOURNEY_METRIC_BASE_PATH,
} from '@backbase/campaign-space-ang';

import { APP_ENGAGEMENT_BASE_PATH, APP_METRIC_BASE_PATH } from '../../service-paths.module';

const campaignSpaceConfiguration: CampaignSpaceConfiguration = {
  portalName: 'backbase-wc3:backbase-wc3:0',
  locale: 'en-US',
  designMode: false,
};

@NgModule({
  imports: [CampaignSpaceModule],
  exports: [CampaignSpaceModule],
  providers: [
    {
      provide: CAMPAIGN_JOURNEY_ENGAGEMENT_BASE_PATH,
      useExisting: APP_ENGAGEMENT_BASE_PATH,
    },
    {
      provide: CAMPAIGN_JOURNEY_METRIC_BASE_PATH,
      useExisting: APP_METRIC_BASE_PATH,
    },
    {
      provide: CampaignSpaceConfigurationToken,
      useValue: campaignSpaceConfiguration,
    },
  ],
})
export class CampaignSpaceJourneyBundleModule {}
