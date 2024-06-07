const violationsMock = jest.fn(() => ({
  violations: [
    {
      description: 'Ensures all ARIA attributes have valid values',
      help: 'ARIA attributes must conform to valid values',
      nodes: [
        {
          html: '<img src="./path/to/asset.png" />',
          failureSummary: 'Fix all of the following:\n/ Images must have alternate text',
          target: ['#selector'],
        },
      ],
    },
  ],
}));

jest.mock('@axe-core/playwright', () =>
  jest.fn(() => ({
    withTags: () => ({
      include: jest.fn(() => ({ analyze: violationsMock })),
      analyze: violationsMock,
    }),
  })),
);

jest.mock('@playwright/test');

import * as axeBuilder from '@axe-core/playwright';
import { A11yScanner } from './a11y-scanner';
import { Locator, Page } from '@playwright/test';

describe('A11yScanner', () => {
  let a11yScanner: A11yScanner;

  beforeEach(() => {
    jest.clearAllMocks();
    a11yScanner = new A11yScanner();
  });

  it('#scanResults should throw exception when no scan is run', () => {
    expect(() => a11yScanner.scanResults).toThrow();
  });

  it('#generateShortReport should throw exception when no scan is run', () => {
    expect(() => a11yScanner.generateShortReport()).toThrow();
  });

  it('#generateViolationsReport should throw exception when no scan is run', () => {
    expect(() => a11yScanner.generateViolationsReport()).toThrow();
  });

  describe('#scanPage', () => {
    let page: Page = {
      viewportSize: jest.fn(() => ({
        height: 100,
        width: 100,
      })),
      waitForTimeout: jest.fn(),
      locator: jest.fn(() => ({
        isHidden: jest.fn(() => false),
      })),
      setViewportSize: jest.fn(),
    } as unknown as Page;

    jest.spyOn(document, 'querySelector').mockImplementation(
      () =>
        ({
          offsetParent: {
            offsetTop: 5,
            offsetLeft: 5,
          },
        } as unknown as Element),
    );
    jest.spyOn(document, 'createElement').mockReturnValue({ setAttribute: jest.fn() } as unknown as HTMLElement);
    jest.spyOn(document.body, 'appendChild').mockReturnValue({} as HTMLElement);

    beforeEach(() => {
      jest.clearAllMocks();
      a11yScanner = new A11yScanner();
      page = {
        ...page,
        evaluate: jest
          .fn()
          .mockReturnValueOnce(250)
          .mockImplementationOnce((getOffsetValuesRecursive) => {
            getOffsetValuesRecursive('css_selector');
            return 250;
          })
          .mockResolvedValueOnce({
            height: 250,
            width: 100,
          })
          .mockImplementationOnce((appendHighlightedFn) => {
            appendHighlightedFn();
            return {
              height: 250,
              width: 100,
            };
          }),
      };
    });

    it('should generate results for a scan', async () => {
      const scanResults = await a11yScanner.scanPage(page, 'css_selector');
      expect(axeBuilder.default).toHaveBeenCalled();
      expect(scanResults).toStrictEqual(violationsMock());
      expect(scanResults).toStrictEqual(a11yScanner.scanResults);
    });

    it('should enable the generation of a short report', async () => {
      const locator: Locator = {
        toString: jest.fn(() => `locator('css_selector')`),
      } as unknown as Locator;

      await a11yScanner.scanPage(page, locator);
      a11yScanner.highlightViolations(page);
      const shortReport = a11yScanner.generateShortReport();

      expect(shortReport).toContain('Images must have alternate text');
    });
  });
});
