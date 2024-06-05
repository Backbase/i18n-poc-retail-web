export interface CurrencyAggregation {
  total: string;
  currencyCode: string;
  paymentsAmount: string;
  counterparty?: string;
  originating?: string;
}

export interface BatchesAggregation {
  totalBatches: string;
  totalTransactions: string;
  totalAmount: string;
  currencyCode: string;
}

export const HeaderPaymentTitle = {
  defaultPayment: $localize`:@@bb-transaction-signing.custom-header.initiate-payment.title.default-payment:Authorize Payment`,
  debitPayment: $localize`:@@bb-transaction-signing.custom-header.initiate-payment.title.debit-payment:Authorize Debit`,
  debitEditedPayment: $localize`:@@bb-transaction-signing.custom-header.initiate-payment.title.debit-edited-payment:Authorize Debit (Edited)`,
  editedPayment: $localize`:@@bb-transaction-signing.custom-header.initiate-payment.title.edited-payment:Authorize Payment (Edited)`,
};

export enum ConfirmationType {
  APPROVE_BATCH = 'approve-batch',
  APPROVE_PAYMENT = 'approve-payment',
  BATCH_UPLOAD_BULK = 'batch-upload-bulk',
  BULK_APPROVE_PAYMENTS = 'bulk-approve-payments',
  EDIT_PAYMENT = 'edit-payment',
  INITIATE_BATCH = 'initiate-batch',
  INITIATE_REVERSAL_BATCH = 'initiate-reversal-batch',
  UPLOAD_BATCH = 'upload-batch',
}
