import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TitleStrategy } from '@angular/router';
import {
  APPLICATION_NAME,
  APPLICATION_VERSION,
  AppVersionInterceptor,
  BreadcrumbTitleStrategy,
} from '@backbase/foundation-ang/core';
import { StepUpInterceptor } from '@backbase/identity-auth/step-up';
import { NOTIFICATIONS_BADGE_NOTIFICATIONS_BASE_PATH } from '@backbase/notifications-ang';
import { RemoteConfigService } from '@backbase/remote-config-ang';
import { AMOUNT_CONFIG_TOKEN, AmountConfig } from '@backbase/ui-ang/amount';
import { LOCALE_LIST, LocaleCatalog } from '@backbase/ui-ang/locale-selector';
import { SharedUserContextInterceptor } from '@backbase/shared/feature/user-context';
import { initProviders } from '@backbase/shared/util/app-core';
import { MOCKS_TOKEN } from '@backbase/shared/feature/auth';

import { environment } from '../environments/environment';
import { appModuleImports } from './app-module-imports';
import { AppComponent } from './app.component';
import { RetailAppRemoteConfig } from './remote-config/remote-config';
import { APP_NOTIFICATIONS_BASE_PATH, ServicePathsModule } from './service-paths.module';

export function applicationInitializer(remoteConfig: RemoteConfigService<RetailAppRemoteConfig>) {
  return () => remoteConfig.fetchAndActivate();
}

const localeCatalog: LocaleCatalog = {
  ['en']: { language: 'English', icon: 'assets/ui-ang/flags/1x1/us.svg' },
  ['es']: { language: 'Español', icon: 'assets/ui-ang/flags/1x1/es.svg' },
};

const amountConfig: AmountConfig = {
  mapCurrency: true,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientXsrfModule,
    environment.animation ? BrowserAnimationsModule : NoopAnimationsModule,
    ServicePathsModule,
    ...appModuleImports,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: applicationInitializer,
      multi: true,
      deps: [RemoteConfigService],
    },
    {
      provide: NOTIFICATIONS_BADGE_NOTIFICATIONS_BASE_PATH,
      useExisting: APP_NOTIFICATIONS_BASE_PATH,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: StepUpInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SharedUserContextInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppVersionInterceptor,
      multi: true,
    },
    initProviders.inputEmailConfig,
    initProviders.inputPhoneConfig,
    initProviders.countryCodeFormatConfig,
    {
      provide: MOCKS_TOKEN,
      useValue: environment.mocksEnabled,
    },
    {
      provide: AMOUNT_CONFIG_TOKEN,
      useValue: amountConfig,
    },
    {
      provide: TitleStrategy,
      useClass: BreadcrumbTitleStrategy,
    },
    {
      provide: APPLICATION_NAME,
      useValue: $localize`:The name of the application@@bb.banking-app.application-name:Retail Banking`,
    },
    {
      provide: LOCALE_LIST,
      useValue: localeCatalog,
    },
    {
      provide: APPLICATION_VERSION,
      useValue: environment.calendarVersion,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
