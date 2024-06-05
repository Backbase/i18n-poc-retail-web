import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CapabilityData } from '@backbase/identity-auth/transaction-signing';
import { BatchesAggregation, ConfirmationType, CurrencyAggregation, HeaderPaymentTitle } from './header.model';

@Component({
  selector: 'bb-transaction-signing-header',
  templateUrl: 'header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionSigningHeaderComponent {
  private _data: CapabilityData = {};

  @Input() set data(data: CapabilityData | undefined) {
    if (!data) {
      this._data = {};
    } else {
      this._data = {
        ...data,
        confirmationType: data['confirmation-type'] ? data['confirmation-type'] : data.confirmationType,
        mappedCurrencyAggregation: this.isBulkApprovePayments(data)
          ? this.extractCurrencyAggregationFromBulk(data)
          : [],
        mappedBatchesAggregation: this.isBulkUploadBatch(data) ? this.extractBatchAggregationFromBulk(data) : [],
      };
    }
  }

  get data(): CapabilityData {
    return this._data;
  }

  readonly headerPaymentTitle = HeaderPaymentTitle;
  readonly confirmationType = ConfirmationType;
  /**
   * Number of max displayed items for payments and batches
   */
  readonly maxDisplayedItems = 10;

  private isBulkApprovePayments(data: CapabilityData): boolean {
    return data.confirmationType === ConfirmationType.BULK_APPROVE_PAYMENTS;
  }

  private isBulkUploadBatch(data: CapabilityData): boolean {
    return data.confirmationType === ConfirmationType.BATCH_UPLOAD_BULK;
  }

  /**
   * Parse the CapabilityData in bulk payments approve flow
   * and extract the currency aggregation strings for rendering in header.
   * @param data the data returned after a possible transaction signing request.
   * @returns CurrencyAggregation[]
   */
  private extractCurrencyAggregationFromBulk(data: CapabilityData): CurrencyAggregation[] {
    const currencyAggrResponseKey = 'currencyAggr';
    const currencyAggrCountResponseKey = 'currencyAggrCount';

    if (data[currencyAggrCountResponseKey] === 0) {
      return [];
    }

    return Object.entries(data).reduce((acc: CurrencyAggregation[], [key, value]: [string, string]) => {
      if (key.includes(currencyAggrResponseKey) && !key.includes(currencyAggrCountResponseKey)) {
        acc.push(this.mapCurrencyAggregation(value));
      }
      return acc;
    }, []);
  }

  /**
   * Map the currency aggregation of constant format
   * to inner CurrencyAggregation model, suitable for rendering.
   * @param aggregation the string with currency aggregation in format `total,currencyCode,paymentsAmount,counterparty,originating`
   * @returns CurrencyAggregation
   */
  private mapCurrencyAggregation(aggregation: string): CurrencyAggregation {
    const [total, currencyCode, paymentsAmount, counterparty, originating] = aggregation.split(',');

    return {
      total,
      currencyCode,
      paymentsAmount,
      counterparty,
      originating,
    };
  }

  /**
   * Parse the CapabilityData in bulk upload batch flow
   * and extract the batch aggregation strings for rendering in header.
   * @param data the data returned after a possible transaction signing request.
   * @returns BatchesAggregation[]
   */
  private extractBatchAggregationFromBulk(data: CapabilityData = []): BatchesAggregation[] {
    const batchFileResponseKey = 'file';
    const batchFileTypeKey = 'fileType';

    return Object.entries(data).reduce((acc: BatchesAggregation[], [key, value]: [string, string]) => {
      if (key.includes(batchFileResponseKey) && !key.includes(batchFileTypeKey)) {
        acc.push(this.mapBatchAggregation(value));
      }
      return acc;
    }, []);
  }

  /**
   * Map the batches aggregation of constant format
   * to inner BatchesAggregation model, suitable for rendering.
   * @param aggregation the string with batch aggregation in format `totalBathes,totalTransactions,totalAmount,currencyCode`
   * @returns BatchesAggregation
   */
  private mapBatchAggregation(aggregation: string): BatchesAggregation {
    const [totalBatches, totalTransactions, totalAmount, currencyCode] = aggregation.split(',');

    return {
      totalBatches,
      totalTransactions,
      totalAmount,
      currencyCode,
    };
  }
}
