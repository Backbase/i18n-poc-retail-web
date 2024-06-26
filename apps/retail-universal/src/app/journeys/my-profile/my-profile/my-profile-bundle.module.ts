import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '@backbase/ui-ang/header';
import { MyProfileViewComponent } from './my-profile-view/my-profile-view.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule.forChild([
      {
        path: '',
        component: MyProfileViewComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: '',
          },
          {
            path: '',
            loadChildren: () =>
              import('../../self-service/bundle-profile-journey.module').then((m) => m.SelfServiceJourneyBundleModule),
            title: $localize`:@@my-profile.nav.item.title:My Profile - Self service`,
          },
        ],
      },
    ]),
  ],
  declarations: [MyProfileViewComponent],
})
export class MyProfileBundleModule {}
