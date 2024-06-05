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
        loadChildren: () => import('../bundle').then((_) => _.DashboardJourneyBundleModule),
      },
    ],
  },
];

@NgModule({
  imports: [WrappedJourneyLayoutModule, RouterModule.forChild(routes)],
})
export class DashboardJourneyWrapperModule {}
