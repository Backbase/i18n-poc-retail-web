import { TestBed } from '@angular/core/testing';
import { RetailNotificationPreferencesJourneyBundleModule } from './bundle-retail-notification-preferences-journey.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ServicePathsModule } from '../../service-paths.module';

describe('RetailNotificationPreferencesJourneyBundleModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        RetailNotificationPreferencesJourneyBundleModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        HttpClientTestingModule,
        ServicePathsModule,
      ],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(RetailNotificationPreferencesJourneyBundleModule);
    expect(module).toBeTruthy();
  });
});
