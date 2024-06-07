import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  LoanPaymentRouteResolver,
  LoansStoreService,
  RETAIL_LOANS_JOURNEY_LOANS_BASE_PATH,
} from '@backbase/loans-retail-journey';
import { LoansCommunicationService } from '@backbase/retail/feature/communication';
import {
  INITIATE_PAYMENT_JOURNEY_BANK_CALENDAR_BASE_PATH,
  INITIATE_PAYMENT_JOURNEY_COMMUNICATOR,
} from '@backbase/initiate-payment-journey-ang';

import {
  APP_INITIATE_PAYMENT_JOURNEY_BANK_CALENDAR_BASE_PATH,
  APP_LOANS_JOURNEY_BASE_PATH,
} from '../../../service-paths.module';
import { PERMISSIONS } from '../../../auth/permissions';
import { LoanPaymentJourneyWrapperComponent } from './loan-payment-wrapper/loan-payment-wrapper.component';

const ROUTES: Routes = [
  {
    path: '',
    component: LoanPaymentJourneyWrapperComponent,
    children: [
      {
        path: 'loans-advance',
        loadChildren: () =>
          import('./new-loan-advance-bundle.module').then((m) => m.NewLoansAdvanceJourneyBundleModule),
        data: {
          pageTitle: $localize`:@@loan-payments.page-title.payments.loan-advance:Loan Advance`,
        },
      },
      {
        path: 'loans-payment',
        loadChildren: () =>
          import('./new-loan-payment-bundle.module').then((m) => m.NewLoansPaymentJourneyBundleModule),
        data: {
          pageTitle: $localize`:@@loan-payments.page-title.payments.loan-payment:Repay Loan`,
        },
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

@NgModule({
  declarations: [LoanPaymentJourneyWrapperComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  providers: [
    {
      provide: INITIATE_PAYMENT_JOURNEY_COMMUNICATOR,
      useExisting: LoansCommunicationService,
    },
    LoansStoreService,
    {
      provide: RETAIL_LOANS_JOURNEY_LOANS_BASE_PATH,
      useExisting: APP_LOANS_JOURNEY_BASE_PATH,
    },
    {
      provide: INITIATE_PAYMENT_JOURNEY_BANK_CALENDAR_BASE_PATH,
      useExisting: APP_INITIATE_PAYMENT_JOURNEY_BANK_CALENDAR_BASE_PATH,
    },
  ],
})
export class LoanPaymentJourneyWrapperBundleModule {}
