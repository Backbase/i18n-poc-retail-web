import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PERMISSIONS } from '../../../auth/permissions';
import { InitiatePaymentJourneyWrapperComponent } from '../../transfers/wrapper-initiate-payment-journey/initiate-payment-journey.component';
import { PocketWrapperBundleModule } from './pocket-wrapper-bundle.module';

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
    children: [
      {
        path: 'pocket-transfer',
        loadChildren: () =>
          import('../../transfers/pocket-transfer-bundle.module').then((m) => m.PocketTransferBundleModule),
        data: {
          entitlements: PERMISSIONS.canViewManagePockets,
          pageTitle: $localize`:@@retail-pocket-payment.title:Add Money`,
        },
        title: $localize`:@@retail-pocket-payment.nav.item.title:Pocket Payment`,
      },
    ],
  },
];

describe('PocketWrapperBundleModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PocketWrapperBundleModule, RouterTestingModule.withRoutes(ROUTES)],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(PocketWrapperBundleModule);
    expect(module).toBeTruthy();
  });
});
