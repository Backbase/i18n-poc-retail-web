import { DOCUMENT, LocationStrategy } from '@angular/common';
import { MockLocationStrategy } from '@angular/common/testing';

import { SharedLocaleSelectorService } from './shared-locale-selector.service';
import { TestBed } from '@angular/core/testing';
import { LOCALE_ID } from '@angular/core';

describe('SharedLocaleSelectorService', () => {
  let service: SharedLocaleSelectorService;

  let locationStrategy: MockLocationStrategy;

  let document: Pick<Document, 'location'>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SharedLocaleSelectorService,
        {
          provide: LOCALE_ID,
          useValue: 'en',
        },
        {
          provide: DOCUMENT,
          useValue: {
            location: {
              href: '/test-app/en/some/path',
            } as Location,
          },
        },
        {
          provide: LocationStrategy,
          useClass: MockLocationStrategy,
        },
      ],
    });

    service = TestBed.inject(SharedLocaleSelectorService);

    document = TestBed.inject(DOCUMENT);

    locationStrategy = TestBed.inject(LocationStrategy) as MockLocationStrategy;
  });

  describe('currentLocale', () => {
    it('should return current locale', () => {
      expect(service.currentLocale).toEqual('en');
    });
  });

  describe('setLocale', () => {
    describe('when application root is empty (/)', () => {
      beforeEach(() => {
        locationStrategy.internalBaseHref = '/en/';
        locationStrategy.internalPath = '/en/some/path';
      });

      it('should redirect when new locale is different from current locale', () => {
        service.setLocale('nl');
        expect(document.location.href).toEqual('/nl/some/path');
      });

      it('should not redirect when new locale is the same as current locale', () => {
        document.location.href = '/en/some/path';

        service.setLocale('en');
        expect(document.location.href).toEqual('/en/some/path');
      });
    });

    describe('when application root is not empty (/test-app/)', () => {
      beforeEach(() => {
        locationStrategy.internalBaseHref = '/test-app/en/';
        locationStrategy.internalPath = '/test-app/en/some/path';
      });

      it('should redirect when new locale is different from current locale', () => {
        service.setLocale('nl');
        expect(document.location.href).toEqual('/test-app/nl/some/path');
      });

      it('should not redirect when new locale is the same as current locale', () => {
        service.setLocale('en');
        expect(document.location.href).toEqual('/test-app/en/some/path');
      });
    });
  });
});
