import type { AxeResults, Result } from 'axe-core';
import { Locator, Page } from '@playwright/test';

export interface AxeScanner {
  scanPage: (page: Page, include: Locator | string) => Promise<AxeResults>;
  scanResults: AxeResults;
  highlightViolations: (page: Page) => Promise<void>;
  generateViolationsReport: () => Result[];
  generateShortReport: () => string;
}
