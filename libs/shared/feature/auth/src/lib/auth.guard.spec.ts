import { AuthService } from '@backbase/identity-auth';
import { ReplaySubject } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  const getInstance = () => {
    const isAuthenticated$$ = new ReplaySubject<boolean>(1);
    const authService = jasmine.createSpyObj<AuthService>('AuthService', ['initLoginFlow']);
    (authService as any).isAuthenticated$ = isAuthenticated$$.asObservable();
    const guard = new AuthGuard(authService, false);
    const scheduler = new TestScheduler((a, e) => expect(a).toEqual(e));

    return { guard, authService, isAuthenticated$$, scheduler };
  };

  describe('#canLoad', () => {
    it('should return true when user is authenticated', () => {
      const { guard, scheduler, isAuthenticated$$ } = getInstance();

      scheduler.run(({ expectObservable }) => {
        isAuthenticated$$.next(true);
        expectObservable(guard.canLoad()).toBe('x', { x: true });
      });
    });

    it('should return false and calls initLoginFlow when user is not authenticated', () => {
      const { guard, scheduler, authService, isAuthenticated$$ } = getInstance();

      scheduler.run(({ expectObservable }) => {
        isAuthenticated$$.next(false);
        expectObservable(guard.canLoad()).toBe('x', { x: false });
      });
      expect(authService.initLoginFlow).toHaveBeenCalledTimes(1);
    });
  });

  describe('#canActivate', () => {
    it('should return true when user is authenticated', () => {
      const { guard, scheduler, isAuthenticated$$ } = getInstance();

      scheduler.run(({ expectObservable }) => {
        isAuthenticated$$.next(true);
        expectObservable(guard.canActivate()).toBe('x', { x: true });
      });
    });

    it('should return false and calls initLoginFlow when user is not authenticated', () => {
      const { guard, scheduler, isAuthenticated$$, authService } = getInstance();

      scheduler.run(({ expectObservable }) => {
        isAuthenticated$$.next(false);
        expectObservable(guard.canActivate()).toBe('x', { x: false });
      });
      expect(authService.initLoginFlow).toHaveBeenCalledTimes(1);
    });
  });

  describe('#canActivateChild', () => {
    it('should return true when user is authenticated', () => {
      const { guard, scheduler, isAuthenticated$$ } = getInstance();

      scheduler.run(({ expectObservable }) => {
        isAuthenticated$$.next(true);
        expectObservable(guard.canActivateChild()).toBe('x', { x: true });
      });
    });

    it('should return false and calls initLoginFlow when user is not authenticated', () => {
      const { guard, scheduler, isAuthenticated$$, authService } = getInstance();

      scheduler.run(({ expectObservable }) => {
        isAuthenticated$$.next(false);
        expectObservable(guard.canActivateChild()).toBe('x', { x: false });
      });
      expect(authService.initLoginFlow).toHaveBeenCalledTimes(1);
    });
  });
});
