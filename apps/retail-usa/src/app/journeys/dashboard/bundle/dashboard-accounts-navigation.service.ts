import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsCommunicationService } from '@backbase/dashboard-journey-ang';
import { LoansCommunicationService } from '@backbase/retail/feature/communication';

@Injectable({ providedIn: 'root' })
export class DashboardAccountsNavigationService extends AccountsCommunicationService {
  constructor(private router: Router, private loansCommunicationService: LoansCommunicationService) {
    super();
  }

  navigateToAccounts(): void {
    this.loansCommunicationService.navigateToAccounts();
  }

  navigateToAccountInfo(selectedAccount: string): void {
    this.router.navigate(['/my-accounts/transactions', { selectedAccount }]);
  }
}
