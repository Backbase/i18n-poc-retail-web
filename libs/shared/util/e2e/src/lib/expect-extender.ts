import { expect, Locator, Page, TestInfo } from '@playwright/test';
import { A11yScanner } from './a11y-scanner';
import { AxeScanner } from './interfaces';

export function initExpectExtender(): void {
  function initA11yExpect(a11yScanner: AxeScanner): void {
    expect.extend({
      /**
       * Ensures the page is accessible according to configuration.
       *
       * If result of scanning have violations details of the violations will be attached to general report.
       *
       * ```js
       * await expect(page).toBeAccessible(testInfo);
       * await expect(page).toBeAccessible(testInfo, 'html_tag');
       * await expect(page).toBeAccessible(testInfo, 'css_selector');
       * await expect(page).toBeAccessible(testInfo, locator);
       * ```
       *
       * @param page Page provides methods to interact with a single tab.
       * @param testInfo TestInfo contains information about the currently running test.
       * @param include Playwright type Locator or string as CSS selector of page part for including to scanning. If not put it will be used selector from configuration.
       */
      async toBeAccessible(page: Page, testInfo: TestInfo, include?: Locator | string) {
        return toBeAccessible(a11yScanner, page, testInfo, include);
      },
    });
  }

  initA11yExpect(new A11yScanner());
}

export async function toBeAccessible(
  a11yScanner: AxeScanner,
  page: Page,
  testInfo: TestInfo,
  include?: Locator | string,
) {
  await a11yScanner.scanPage(page, include);

  if (a11yScanner.scanResults.violations.length === 0) {
    return {
      message: () => 'pass',
      pass: true,
    };
  }
  await a11yScanner.highlightViolations(page);

  await testInfo.attach('accessibility-scan-results', {
    body: JSON.stringify(a11yScanner.generateViolationsReport(), null, 2),
    contentType: 'application/json',
  });
  return {
    message: () => a11yScanner.generateShortReport(),
    pass: false,
  };
}
