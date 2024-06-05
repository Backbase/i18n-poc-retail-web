import { NgModule } from '@angular/core';
import {
  InitiatePaymentJourneyModule,
  INITIATE_PAYMENT_CONFIG,
  INITIATE_PAYMENT_JOURNEY_COMMUNICATOR,
  PayordOmniPaymentConfigProvider,
  POCKET_TRANSFER,
  ReviewScreens,
  InitiatePaymentConfig,
} from '@backbase/initiate-payment-journey-ang';
import { PaymentsCommunicationService } from '@backbase/retail/feature/communication';

import { initiatePaymentProviders } from './initiate-payment-providers.util';

const initiatePaymentConfig: InitiatePaymentConfig = {
  paymentTypes: [POCKET_TRANSFER],
  businessFunctions: [POCKET_TRANSFER.businessFunction],
  options: {
    reviewScreenType: ReviewScreens.ADAPTED,
    header: () => $localize`:@@pocket.transfer.add.header:`,
    ɵkeepOnResetFields: ['counterparty'],
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
      useExisting: PaymentsCommunicationService,
    },
  ],
})
export class PocketTransferBundleModule {}
