import { TestBed } from '@angular/core/testing';
import { BillpaySsoJourneyBundleModule } from './bundle-billpay-sso-journey.module';

describe('BillpaySsoJourneyBundleModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BillpaySsoJourneyBundleModule],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(BillpaySsoJourneyBundleModule);
    expect(module).toBeTruthy();
  });
});
