import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AccountsTransactionsJourneyWrapperModule } from './accounts-transactions-journey-wrapper.module';
import { ServicePathsModule } from '../../../service-paths.module';

describe('AccountsTransactionsJourneyWrapperModule', () => {
  let module: AccountsTransactionsJourneyWrapperModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule,
        ServicePathsModule,
        AccountsTransactionsJourneyWrapperModule,
      ],
    });

    module = TestBed.inject(AccountsTransactionsJourneyWrapperModule);
  });

  it('should be initializable', () => {
    expect(module).toBeTruthy();
  });
});
