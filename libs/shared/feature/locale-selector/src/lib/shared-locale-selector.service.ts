import { DOCUMENT, LocationStrategy } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';

@Injectable()
export class SharedLocaleSelectorService {
  constructor(
    private location: LocationStrategy,
    @Inject(LOCALE_ID) private locale: string,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  setLocale(locale: string) {
    const currentLocale = this.locale;

    // Get base href without locale
    const baseHref = this.location.getBaseHref().replace(new RegExp(`/${currentLocale}/?$`), '');

    if (locale !== currentLocale) {
      const fullPath = this.location.path(true);
      const basePathRegex = new RegExp(`^${baseHref}/${currentLocale}/?`);

      // Check if path includes base href and locale
      if (!basePathRegex.test(fullPath)) {
        return;
      }

      // Get path without base href and locale
      const path = fullPath.replace(basePathRegex, '');

      this.document.location.href = `${baseHref}/${locale}/${path}`;
    }
  }

  get currentLocale() {
    return this.locale;
  }
}
