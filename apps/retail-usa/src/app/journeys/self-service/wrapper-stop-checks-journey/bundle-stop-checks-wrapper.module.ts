import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  StopChecksJourneyConfiguration,
  StopChecksJourneyConfigurationToken,
  STOP_CHECKS_JOURNEY_ARRANGEMENT_MANAGER_BASE_PATH,
  STOP_CHECKS_JOURNEY_PAYMENT_ORDER_BASE_PATH,
  STOP_CHECKS_JOURNEY_STOP_CHECKS_BASE_PATH,
  LoadMoreMethod,
} from '@backbase/stop-checks-journey-ang';
import { ButtonModule } from '@backbase/ui-ang/button';
import { HeaderModule } from '@backbase/ui-ang/header';
import { IconModule } from '@backbase/ui-ang/icon';
import { appPaginationTypeMapper } from '@backbase/shared/feature/config';

import {
  APP_ARRANGEMENT_MANAGER_BASE_PATH,
  APP_PAYMENT_ORDER_BASE_PATH,
  APP_STOP_CHECKS_BASE_PATH,
} from '../../../service-paths.module';
import { StopChecksJourneyWrapperComponent } from './stop-checks-journey-wrapper.component';
import { APP_CONFIG } from '../../../app.config';

const paginationTypeMapper = appPaginationTypeMapper(
  {
    pagination: LoadMoreMethod.PAGINATION,
    'load-more': LoadMoreMethod.LOAD_MORE,
    'infinite-scroll': LoadMoreMethod.INFINITE_SCROLL,
  },
  LoadMoreMethod.LOAD_MORE,
);

const stopChecksJourneyConfiguration: Partial<StopChecksJourneyConfiguration> = {
  shouldDisplayHeading: false,
  pageSize: APP_CONFIG.pageSize,
  paginationType: paginationTypeMapper(APP_CONFIG.paginationType),
};

@NgModule({
  declarations: [StopChecksJourneyWrapperComponent],
  providers: [
    {
      provide: StopChecksJourneyConfigurationToken,
      useValue: stopChecksJourneyConfiguration,
    },
    {
      provide: STOP_CHECKS_JOURNEY_PAYMENT_ORDER_BASE_PATH,
      useExisting: APP_PAYMENT_ORDER_BASE_PATH,
    },
    {
      provide: STOP_CHECKS_JOURNEY_STOP_CHECKS_BASE_PATH,
      useExisting: APP_STOP_CHECKS_BASE_PATH,
    },
    {
      provide: STOP_CHECKS_JOURNEY_ARRANGEMENT_MANAGER_BASE_PATH,
      useExisting: APP_ARRANGEMENT_MANAGER_BASE_PATH,
    },
  ],
  imports: [
    IconModule,
    HeaderModule,
    ButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: StopChecksJourneyWrapperComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('../bundle-stop-checks.module').then((m) => m.StopChecksJourneyBundleModule),
          },
        ],
      },
    ]),
  ],
})
export class StopChecksJourneyWrapperBundleModule {}
