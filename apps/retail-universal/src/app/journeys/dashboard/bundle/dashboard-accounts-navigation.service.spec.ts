import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { LoansCommunicationService } from '@backbase/retail/feature/communication';
import { DashboardAccountsNavigationService } from './dashboard-accounts-navigation.service';

describe('DashboardAccountsNavigationService', () => {
  let router: Router;
  let service: DashboardAccountsNavigationService;
  let loansCommunicationService: jasmine.SpyObj<LoansCommunicationService>;

  beforeEach(() => {
    loansCommunicationService = jasmine.createSpyObj('LoansCommunicationService', ['navigateToAccounts']);
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: LoansCommunicationService,
          useValue: loansCommunicationService,
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
    it('should navigate to the corresponding account transactions page', () => {
      spyOn(router, 'navigate');
      const accountId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();
      service.navigateToAccountInfo(accountId);
      expect(router.navigate).toHaveBeenCalledWith(['/my-accounts/transactions', { selectedAccount: accountId }]);
    });
  });
});
