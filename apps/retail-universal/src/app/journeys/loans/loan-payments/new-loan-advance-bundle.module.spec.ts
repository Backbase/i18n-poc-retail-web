import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NewLoansAdvanceJourneyBundleModule } from './new-loan-advance-bundle.module';
import { InitiatePaymentConfig, ReviewScreens, INITIATE_PAYMENT_CONFIG } from '@backbase/initiate-payment-journey-ang';
import { destroyHook, RETAIL_LOANS_ADVANCE } from '@backbase/loans-retail-journey';

describe('NewLoansAdvanceJourneyBundleModule', () => {
  let module: NewLoansAdvanceJourneyBundleModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NewLoansAdvanceJourneyBundleModule],
    });

    module = TestBed.inject(NewLoansAdvanceJourneyBundleModule);
  });

  it('initializes', () => {
    expect(module).toBeTruthy();
  });

  it('should inject correct payment configs with INITIATE_PAYMENT_CONFIG', inject(
    [INITIATE_PAYMENT_CONFIG],
    (injectService: InitiatePaymentConfig) => {
      expect(injectService.paymentTypes).toEqual([RETAIL_LOANS_ADVANCE], 'paymentTypes');
      expect(injectService.businessFunctions).toEqual([RETAIL_LOANS_ADVANCE.businessFunction], 'businessFunctions');
      expect(injectService.options.reviewScreenType).toEqual(ReviewScreens.ADAPTED, 'reviewScreenType');
      expect(injectService.options.header({} as any)).toEqual('', '');
      expect(injectService.hooks).toEqual(
        {
          onDestroy: destroyHook,
        },
        'hooks',
      );
    },
  ));
});
