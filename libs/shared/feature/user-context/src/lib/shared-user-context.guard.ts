import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ServiceAgreementsHttpService } from '@backbase/accesscontrol-v3-http-ang';

@Injectable({
  providedIn: 'root',
})
export class SharedUserContextGuard {
  private targetUrl: string | undefined;
  private isContextValid = false;

  constructor(
    private readonly router: Router,
    private readonly serviceAgreementService: ServiceAgreementsHttpService,
  ) {}

  canActivate(
    _next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.targetUrl = state.url;

    return (
      this.isContextValid ||
      this.validateUserContext().pipe(map((isValid) => isValid || this.getSelectContextUrlTree()))
    );
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }

  private getSelectContextUrlTree(): UrlTree {
    return this.router.createUrlTree(['/select-context']);
  }

  private validateUserContext(): Observable<boolean> {
    return this.serviceAgreementService.getServiceAgreementContext().pipe(
      map(() => {
        this.isContextValid = true;
        return this.isContextValid;
      }),
      catchError(() => {
        this.isContextValid = false;
        return of(this.isContextValid);
      }),
    );
  }
}
