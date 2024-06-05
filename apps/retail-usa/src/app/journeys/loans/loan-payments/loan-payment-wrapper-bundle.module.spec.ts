import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { INITIATE_PAYMENT_JOURNEY_COMMUNICATOR } from '@backbase/initiate-payment-journey-ang';
import { LoanPaymentRouteResolver } from '@backbase/loans-retail-journey';
import { LoansCommunicationService } from '@backbase/retail/feature/communication';
import { PERMISSIONS } from '../../../auth/permissions';
import { LoanPaymentJourneyWrapperBundleModule } from './loan-payment-wrapper-bundle.module';
import { LoanPaymentJourneyWrapperComponent } from './loan-payment-wrapper/loan-payment-wrapper.component';

const ROUTES = [
  {
    path: '',
    component: LoanPaymentJourneyWrapperComponent,
    children: [
      {
        path: 'loans-advance',
        loadChildren: () =>
          import('./new-loan-advance-bundle.module').then((m) => m.NewLoansAdvanceJourneyBundleModule),
      },
      {
        path: 'loans-payment',
        loadChildren: () =>
          import('./new-loan-payment-bundle.module').then((m) => m.NewLoansPaymentJourneyBundleModule),
      },
    ],
    resolve: {
      loan: LoanPaymentRouteResolver,
    },
    data: {
      entitlements: PERMISSIONS.canViewLoans,
    },
    title: $localize`:@@retail-loan-payment.nav.item.title:Loan Payment - Loans`,
  },
];

describe('LoanPaymentJourneyWrapperBundleModule', () => {
  let loansCommunicationService: LoansCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoanPaymentJourneyWrapperBundleModule, RouterTestingModule.withRoutes(ROUTES)],
    });

    loansCommunicationService = TestBed.inject(LoansCommunicationService);
  });

  it('initializes', () => {
    const module = TestBed.inject(LoanPaymentJourneyWrapperBundleModule);
    expect(module).toBeTruthy();
  });

  it('should inject loansCommunicationService with INITIATE_PAYMENT_JOURNEY_COMMUNICATOR token', inject(
    [INITIATE_PAYMENT_JOURNEY_COMMUNICATOR],
    (injectService: LoansCommunicationService) => {
      expect(injectService).toBe(loansCommunicationService);
    },
  ));
});
