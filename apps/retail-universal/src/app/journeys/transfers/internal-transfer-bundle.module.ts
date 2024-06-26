import { NgModule } from '@angular/core';
import {
  INITIATE_PAYMENT_CONFIG,
  INITIATE_PAYMENT_JOURNEY_COMMUNICATOR,
  InitiatePaymentConfig,
  InitiatePaymentJourneyModule,
  PayordOmniPaymentConfigProvider,
  ReviewScreens,
} from '@backbase/initiate-payment-journey-ang';
import { PaymentsCommunicationService } from '@backbase/retail/feature/communication';

import { initiatePaymentProviders } from './initiate-payment-providers.util';
import { internalTransferUniversalConfig } from './internal-transfer-payment-type-config';

const initiatePaymentConfig: InitiatePaymentConfig = {
  paymentTypes: [internalTransferUniversalConfig],
  businessFunctions: [internalTransferUniversalConfig.businessFunction],
  options: {
    enablePaymentTemplateSelector: false,
    enableSavePaymentAsTemplate: false,
    reviewScreenType: ReviewScreens.ADAPTED,
    isModalView: false,
    header: () => '',
    enableCalendarService: true,
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
export class InternalTransferJourneyBundleModule {}
