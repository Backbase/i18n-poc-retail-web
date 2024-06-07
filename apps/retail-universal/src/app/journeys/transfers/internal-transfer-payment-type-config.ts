import {
  CounterPartyFields,
  InitiatorFields,
  INTERNAL_TRANSFER,
  PaymentBaseFields,
  PaymentFormGroup,
  PaymentTypeConfig,
} from '@backbase/initiate-payment-journey-ang';

const internalTransferFields = INTERNAL_TRANSFER.fields.reduce(
  (fields, group) => fields.concat(...((group as PaymentFormGroup).fields ?? [])),
  [...INTERNAL_TRANSFER.fields],
);

export const getConfigFieldByName = (fieldName: string) => {
  return internalTransferFields.find((field) => field.name === fieldName);
};

const initiatorInnerField = getConfigFieldByName(InitiatorFields.initiatorAccountGroup);
const counterPartyInnerField = getConfigFieldByName(CounterPartyFields.counterPartyAccountGroup);

const initiator: PaymentFormGroup = {
  name: PaymentBaseFields.initiator,
  fields: [
    {
      ...initiatorInnerField,
      options: {
        ...(initiatorInnerField.options ?? {}),
        connectedAccounts: false,
      },
    },
  ],
};
const counterparty: PaymentFormGroup = {
  name: PaymentBaseFields.counterparty,
  fields: [
    {
      ...counterPartyInnerField,
      options: {
        ...(counterPartyInnerField.options ?? {}),
        connectedAccounts: false,
      },
    },
  ],
};

export const internalTransferUniversalConfig: PaymentTypeConfig = {
  ...INTERNAL_TRANSFER,
  fields: [
    initiator,
    counterparty,
    getConfigFieldByName(PaymentBaseFields.remittanceInfo),
    getConfigFieldByName(PaymentBaseFields.schedule),
  ],
};
