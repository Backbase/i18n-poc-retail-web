import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NewLoansPaymentJourneyBundleModule } from './new-loan-payment-bundle.module';
import { InitiatePaymentConfig, INITIATE_PAYMENT_CONFIG, ReviewScreens } from '@backbase/initiate-payment-journey-ang';
import { destroyHook, RETAIL_LOANS_PAYMENT } from '@backbase/loans-retail-journey';
describe('NewLoansPaymentJourneyBundleModule', () => {
  let module: NewLoansPaymentJourneyBundleModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NewLoansPaymentJourneyBundleModule],
    });

    module = TestBed.inject(NewLoansPaymentJourneyBundleModule);
  });

  it('initializes', () => {
    expect(module).toBeTruthy();
  });

  it('should inject correct payment configs with INITIATE_PAYMENT_CONFIG', inject(
    [INITIATE_PAYMENT_CONFIG],
    (injectService: InitiatePaymentConfig) => {
      expect(injectService.paymentTypes).toEqual([RETAIL_LOANS_PAYMENT], 'paymentTypes');
      expect(injectService.businessFunctions).toEqual([RETAIL_LOANS_PAYMENT.businessFunction], 'businessFunctions');
      expect(injectService.options.reviewScreenType).toEqual(ReviewScreens.ADAPTED, 'reviewScreenType');
      expect(injectService.options.header({} as any)).toEqual('', 'header');
      expect(injectService.hooks).toEqual(
        {
          onDestroy: destroyHook,
        },
        'hooks',
      );
    },
  ));
});
