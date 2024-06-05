import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DashboardJourneyWrapperModule } from './dashboard-journey-wrapper.module';
import { ServicePathsModule } from '../../../service-paths.module';

describe('DashboardJourneyWrapperModule', () => {
  let testModule: DashboardJourneyWrapperModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
        DashboardJourneyWrapperModule,
        ServicePathsModule,
      ],
    });

    testModule = TestBed.inject(DashboardJourneyWrapperModule);
  });

  it('should be initializable', () => {
    expect(testModule).toBeTruthy();
  });
});
