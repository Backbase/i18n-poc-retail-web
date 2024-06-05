import { SharedLocaleSelectorComponent } from './shared-locale-selector.component';
import { SharedLocaleSelectorService } from './shared-locale-selector.service';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('bb-shared-locale-selector', () => {
  let layoutComponentFixture: ComponentFixture<SharedLocaleSelectorComponent>;
  let component: SharedLocaleSelectorComponent;
  let localeService: SharedLocaleSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedLocaleSelectorComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: SharedLocaleSelectorService,
          useValue: {
            currentLocale: 'en',
            setLocale: () => jasmine.createSpy(),
          },
        },
      ],
    });

    localeService = TestBed.inject(SharedLocaleSelectorService);

    layoutComponentFixture = TestBed.createComponent(SharedLocaleSelectorComponent);
    component = layoutComponentFixture.debugElement.componentInstance;

    layoutComponentFixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should set a new value by calling the respective services after selecting a language`, () => {
    const setLocaleSpy = spyOn(localeService, 'setLocale');
    component.onSelectLocale('es');
    expect(setLocaleSpy).toHaveBeenCalledWith('es');
  });

  it(`should load component with the default locale`, () => {
    expect(localeService.currentLocale).toContain(component.currentLocale);
  });
});
