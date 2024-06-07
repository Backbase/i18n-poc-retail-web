import { NgModule } from '@angular/core';
import {
  INITIATE_PAYMENT_CONFIG,
  INITIATE_PAYMENT_JOURNEY_COMMUNICATOR,
  InitiatePaymentConfig,
  InitiatePaymentJourneyModule,
  PayordOmniPaymentConfigProvider,
} from '@backbase/initiate-payment-journey-ang';
import { AccountsInitiatePaymentCommunication } from '@backbase/retail/feature/communication';

import { cashAdvancePaymentTypeConfig } from './initiate-payment-cash-advance-type';
import { initiatePaymentProviders } from '../transfers/initiate-payment-providers.util';

const initiatePaymentConfig: InitiatePaymentConfig = {
  paymentTypes: [cashAdvancePaymentTypeConfig],
  businessFunctions: [cashAdvancePaymentTypeConfig.businessFunction],
  options: {
    enablePaymentTemplateSelector: false,
    enableSavePaymentAsTemplate: false,
    pageSize: 100,
  },
};

@NgModule({
  imports: [InitiatePaymentJourneyModule.forRoot()],
  providers: [
    PayordOmniPaymentConfigProvider,
    ...initiatePaymentProviders,
    {
      provide: INITIATE_PAYMENT_CONFIG,
      useValue: initiatePaymentConfig,
    },
    {
      provide: INITIATE_PAYMENT_JOURNEY_COMMUNICATOR,
      useExisting: AccountsInitiatePaymentCommunication,
    },
  ],
})
export class QuickActionsCashAdvanceBundleModule {}
