jest.mock('./a11y-scanner', () => ({
  A11yScanner: jest.fn().mockImplementation(() => {
    return {
      scanPage: jest.fn(),
      scanResults: { violations: [] },
      highlightViolations: jest.fn(),
      generateViolationsReport: jest.fn(),
      generateShortReport: jest.fn(),
    };
  }),
}));
jest.mock('@playwright/test');

import { A11yScanner } from './a11y-scanner';
import playwright, { TestInfo, Page } from '@playwright/test';

import { initExpectExtender, toBeAccessible } from './expect-extender';

describe('ExpectExtender', () => {
  it('#initExpectExtender should make call to expect.extend', async () => {
    initExpectExtender();
    expect(playwright.expect.extend).toHaveBeenCalled();
  });

  describe('#toBeAccessible', () => {
    let a11yScanner: A11yScanner;

    beforeEach(() => {
      jest.clearAllMocks();
      a11yScanner = new A11yScanner();
    });

    it('should return success message when no a11y rules are violated', async () => {
      const page: Page = undefined;
      const include = '.css_class';
      const scanResult = await toBeAccessible(a11yScanner, page, null, include);

      expect(a11yScanner.scanPage).toHaveBeenCalledWith(page, include);
      expect(scanResult.message()).toBe('pass');
      expect(scanResult.pass).toBe(true);
    });

    it('should return report with violations when a11y rules are violated', async () => {
      const page: Page = {} as Page;
      const testInfo: TestInfo = {
        attach: jest.fn(),
      } as unknown as TestInfo;

      Object.defineProperty(a11yScanner, 'scanResults', {
        value: {
          violations: [{}],
        },
      });

      const scanResult = await toBeAccessible(a11yScanner, page, testInfo);

      expect(a11yScanner.scanPage).toHaveBeenCalledWith(page, undefined);
      expect(a11yScanner.highlightViolations).toHaveBeenCalledWith(page);

      scanResult.message();

      expect(a11yScanner.generateShortReport).toHaveBeenCalled();
      expect(scanResult.pass).toBe(false);
    });
  });
});
