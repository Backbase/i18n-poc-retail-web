export enum BreakPointSize {
  XSmall = 'XSmall',
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  XLarge = 'XLarge',
  XXLarge = 'XXLarge',
}

export const breakPointsMapping: Record<string, string> = {
  [BreakPointSize.XSmall]: '(max-width: 575px)',
  [BreakPointSize.Small]: '(min-width: 576px) and (max-width: 767.8px)',
  [BreakPointSize.Medium]: '(min-width: 768px) and (max-width: 991.8px)',
  [BreakPointSize.Large]: '(min-width: 992px) and (max-width: 1199.8px)',
  [BreakPointSize.XLarge]: '(min-width: 1200px) and (max-width: 1399.8px)',
  [BreakPointSize.XXLarge]: '(min-width: 1400px)',
};
