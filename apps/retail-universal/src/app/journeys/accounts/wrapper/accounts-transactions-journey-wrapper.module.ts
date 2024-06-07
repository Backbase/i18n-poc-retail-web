import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WrappedJourneyLayoutComponent, WrappedJourneyLayoutModule } from '../../../wrapped-journey-layout';

const routes: Routes = [
  {
    path: '',
    component: WrappedJourneyLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../bundle/accounts-transactions-journey-bundle.module').then(
            (_) => _.AccountsTransactionsJourneyBundleModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [WrappedJourneyLayoutModule, RouterModule.forChild(routes)],
})
export class AccountsTransactionsJourneyWrapperModule {}
