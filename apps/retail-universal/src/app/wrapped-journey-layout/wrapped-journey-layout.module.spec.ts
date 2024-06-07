import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  QuickTransferJourneyConfigurationToken,
  QuickTransferProductKinds,
} from '@backbase/quick-transfer-journey-ang';

import { WrappedJourneyLayoutModule } from './wrapped-journey-layout.module';
import { ServicePathsModule } from '../service-paths.module';

describe('WrappedJourneyLayoutModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
        ServicePathsModule,
        WrappedJourneyLayoutModule,
      ],
    });
  });

  it('should provide a configuration for QuickTransferJourneyModule that excludes the connected accounts product', () => {
    const quickTransferJourneyConfig = TestBed.inject(QuickTransferJourneyConfigurationToken);
    expect(quickTransferJourneyConfig.fields.fromAccount.productKinds).not.toContain(
      QuickTransferProductKinds.connectedAccounts,
    );
    expect(quickTransferJourneyConfig.fields.toAccount.productKinds).not.toContain(
      QuickTransferProductKinds.connectedAccounts,
    );
  });
});
