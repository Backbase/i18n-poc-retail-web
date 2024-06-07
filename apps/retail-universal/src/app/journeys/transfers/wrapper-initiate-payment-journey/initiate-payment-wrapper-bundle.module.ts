import { KeyboardClickModule } from '@backbase/ui-ang/keyboard-click-directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@backbase/ui-ang/button';
import { PERMISSIONS } from '../../../auth/permissions';
import { InitiatePaymentJourneyWrapperComponent } from './initiate-payment-journey.component';

@NgModule({
  declarations: [InitiatePaymentJourneyWrapperComponent],
  imports: [
    CommonModule,
    ButtonModule,
    KeyboardClickModule,
    RouterModule.forChild([
      {
        path: '',
        component: InitiatePaymentJourneyWrapperComponent,
        children: [
          {
            path: 'make-a-transfer',
            loadChildren: () =>
              import('../internal-transfer-bundle.module').then((m) => m.InternalTransferJourneyBundleModule),
          },
        ],
        data: {
          editModeTitle: $localize`:@@make-transfer.nav.item.edit-title:Edit a Transfer`,
          modalTitle: $localize`:@@routable-modal.modal-title.payments-internal-transfer:Make a Transfer`,
          entitlements: PERMISSIONS.canCreateA2A,
        },
        title: $localize`:@@make-transfer.nav.item.title:Make a Transfer - Transfer`,
      },
      {
        path: '',
        component: InitiatePaymentJourneyWrapperComponent,
        children: [
          {
            path: 'money-to-member',
            loadChildren: () =>
              import('../intrabank-transfer-bundle.module').then((m) => m.IntrabankTransferJourneyBundleModule),
          },
        ],
        data: {
          editModeTitle: $localize`:@@money-to-member.nav.item.edit-title:Edit Payment Details`,
          modalTitle: $localize`:@@routable-modal.modal-title.payments-intrabank-transfer:Transfer money within bank`,
          entitlements: PERMISSIONS.canCreateA2A,
        },
        title: $localize`:@@money-to-member.nav.item.title:Transfer Money Within Bank - Transfer`,
      },
    ]),
  ],
})
export class InitiatePaymentWrapperBundleModule {}
