import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, Directive, Input } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { RemoteConfigModule, RemoteConfigConfigurationToken } from '@backbase/remote-config-ang';

import { WrappedJourneyLayoutComponent } from './wrapped-journey-layout.component';
import { remoteConfigDefaults } from '../../remote-config/remote-config';

@Directive({ selector: '[bbIfEntitlements]' })
class StubIfEntitlementsDirective {
  @Input()
  bbIfEntitlements: unknown;
}

describe('WrappedJourneyLayoutComponent', () => {
  let component: WrappedJourneyLayoutComponent;
  let fixture: ComponentFixture<WrappedJourneyLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, RemoteConfigModule],
      declarations: [WrappedJourneyLayoutComponent, StubIfEntitlementsDirective],
      providers: [
        {
          provide: RemoteConfigConfigurationToken,
          useValue: {
            appName: 'dummy-retail-web',
            appVersion: '0.0.7',
            defaults: remoteConfigDefaults,
          },
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(WrappedJourneyLayoutComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should not show the maintenance banner after dismiss', () => {
    component.remoteConfigParameters.showMaintenanceBanner = true;

    component.hideMaintenanceBanner();

    fixture.detectChanges();

    const maintenanceBanner: HTMLElement = fixture.nativeElement.querySelector('[title="Maintenance alert"]');

    expect(component.remoteConfigParameters.showMaintenanceBanner).toBeFalse();
    expect(maintenanceBanner).toBeNull();
  });
});
