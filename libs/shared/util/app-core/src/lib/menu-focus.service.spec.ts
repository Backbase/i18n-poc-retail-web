import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MenuFocusService } from './menu-focus.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconModule } from '@backbase/ui-ang/icon';
import { HeaderModule } from '@backbase/ui-ang/header';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'bb-demo-wrapper',
  template: `
    <bb-navigation-menu></bb-navigation-menu>
    <a id="link">something else</a>
    <button id="button">something else</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class DemoWrapperComponent {}

@Component({
  selector: 'bb-navigation-menu',
  template: ` <nav>
    <ul class="bb-layout__vertical-nav">
      <li class="bb-layout__vertical-nav-section">
        <div class="bb-layout__vertical-nav-header">
          <bb-header-ui
            class="bb-inline-stack__item"
            headingClasses="bb-layout__vertical-nav-header-title"
            headingType="h3"
            heading=" ACCOUNTS & CARDS "
          ></bb-header-ui>
        </div>
        <ul class="bb-layout__vertical-nav">
          <li class="bb-layout__vertical-nav-item">
            <a
              routerLink="/accounts"
              routerLinkActive="bb-layout__vertical-nav-item-link--active"
              class="bb-layout__vertical-nav-item-link"
              aria-label="Accounts"
            >
              <bb-icon-ui class="bb-layout__vertical-nav-item-icon" name="accounts"></bb-icon-ui>
              <span class="bb-layout__vertical-nav-item-title">Accounts</span>
            </a>
          </li>
          <li class="bb-layout__vertical-nav-item">
            <a
              id="activeMenuItem"
              routerLink="/cards"
              class="bb-layout__vertical-nav-item-link bb-layout__vertical-nav-item-link--active"
              aria-label="Cards"
            >
              <bb-icon-ui class="bb-layout__vertical-nav-item-icon" name="credit-card"></bb-icon-ui>
              <span class="bb-layout__vertical-nav-item-title">Cards</span>
            </a>
          </li>
          <li class="bb-layout__vertical-nav-item">
            <a
              id="secondMenuItem"
              routerLink="/loans"
              routerLinkActive="bb-layout__vertical-nav-item-link--active"
              class="bb-layout__vertical-nav-item-link"
              aria-label="Loans"
            >
              <bb-icon-ui class="bb-layout__vertical-nav-item-icon" name="loans"></bb-icon-ui>
              <span class="bb-layout__vertical-nav-item-title">Loans</span>
            </a>
          </li>
          <li class="bb-layout__vertical-nav-item">
            <a
              id="thirdMenuItem"
              routerLink="/account-statements"
              routerLinkActive="bb-layout__vertical-nav-item-link--active"
              class="bb-layout__vertical-nav-item-link"
              aria-label="Account Statements"
            >
              <bb-icon-ui class="bb-layout__vertical-nav-item-icon" name="description"></bb-icon-ui>
              <span class="bb-layout__vertical-nav-item-title">Account Statements</span>
            </a>
          </li>
          <li class="bb-layout__vertical-nav-item">
            <a
              routerLink="/transactions"
              routerLinkActive="bb-layout__vertical-nav-item-link--active"
              class="bb-layout__vertical-nav-item-link"
              aria-label="Transactions"
            >
              <bb-icon-ui class="bb-layout__vertical-nav-item-icon" name="transactions"></bb-icon-ui>
              <span class="bb-layout__vertical-nav-item-title">Transactions</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>`,
})
export class NavigationComponent {}

function focusBySelector(fixture: ComponentFixture<DemoWrapperComponent>, selector: string): void {
  const componentElement = fixture.nativeElement.querySelector(selector);

  componentElement.dispatchEvent(new FocusEvent('focusin', { bubbles: true, relatedTarget: componentElement }));
}

describe('MenuFocusService', () => {
  let service: MenuFocusService;
  let component: DemoWrapperComponent;
  let fixture: ComponentFixture<DemoWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, IconModule, HeaderModule],
      declarations: [NavigationComponent, DemoWrapperComponent],
    });
    service = TestBed.inject(MenuFocusService);
    fixture = TestBed.createComponent(DemoWrapperComponent);
    component = fixture.componentInstance;
  });

  it('should move focus back to active menu item', fakeAsync(() => {
    service.initFocusHandler();
    tick();
    focusBySelector(fixture, '#activeMenuItem');
    tick();

    tick();
    focusBySelector(fixture, '#link');

    tick();

    const spy = spyOn(fixture.nativeElement.querySelector('#activeMenuItem'), 'focus');

    focusBySelector(fixture, '#secondMenuItem');

    service.stopFocusHandler();
    tick();

    expect(spy).toHaveBeenCalledTimes(1);
  }));

  it('should not move focus when iterating through menu items', fakeAsync(() => {
    service.initFocusHandler();
    tick();
    focusBySelector(fixture, '#activeMenuItem');
    tick();

    focusBySelector(fixture, '#secondMenuItem');
    tick();

    const spy = spyOn(fixture.nativeElement.querySelector('#activeMenuItem'), 'focus');

    focusBySelector(fixture, '#thirdMenuItem');

    service.stopFocusHandler();
    tick();

    expect(spy).not.toHaveBeenCalled();
  }));

  it('should not move focus when navigating out of the menu', fakeAsync(() => {
    service.initFocusHandler();
    tick();
    focusBySelector(fixture, '#activeMenuItem');
    tick();

    focusBySelector(fixture, '#secondMenuItem');
    tick();

    const spy = spyOn(fixture.nativeElement.querySelector('#activeMenuItem'), 'focus');

    focusBySelector(fixture, '#link');

    service.stopFocusHandler();
    tick();

    expect(spy).not.toHaveBeenCalled();
  }));

  it('should do nothing when navigating between non-menu items', fakeAsync(() => {
    service.initFocusHandler();
    tick();
    const spy = spyOn(fixture.nativeElement.querySelector('#activeMenuItem'), 'focus');

    focusBySelector(fixture, '#link');
    tick();

    focusBySelector(fixture, '#button');
    tick();

    focusBySelector(fixture, '#link');

    service.stopFocusHandler();
    tick();

    expect(spy).not.toHaveBeenCalled();
  }));
});
