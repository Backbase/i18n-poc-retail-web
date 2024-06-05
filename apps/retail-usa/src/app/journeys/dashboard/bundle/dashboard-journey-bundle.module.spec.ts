import { TestBed } from '@angular/core/testing';
import { DashboardJourneyBundleModule } from './dashboard-journey-bundle.module';

describe('DashboardJourneyBundleModule', () => {
  let testModule: DashboardJourneyBundleModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DashboardJourneyBundleModule],
    });

    testModule = TestBed.inject(DashboardJourneyBundleModule);
  });

  it('should be initializable', () => {
    expect(testModule).toBeTruthy();
  });
});
