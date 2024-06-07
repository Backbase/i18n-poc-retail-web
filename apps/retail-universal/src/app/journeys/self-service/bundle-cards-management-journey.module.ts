import { NgModule } from '@angular/core';
import {
  CardsManagementJourneyModule,
  CARDS_MANAGEMENT_JOURNEY_CARDS_BASE_PATH,
  CardsManagementJourneyConfigurationToken,
  CardsManagementJourneyConfiguration,
} from '@backbase/cards-management-journey-ang';
import { APP_CARDS_BASE_PATH } from '../../service-paths.module';

const CARDS_MANAGEMENT_JOURNEY_CONFIG: Partial<CardsManagementJourneyConfiguration> = {
  cardImageSourceAdditionsProperty: 'img',
};

@NgModule({
  imports: [CardsManagementJourneyModule.forRoot()],
  providers: [
    {
      provide: CARDS_MANAGEMENT_JOURNEY_CARDS_BASE_PATH,
      useExisting: APP_CARDS_BASE_PATH,
    },
    {
      provide: CardsManagementJourneyConfigurationToken,
      useValue: CARDS_MANAGEMENT_JOURNEY_CONFIG,
    },
  ],
})
export class CardsManagementJourneyBundleModule {}
