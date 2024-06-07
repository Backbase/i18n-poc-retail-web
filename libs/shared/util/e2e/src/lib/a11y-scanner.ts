import type { AxeResults, Result, NodeResult } from 'axe-core';
import { Locator, Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { AxeScanner } from './interfaces';

export class A11yScanner implements AxeScanner {
  private _scanResults?: AxeResults;
  private _modalWindowSelector = '.modal-content-container';

  readonly tags: string[] = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'];

  private generateHighlightingStyle(
    elementPosition: { offsetTop: number; offsetLeft: number },
    elementSize: { height: number; width: number },
  ): string {
    return [
      'border-width: 1px border-style: solid;',
      'border-color: #eb34c9;',
      'box-shadow: 0 0 10px 4px #e267ff;',
      `height: ${elementSize.height}px;`,
      `width: ${elementSize.width}px;`,
      'position: absolute;',
      `left: ${elementPosition.offsetLeft}px;`,
      `top: ${elementPosition.offsetTop}px;`,
      'z-index: 9999999;',
    ].join(' ');
  }

  /**
   * Return all results of scan.
   * Throw an error if a scan not been run yet.
   * ```js
   * Usage:
   * const a11yScanner = new A11yScanner(page);
   * await a11yScanner.scanPage();
   * const scanResults = a11yScanner.scanResults;
   * ```
   */
  get scanResults(): AxeResults {
    if (!this._scanResults) {
      throw Error('Please run a scan before calling .scanResults');
    }
    return this._scanResults;
  }

  /**
   * Scans the page or page element for accessibility violations.
   * ```js
   * Usage:
   * const a11yScanner = new A11yScanner();
   * await a11yScanner.scanPage(page);
   * or
   * const scanResults = await a11yScanner.scanPage(page);
   * or
   * await a11yScanner.scanPage(page, 'html_tag');
   * or
   * await a11yScanner.scanPage(page, 'css_selector');
   * or
   * await a11yScanner.scanPage(page, locator);
   * ```
   * @param page Page to be scanned
   * @param include Playwright Locator or CSS selector
   */
  async scanPage(page: Page, include?: Locator | string): Promise<AxeResults> {
    let axeBuilder = new AxeBuilder({ page }).withTags(this.tags);

    if (include) {
      const selectorForInclude = this.transformToCSSSelector(include);
      axeBuilder = axeBuilder.include(selectorForInclude);
    }

    await page.waitForTimeout(3000);
    const scanResult = await axeBuilder.analyze();
    this._scanResults = scanResult;
    return scanResult;
  }

  /**
   * Transform the playwright locator into a CSS selector if it was given.
   * @param include Playwright Locator or CSS selector.
   */
  private transformToCSSSelector(include: Locator | string): string {
    if (typeof include == 'string') {
      return include.replace(/ >> /g, ' ');
    }

    const regex = /(?<=').*?(?=')/;
    const selector = regex.exec(include.toString());
    if (selector) {
      return selector[0];
    }
    return '';
  }

  /**
   * Extract nodes of violated elements from scan results.
   */
  private getNodesWithViolations(): NodeResult[] {
    if (!this._scanResults) {
      throw new Error('Please run a scan before calling .getNodesWithViolations()');
    }
    const nodes: NodeResult[] = [];

    this._scanResults.violations.forEach((violation) => {
      violation.nodes.forEach((node) => {
        nodes.push(node);
      });
    });

    return nodes;
  }

  /**
   * Extract selectors of violated elements from scan results.
   */
  private getSelectorsOfViolatedElements(): string[] {
    if (!this._scanResults) {
      throw new Error('Please run a scan before calling .getSelectorsOfViolatedElements()');
    }
    const selectors: string[] = [];

    this._scanResults.violations.forEach((violation) => {
      violation.nodes.forEach((node) => {
        selectors.push(node.target[0].toString());
      });
    });

    return selectors;
  }

  /**
   * Highlight violated elements.
   * Throw an error if a scan not been run yet.
   * ```js
   * Usage
   * const a11yScanner = new A11yScanner();
   * await a11yScanner.scanPage(page);
   * await a11yScanner.highlightViolations();
   * ```
   * @param page Instance of page that is being scanned
   */
  async highlightViolations(page: Page): Promise<void> {
    if (!this._scanResults) {
      throw new Error('Please run a scan before calling .highlightViolations()');
    }
    await this.modifyViewPortSize(page);

    const selectors = this.getSelectorsOfViolatedElements();

    for (const selector of selectors) {
      const elementPosition = await page.evaluate(this.getOffsetValues(), selector);

      const elementSize = await page.evaluate((selector) => {
        const element = document.querySelector<HTMLElement>(selector)!;
        return {
          height: element.offsetHeight,
          width: element.offsetWidth,
        };
      }, selector);

      const styleAttributes = this.generateHighlightingStyle(elementPosition, elementSize);

      await page.evaluate((styleAttributes) => {
        const highlightedElement = document.createElement('div');
        highlightedElement.setAttribute('style', styleAttributes);
        document.body.appendChild(highlightedElement);
      }, styleAttributes);
    }
  }

  private getOffsetValues(): (selector: string) => {
    offsetTop: number;
    offsetLeft: number;
  } {
    return (selector: string) => {
      function getOffsetValuesRecursive(element: HTMLElement): { offsetTop: number; offsetLeft: number } {
        if (!element.offsetParent) {
          return {
            offsetTop: element.offsetTop,
            offsetLeft: element.offsetLeft,
          };
        }

        const parentOffsetValues = getOffsetValuesRecursive(element.offsetParent as HTMLElement);

        return {
          offsetTop: parentOffsetValues.offsetTop + element.offsetTop,
          offsetLeft: parentOffsetValues.offsetLeft + element.offsetLeft,
        };
      }

      return getOffsetValuesRecursive(document.querySelector(selector));
    };
  }

  /**
   * The current viewport height will be scaled to modal window height if the modal window is visible, and it has a height bigger than the current viewport height.
   * @param page Instance of page that is being scanned
   */
  private async modifyViewPortSize(page: Page): Promise<void> {
    if (await page.locator(this._modalWindowSelector).isHidden()) {
      return;
    }

    const currentViewportSize = page.viewportSize();
    const modalWindowHeight: number = await page.evaluate(
      `document.querySelector('${this._modalWindowSelector}').offsetHeight`,
    );

    if (currentViewportSize && modalWindowHeight > currentViewportSize.height) {
      await page.setViewportSize({ height: modalWindowHeight + 100, width: currentViewportSize.width });
    }
  }

  /**
   * Create a report of violations that contains detailed information.
   * Throw an error if a scan not been run yet.
   * ```js
   * const a11yScanner = new A11yScanner(page);
   * await a11yScanner.scanPage();
   * const  scanResults = a11yScanner.generateViolationsReport();
   * ```
   */
  generateViolationsReport(): Result[] {
    if (!this._scanResults) {
      throw new Error('Please run a scan before calling .violationsReport()');
    }
    return this._scanResults.violations;
  }

  /**
   * Create a report of violations that contains short information.
   * Throw an error if a scan not been run yet.
   * ```js
   * Usage:
   * const a11yScanner = new A11yScanner(page);
   * await a11yScanner.scanPage();
   * const scanResults = a11yScanner.generateShortReport();
   * ```
   * ```
   * Example of report:
   * 1 Elements must have sufficient color contrast
   * Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds
   *
   * 1.1. <span class="DocSearch-Button-Placeholder">Search</span>
   * Fix any of the following:
   *   Element has insufficient color contrast of 2.27 (foreground color: #969faf, background color: #ebedf0, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1
   * ```
   */
  generateShortReport(): string {
    if (!this._scanResults) {
      throw new Error('Please run a scan before calling .generateShortReport()');
    }

    const nodes = this.getNodesWithViolations();

    let report = `${this._scanResults.violations.length} rules were violated in ${nodes.length} places:\n\n`;

    this._scanResults.violations.forEach((violation, violationIndex) => {
      report += `\n${violationIndex + 1} ${violation.help}\n${violation.description}\n\n`;

      violation.nodes.forEach((node, nodeIndex) => {
        report += `${violationIndex + 1}.${nodeIndex + 1}. ${node.html}\n${node.failureSummary}\n\n`;
      });
    });

    return report;
  }
}
