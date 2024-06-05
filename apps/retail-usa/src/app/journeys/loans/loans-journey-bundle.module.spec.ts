import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { LoansJourneyBundleModule } from './loans-journey-bundle.module';
import { ServicePathsModule } from '../../service-paths.module';

describe('LoansJourneyBundleModule', () => {
  let module: LoansJourneyBundleModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
        ServicePathsModule,
        LoansJourneyBundleModule,
      ],
    });

    module = TestBed.inject(LoansJourneyBundleModule);
  });

  it('should be initializable', () => {
    expect(module).toBeTruthy();
  });
});
