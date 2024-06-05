import { TestBed } from '@angular/core/testing';
import { SelfServiceJourneyBundleModule, profileConfigProvider } from './bundle-profile-journey.module';
import { LOCALE_ID } from '@angular/core';
import { environment } from '../../../environments/environment';

describe('SelfServiceJourneyBundleModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SelfServiceJourneyBundleModule],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(SelfServiceJourneyBundleModule);
    expect(module).toBeTruthy();
  });

  it('profileConfigProvider returns valid configuration', () => {
    const locale = TestBed.inject(LOCALE_ID);
    const config = profileConfigProvider(locale);

    expect(config).toBeTruthy();
    expect(config.userManageProfile).toBeTruthy();
    expect(config.userIdentitySecurityCenter).toBeTruthy();

    const expectedPath = `${environment.baseHref}${locale}/logout/username-success`;
    expect(config.userIdentitySecurityCenter.changeUsernameSuccessPath).toEqual(expectedPath);
  });
});
