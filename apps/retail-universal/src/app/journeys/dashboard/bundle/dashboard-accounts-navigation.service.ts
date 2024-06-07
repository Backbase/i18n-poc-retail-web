import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsCommunicationService } from '@backbase/dashboard-journey-ang';
import {
  LoansCommunicationService,
  AccountsCommunicationService as RetailAccountsCommunicationService,
} from '@backbase/retail/feature/communication';
import { ProductKindUri } from '@backbase/accounts-transactions-journey-ang';

@Injectable({ providedIn: 'root' })
export class DashboardAccountsNavigationService extends AccountsCommunicationService {
  constructor(
    private router: Router,
    private loansCommunicationService: LoansCommunicationService,
    private accountsCommunicationService: RetailAccountsCommunicationService,
  ) {
    super();
  }

  navigateToAccounts(): void {
    this.loansCommunicationService.navigateToAccounts();
  }

  navigateToAccountInfo(selectedAccount: string, productKindUri: string): void {
    if (productKindUri === ProductKindUri.LOAN) {
      this.accountsCommunicationService.navigateToExternalAccountDetails({ id: selectedAccount, kind: productKindUri });

      return;
    }

    this.router.navigate(['/my-accounts/transactions', { selectedAccount }]);
  }
}
