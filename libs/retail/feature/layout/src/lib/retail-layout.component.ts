import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SharedUserContextService } from '@backbase/shared/feature/user-context';
import { LayoutService } from '@backbase/ui-ang/layout';
import {
  BackbaseVersionConfig,
  BACKBASE_APP_VERSION,
  FocusHandlerService,
  BreakPointService,
  BreakPointSize,
} from '@backbase/shared/util/app-core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
import { filter, map, startWith, tap } from 'rxjs/operators';
import { Placement } from '@ng-bootstrap/ng-bootstrap';

enum RouteCustomDataProps {
  title = 'title',
  cssClasses = 'cssClasses',
}

interface RouteCustomData {
  [RouteCustomDataProps.cssClasses]: Array<string>;
  [RouteCustomDataProps.title]: string;
}

@Component({
  selector: 'bb-retail-layout',
  templateUrl: './retail-layout.component.html',
})
export class RetailLayoutComponent implements OnInit {
  readonly notificationsAllowedRoutes = 'conversation-view, arrangement-view, transaction-view';

  userContextMenuPosition$: Observable<Placement> = this.breakPointService.watchBreakpoints().pipe(
    map((breakpoint) =>
      [BreakPointSize.Large, BreakPointSize.XLarge, BreakPointSize.XXLarge].some((x) => breakpoint == x),
    ),
    map((x) => (x ? 'bottom-left' : 'auto')),
  );
  appVersion = this.version?.calendarVersion;

  routeData$?: Observable<RouteCustomData>;

  @Input() displayNotificationSettingsButton!: boolean;

  constructor(
    public readonly layoutService: LayoutService,
    public readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly oAuthService: OAuthService,
    public readonly userContextService: SharedUserContextService,
    @Optional() @Inject(BACKBASE_APP_VERSION) private version: BackbaseVersionConfig,
    public readonly focusHandler: FocusHandlerService,
    public readonly breakPointService: BreakPointService,
  ) {}

  ngOnInit(): void {
    this.routeData$ = this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      startWith(this.activatedRoute),
      map(() => this.retrieveRouteData(Object.keys(RouteCustomDataProps))),
    );
  }

  logout() {
    this.oAuthService.logOut();
  }

  private retrieveRouteData(props: string[]): RouteCustomData {
    const getData = (prop, route): string | undefined => route.snapshot.data[prop];

    return props.reduce((result, prop) => {
      let route = this.activatedRoute;
      while (!getData(prop, route) && route.firstChild) {
        route = route.firstChild;
      }
      return { ...result, [prop]: getData(prop, route) };
    }, {} as RouteCustomData);
  }
}
