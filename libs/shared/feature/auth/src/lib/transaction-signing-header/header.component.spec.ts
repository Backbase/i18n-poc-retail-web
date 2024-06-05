import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { TransactionSigningHeaderComponent } from './header.component';
import { CapabilityData } from '@backbase/identity-auth/transaction-signing';

describe('HeaderComponent', () => {
  const capabilityData$$ = new BehaviorSubject<CapabilityData | undefined>(undefined);
  let fixture: ComponentFixture<TestHeaderComponent>;

  @Component({
    template: `<bb-transaction-signing-header [data]="capabilityData$ | async"></bb-transaction-signing-header>`,
  })
  class TestHeaderComponent {
    capabilityData$ = capabilityData$$.asObservable();
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionSigningHeaderComponent, TestHeaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    fixture = TestBed.createComponent(TestHeaderComponent);
  });

  describe('for bulk payments approval flow', () => {
    beforeEach(() => {
      capabilityData$$.next({
        confirmationType: 'bulk-approve-payments',
        currencyAggr1: '3.00,AUD,1,some counter party,',
        currencyAggr2: '3.00,AUD,1,some counter party,',
        currencyAggr3: '3.00,AUD,1,some counter party,',
        currencyAggr4: '3.00,AUD,1,some counter party,',
        currencyAggr5: '3.00,AUD,1,some counter party,',
        currencyAggr6: '3.00,AUD,1,some counter party,',
        currencyAggr7: '3.00,AUD,1,some counter party,',
        currencyAggr8: '3.00,AUD,1,some counter party,',
        currencyAggr9: '3.00,AUD,1,some counter party,',
        currencyAggr10: '3.00,AUD,1,some counter party,',
        currencyAggrCount: '11',
      });
      fixture.detectChanges();
    });

    it('should render correct header template', () => {
      expect(getElements().getBulkPaymentHeading()).toBeTruthy();
    });

    describe('should correctly parse currency aggregation capability data', () => {
      it('render correct amount of aggregation item', () => {
        expect(getElements().getCurrencyAggregationListItems().length).toBe(10);
      });

      it('format aggregation correctly', () => {
        const formattedCurrencyAggregation = '1 payment of AUD 3.00 to some counter party';

        expect(getElements().getCurrencyAggregationListItems()[0].nativeElement.innerHTML.trim()).toEqual(
          formattedCurrencyAggregation,
        );
      });

      it('format aggregation correctly when no counterparty is provided', () => {
        capabilityData$$.next({
          confirmationType: 'bulk-approve-payments',
          currencyAggr1: '3.00,AUD,2,,originating',
          currencyAggrCount: '2',
        });

        fixture.detectChanges();

        const formattedCurrencyAggregation = '2 payments of AUD 3.00 to multiple accounts';

        expect(getElements().getCurrencyAggregationListItems()[0].nativeElement.innerHTML.trim()).toEqual(
          formattedCurrencyAggregation,
        );
      });
    });

    it('should render total currency aggregation counter if the amount is greater then 10', () => {
      expect(getElements().getCurrencyAggregationTotalCounterFooter()).toBeTruthy();
    });

    it('should not render currency aggregation list if total amount is zero', () => {
      capabilityData$$.next({
        'confirmation-type': 'bulk-approve-payments',
        currencyAggrCount: '0',
      });
      fixture.detectChanges();

      expect(getElements().getCurrencyAggregationList()).toBeFalsy();
    });
  });

  describe('for bulk batches upload flow', () => {
    beforeEach(() => {
      capabilityData$$.next({
        confirmationType: 'batch-upload-bulk',
        file1: '2,8,4962.17,USD',
        file2: '1,1,4575.1,USD',
        file3: '2,12,4861.56,USD',
        file4: '2,10,4962.17,USD',
        file5: '2,10,4575.1,USD',
        file6: '2,12,4861.56,USD',
        file7: '2,10,4962.17,USD',
        file8: '2,10,4575.1,USD',
        file9: '2,12,4861.56,USD',
        file10: '2,10,4962.17,USD',
        file11: '2,10,4575.1,USD',
        fileType: 'NACHA_CREDIT',
      });
      fixture.detectChanges();
    });

    it('should render correct header template', () => {
      expect(getElements().getBulkBatchUploadHeading()).toBeTruthy();
    });

    describe('should correctly parse batch aggregation capability data', () => {
      it('render correct batch of aggregation item', () => {
        expect(getElements().getBatchAggregationListItems().length).toBe(10);
      });

      it('format batch correctly', () => {
        expect(getElements().getBatchAggregationListItems()[0].nativeElement.innerHTML.trim()).toContain(
          'Batch file of',
        );
        expect(getElements().getBatchAggregationListItems()[0].nativeElement.innerHTML.trim()).toContain(
          'multiple accounts.',
        );
        expect(getElements().getBatchAggregationListItems()[1].nativeElement.innerHTML.trim()).toContain(
          'single account.',
        );
      });
    });

    it('should render total batch aggregation counter if the amount is greater then 10', () => {
      expect(getElements().getBatchAggregationTotalCounterFooter()).toBeTruthy();
    });

    it('should not render batch aggregation list if there is no batch files', () => {
      capabilityData$$.next({
        'confirmation-type': 'batch-upload-bulk',
        fileType: 'NACHA_CREDIT',
      });
      fixture.detectChanges();

      expect(getElements().getBatchAggregationList()).toBeFalsy();
    });

    it('should not render batch aggregation list if there is no data', () => {
      capabilityData$$.next(undefined);
      fixture.detectChanges();

      expect(getElements().getBatchAggregationList()).toBeFalsy();
    });
  });

  describe('for initial reversal batch flow', () => {
    const initiateReversalBatchData = {
      confirmationType: 'initiate-reversal-batch',
      batchOrderId: '9E2F9AC5-DD09-40C0-805E-147B0C565901',
      totalAmount: '12.95',
      totalTransactionsCount: 10,
      currency: 'EUR',
      fromAccount: 'NL06ABNA9691012820',
    };

    beforeEach(() => {
      capabilityData$$.next(initiateReversalBatchData);
      fixture.detectChanges();
    });

    it('should render correct header template', () => {
      expect(getElements().getReversalBatchHeading()).toBeTruthy();
    });

    it('should render correct subtitle for multiple transactions', () => {
      const subtitle = getElements().getSubtitle().nativeElement.innerHTML.trim();
      expect(subtitle).toContain('Reversal batch of');
      expect(subtitle).toContain(`to multiple accounts`);
    });

    it('should render correct subtitle for single transaction', () => {
      capabilityData$$.next({
        ...initiateReversalBatchData,
        totalTransactionsCount: 1,
      });
      fixture.detectChanges();
      const subtitle = getElements().getSubtitle().nativeElement.innerHTML.trim();
      expect(subtitle).toContain('Reversal batch of');
      expect(subtitle).toContain(`to one account`);
    });
  });

  function getElements() {
    return {
      getBulkPaymentHeading: () => fixture.debugElement.query(By.css('[data-role="bulk-payments__heading"]')),
      getCurrencyAggregationList: () => fixture.debugElement.query(By.css('[data-role="currency-aggregation__list"]')),
      getCurrencyAggregationListItems: () =>
        fixture.debugElement.queryAll(By.css('[data-role="currency-aggregation__list-item"]')),
      getCurrencyAggregationTotalCounterFooter: () =>
        fixture.debugElement.query(By.css('[data-role="currency-aggregation__total-counter"]')),
      getBulkBatchUploadHeading: () => fixture.debugElement.query(By.css('[data-role="batch-upload-bulk__heading"]')),
      getBatchAggregationList: () => fixture.debugElement.query(By.css('[data-role="batch-aggregation__list"]')),
      getBatchAggregationListItems: () =>
        fixture.debugElement.queryAll(By.css('[data-role="batch-aggregation__list-item"]')),
      getBatchAggregationTotalCounterFooter: () =>
        fixture.debugElement.query(By.css('[data-role="batches-aggregation__total-counter"]')),
      getReversalBatchHeading: () =>
        fixture.debugElement.query(By.css('[data-role="initiate-reversal-batch__heading"]')),
      getSubtitle: () => fixture.debugElement.query(By.css('[data-role="ts-modal-subtitle"]')),
    };
  }
});
