import { NgModule } from '@angular/core';
import {
  PlacesJourneyConfiguration,
  PlacesJourneyConfigurationToken,
  PlacesJourneyModule,
  PLACES_JOURNEY_BASE_PATH,
} from '@backbase/places-journey-ang';

import { environment } from '../../../environments/environment';
import { APP_PLACES_BASE_PATH } from '../../service-paths.module';

const placesJourneyConfiguration: Partial<PlacesJourneyConfiguration> = {
  latitude: 40.72345,
  longitude: -73.9924,
  mapZoom: 12,
  zoomAutoAdjustment: false,
  apiKey: environment.googleApiKey,
  placeTypes: {
    branch: {
      iconName: 'account',
      markerUrl: 'assets/bb-places-journey-ang/branch-marker.svg',
    },
    atm: {
      iconName: 'credit-card',
      markerUrl: 'assets/bb-places-journey-ang/atm-marker.svg',
    },
  },
};

@NgModule({
  imports: [PlacesJourneyModule.forRoot()],
  providers: [
    {
      provide: PlacesJourneyConfigurationToken,
      useValue: placesJourneyConfiguration,
    },
    {
      provide: PLACES_JOURNEY_BASE_PATH,
      useExisting: APP_PLACES_BASE_PATH,
    },
  ],
})
export class PlacesJourneyBundleModule {}
