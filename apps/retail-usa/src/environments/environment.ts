// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AuthConfig } from 'angular-oauth2-oidc';
import { Environment } from './type';
import appInfo from '../../version.json';

export const environment: Environment = {
  /**
   * Whether to run the app in production mode.
   * Default: false
   */
  production: false,

  /**
   * Whether to enable animation capabilities
   * Default: true
   */
  animation: true,

  /**
   * Mock providers for Backbase services used when running the app in dev mode.
   */
  landingPageUrl: '/',
  apiRoot: '/api',
  baseHref: '/',
  googleApiKey: '${FE_MAPS_API_KEY}',
  disputeTopicId: '',
  inquireTopicId: '',
  appVersion: appInfo.version,
  calendarVersion: appInfo.version,
  accountsUseArrangementViewsApi: false,
  /**
   * @deprecated - once the flag is removed, the dashboard page will become the primary application page
   *
   * The dashboard journey page is meant to replace the accounts page as the primary page of the application.
   * To avoid breaking changes for the customers who is not ready to use the dashboard, we disable it by default,
   * which falls back to the accounts journey page and thus leads to no changes in the app's behavior.
   */
  dashboardEnabled: true,
};

export const authConfig: (baseUrl: string) => AuthConfig = (_baseUrl = '') => ({
  // Url of the Identity Provider
  // This address for retail is used because the CORS policy there allows local development
  // url <change_this_placeholder_to_your_identity_url_with_realm> is meant to be here
  issuer: '<change_this_placeholder_to_your_identity_url_with_realm>',

  // URL of the SPA to redirect the user to after login
  redirectUri: document.location.origin + '/select-context',

  // The SPA's id. The SPA is registered with this id at the auth-server
  clientId: 'bb-web-client',

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications. (IE: does not support PKCE)
  // dummyClientSecret: 'secret',

  responseType: 'code',

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  scope: 'openid',

  requireHttps: false,

  showDebugInformation: true,

  logoutUrl: document.location.origin + '/logout',
  useSilentRefresh: true,
  silentRefreshTimeout: 5000,
  silentRefreshRedirectUri: document.location.origin + '/assets/silent-refresh.htm',
});
