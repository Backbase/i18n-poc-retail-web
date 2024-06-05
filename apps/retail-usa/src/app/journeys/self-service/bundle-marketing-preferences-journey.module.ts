import { NgModule } from '@angular/core';
import {
  MarketingPreferencesJourneyModule,
  MarketingPreferencesJourneyConfigurationToken,
  MARKETING_PREFERENCES_JOURNEY_ENGAGEMENT_BASE_PATH,
  MarketingPreferencesJourneyConfiguration,
} from '@backbase/engagement-marketing-preferences-journey';

import { APP_ENGAGEMENT_BASE_PATH } from '../../service-paths.module';

const marketingPreferencesJourneyConfiguration: Partial<MarketingPreferencesJourneyConfiguration> = {
  engagementTypeLabels: {
    newsletter: $localize`:@@engagement-marketing-preferences.engagement-type-label.newseletter:Newsletter`,
    offers: $localize`:@@engagement-marketing-preferences.engagement-type-label.offers:Offers`,
  },
};

@NgModule({
  imports: [MarketingPreferencesJourneyModule.forRoot()],
  providers: [
    {
      provide: MarketingPreferencesJourneyConfigurationToken,
      useValue: marketingPreferencesJourneyConfiguration,
    },
    {
      provide: MARKETING_PREFERENCES_JOURNEY_ENGAGEMENT_BASE_PATH,
      useExisting: APP_ENGAGEMENT_BASE_PATH,
    },
  ],
})
export class MarketingPreferencesJourneyBundleModule {}
