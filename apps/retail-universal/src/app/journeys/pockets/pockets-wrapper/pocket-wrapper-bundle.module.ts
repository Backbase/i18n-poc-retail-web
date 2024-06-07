import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PERMISSIONS } from '../../../auth/permissions';
import { InitiatePaymentJourneyWrapperComponent } from '../../transfers/wrapper-initiate-payment-journey/initiate-payment-journey.component';

const ROUTES = [
  {
    path: '',
    loadChildren: () =>
      import('../manage-pockets-journey-bundle.module').then((m) => m.ManagePocketsJourneyBundleModule),
    data: {
      entitlements: PERMISSIONS.canViewManagePockets,
    },
  },
  {
    path: '',
    component: InitiatePaymentJourneyWrapperComponent,
    data: {
      modalTitle: $localize`:@@retail-pocket-payment.title:Add Money`,
      editModeTitle: 'Edit a Transfer',
    },
    children: [
      {
        path: 'pocket-transfer',
        loadChildren: () =>
          import('../../transfers/pocket-transfer-bundle.module').then((m) => m.PocketTransferBundleModule),
        data: {
          entitlements: PERMISSIONS.canViewManagePockets,
        },
        title: $localize`:@@retail-pocket-payment.nav.item.title:Pocket Payment`,
      },
      {
        path: 'edit-pocket-schedule',
        loadChildren: () =>
          import('../../transfers/pocket-transfer-bundle.module').then((m) => m.PocketTransferBundleModule),
        data: {
          entitlements: PERMISSIONS.canViewManagePockets,
        },
        title: $localize`:@@retail-pocket-payment.nav.item.title:Edit Pocket Schedule`,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  providers: [],
})
export class PocketWrapperBundleModule {}
