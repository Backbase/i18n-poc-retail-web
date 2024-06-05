import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsService } from '@backbase/foundation-ang/entitlements';
import { PERMISSIONS } from '../auth/permissions';

import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let fixture: ComponentFixture<LayoutComponent>;
  let component: LayoutComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule],
      providers: [ConditionsService],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('permissions should be setted', () => {
    expect(component.permissions).toEqual(PERMISSIONS);
  });

  it('should trigger focus on mainContent', () => {
    component.mainContent = {
      nativeElement: {
        focus: () => undefined,
      },
    };
    const mainContentFocus = spyOn(component.mainContent.nativeElement, 'focus');
    component.onActivate();

    expect(mainContentFocus).toHaveBeenCalled();
  });
});
