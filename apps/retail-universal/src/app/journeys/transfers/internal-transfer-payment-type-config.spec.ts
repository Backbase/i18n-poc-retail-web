import { TestBed } from '@angular/core/testing';
import { PaymentFormGroup } from '@backbase/initiate-payment-journey-ang';
import { internalTransferUniversalConfig } from './internal-transfer-payment-type-config';

describe('internalTransferUniversalConfig', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
    });
  });

  it('should set Config', () => {
    expect(internalTransferUniversalConfig.fields.length).toBe(4);
  });

  it('should have connectedAccounts false for initiator', () => {
    const initiator = internalTransferUniversalConfig.fields[0] as PaymentFormGroup;
    expect(initiator.fields[0].options.connectedAccounts).toBe(false);
  });

  it('should have connectedAccounts false for counterparty', () => {
    const counterparty = internalTransferUniversalConfig.fields[1] as PaymentFormGroup;
    expect(counterparty.fields[0].options.connectedAccounts).toBe(false);
  });
});
