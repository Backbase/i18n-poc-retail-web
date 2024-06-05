import { Injectable } from '@angular/core';
import { combineLatest, fromEvent, pairwise, startWith, Subject, takeUntil } from 'rxjs';
import { filter, map } from 'rxjs/operators';

/**
 * Handles the focus change between the menu and the journey:
 * once the focus switches from a non-menu item to a menu-item, then it
 * move to focus to the active menu item (active journey).
 */
@Injectable({
  providedIn: 'root',
})
export class MenuFocusService {
  private destroy$ = new Subject<void>();

  public initFocusHandler(): void {
    this.initEventListeners();
  }

  public stopFocusHandler(): void {
    this.destroy$.next();
  }

  private isElementInTheMenu(element: Element): boolean {
    return document.querySelector('bb-navigation-menu')?.contains(element) ?? false;
  }

  private initEventListeners(): void {
    combineLatest([fromEvent(window, 'focusin').pipe(pairwise()), fromEvent(window, 'mousedown').pipe(startWith(null))])
      .pipe(
        filter(
          ([[, current], mouseDownEvent]: [[Event, Event], Event | null]) =>
            !this.isElementInTheMenu(mouseDownEvent?.target as Element) ||
            (current.target !== mouseDownEvent?.target &&
              !(current.target as Element).contains(mouseDownEvent?.target as Element)),
        ),
        map(([focusEvents]: [[Event, Event], Event | null]) => focusEvents),
        takeUntil(this.destroy$),
      )
      .subscribe(([previous, current]: Event[]) => {
        const isPreviousLink = this.isElementInTheMenu(previous.target as Element);
        const isCurrentLink = this.isElementInTheMenu(current.target as Element);

        if (!isPreviousLink && isCurrentLink) {
          this.moveFocusToActiveMenuItem();
        }
      });
  }

  private moveFocusToActiveMenuItem(): void {
    (document?.querySelector('[class*="bb-layout__vertical-nav-item-link--active"]') as HTMLElement)?.focus();
  }
}
