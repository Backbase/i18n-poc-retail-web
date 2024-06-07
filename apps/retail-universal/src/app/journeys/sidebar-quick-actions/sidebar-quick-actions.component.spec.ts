import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { SidebarQuickActionsComponent } from './sidebar-quick-actions.component';
import { SidebarQuickActionLink } from './sidebar-quick-actions.models';

const LINKS: SidebarQuickActionLink[] = [
  {
    menuIcon: 'settings',
    title: $localize`:Link Title|Manage accounts@@accounts.quick-actions.span.manageAccounts:Manage Accounts`,
    url: '/my-accounts/manage',
  },
  {
    menuIcon: 'flight',
    title: $localize`:Link Title|Set travel notice@@accounts.quick-actions.span.setTravelNotice:Set Travel Notice`,
    url: '/self-service/manage-cards/travel-notice',
  },
];

describe('SidebarQuickActionsComponent', () => {
  let quickActionsComponent: ComponentFixture<SidebarQuickActionsComponent>;
  let component: SidebarQuickActionsComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarQuickActionsComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    quickActionsComponent = TestBed.createComponent(SidebarQuickActionsComponent);
    component = quickActionsComponent.componentInstance;
    quickActionsComponent.detectChanges();
  });

  it('should be created', () => {
    expect(quickActionsComponent).toBeTruthy();
  });

  it('navigation items should be displayed', () => {
    component.links = LINKS;
    quickActionsComponent.detectChanges();

    const navigationItems = quickActionsComponent.debugElement.queryAll(By.css('.bb-navigation-item'));
    expect(navigationItems.length).toBe(LINKS.length);
  });
});
