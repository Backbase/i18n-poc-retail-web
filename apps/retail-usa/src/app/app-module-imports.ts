/*
 *
 * The content of this file can be edited freely, but to maintain upgradability
 * this file should not be renamed and should always export an array named
 * `appModuleImports`.
 *
 */

import { StepUpModule } from '@backbase/identity-auth/step-up';
import { TransactionSigningModule } from '@backbase/identity-auth/transaction-signing';
import { RemoteConfigModule } from '@backbase/remote-config-ang';
import { AuthModule, TransactionSigningHeaderModule } from '@backbase/shared/feature/auth';
import { SharedAppCoreModule } from '@backbase/shared/util/app-core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { authConfig, environment } from '../environments/environment';
import { AppDataModule } from './app-data.module';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { remoteConfigDefaults } from './remote-config/remote-config';
import { RoutableModalModule } from './routable-modal/routable-modal.module';
import { UserContextModule } from './user-context/user-context.module';
// eslint-disable-next-line @nx/enforce-module-boundaries
import remoteConfigProjectDetails from './remote-config/release-template/project-config.json';
import packageJson from '../../../../package.json';

/**
 * Modules in this array are added to the `imports` array of the AppModule
 * in app.module.ts.
 */
export const appModuleImports = [
  SharedAppCoreModule.forRoot(environment),
  AuthModule.forRoot(environment.apiRoot, authConfig, environment.mocksEnabled),
  TransactionSigningModule.withConfig({
    enableAbandonOnDeparture: true,
    useLegacyImplementation: true,
  }),
  StepUpModule.withConfig({
    contactAdvisorPhoneNumber: '01234556677',
  }),
  TransactionSigningHeaderModule,
  LayoutModule,
  AppDataModule,
  AppRoutingModule,
  StoreModule.forRoot({}),
  EffectsModule.forRoot([]),
  RemoteConfigModule.forRoot({
    appName: remoteConfigProjectDetails.applications[0].name,
    appVersion: packageJson.backbase.appVersion,
    defaults: remoteConfigDefaults,
    disabled: false,
    projectName: remoteConfigProjectDetails.name,
    serviceRoot: '/api/remote-config',
  }),
  RoutableModalModule,
  UserContextModule,
];
