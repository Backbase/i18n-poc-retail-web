import { TestBed } from '@angular/core/testing';
import { BudgetJourneyConfigurationToken } from '@backbase/budget-journey-ang';

import { BudgetJourneyBundleModule, budgetJourneyConfiguration } from './bundle-budget.module';

describe('BudgetJourneyBundleModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BudgetJourneyBundleModule],
      providers: [
        {
          provide: BudgetJourneyConfigurationToken,
          useValue: budgetJourneyConfiguration,
        },
      ],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(BudgetJourneyBundleModule);
    expect(module).toBeTruthy();
  });
});
