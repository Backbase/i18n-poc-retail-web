import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import {
  LoansCommunicationService,
  AccountsCommunicationService as RetailAccountsCommunicationService,
} from '@backbase/retail/feature/communication';
import { DashboardAccountsNavigationService } from './dashboard-accounts-navigation.service';
import { ProductKindUri } from '@backbase/accounts-transactions-journey-ang';

describe('DashboardAccountsNavigationService', () => {
  let router: Router;
  let service: DashboardAccountsNavigationService;
  let loansCommunicationService: jasmine.SpyObj<LoansCommunicationService>;
  let accountsCommunicationService: jasmine.SpyObj<RetailAccountsCommunicationService>;

  beforeEach(() => {
    loansCommunicationService = jasmine.createSpyObj('LoansCommunicationService', ['navigateToAccounts']);
    accountsCommunicationService = jasmine.createSpyObj('AccountsCommunicationService', [
      'navigateToExternalAccountDetails',
    ]);
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: LoansCommunicationService,
          useValue: loansCommunicationService,
        },
        {
          provide: RetailAccountsCommunicationService,
          useValue: accountsCommunicationService,
        },
      ],
    });

    router = TestBed.inject(Router);
    service = TestBed.inject(DashboardAccountsNavigationService);
  });

  describe('#navigateToAccounts()', () => {
    it('should call LoansCommunicationService.navigateToAccounts() when called', () => {
      service.navigateToAccounts();
      expect(loansCommunicationService.navigateToAccounts).toHaveBeenCalled();
    });
  });

  describe('#navigateToAccountInfo()', () => {
    it('should navigate to the corresponding account transactions page when productKind is not LOAN', () => {
      spyOn(router, 'navigate');
      const accountId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();
      const productKind = ProductKindUri.CURRENT_ACCOUNT;
      service.navigateToAccountInfo(accountId, productKind);
      expect(router.navigate).toHaveBeenCalledWith(['/my-accounts/transactions', { selectedAccount: accountId }]);
    });

    it('should navigate to external page when productKind is LOAN', () => {
      const accountId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();
      const productKind = ProductKindUri.LOAN;
      service.navigateToAccountInfo(accountId, productKind);
      expect(accountsCommunicationService.navigateToExternalAccountDetails).toHaveBeenCalledWith({
        id: accountId,
        kind: productKind,
      });
    });
  });
});
