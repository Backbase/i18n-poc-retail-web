import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { PageTitleService } from './page-title.service';

describe('PageTitleService', () => {
  let service: PageTitleService;
  const routerEvent$ = new BehaviorSubject<RouterEvent>(null);
  const routerMock = {
    navigate: jasmine.createSpy('navigate'),
    events: routerEvent$.asObservable(),
    url: '/test/url',
  };
  const activatedRoute = {
    outlet: 'primary',
    firstChild: {
      snapshot: {
        data: {},
      },
      outlet: 'primary',
    } as ActivatedRoute,
    snapshot: {
      data: {
        title: 'test',
      },
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: Router,
          useValue: routerMock,
        },
        {
          provide: ActivatedRoute,
          useValue: activatedRoute,
        },
      ],
    });

    service = TestBed.inject(PageTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open NotificationSettings', () => {
    routerEvent$.next(new NavigationEnd(1, '/someroute', '/'));
    service.run();
    expect(service['titleService'].getTitle()).toEqual('test');
  });

  it('should open NotificationSettings while getting route title', () => {
    spyOn<any>(service, 'getTitle').and.returnValue('test');

    routerEvent$.next(new NavigationEnd(1, '/someroute', '/'));
    service.run();
    expect(service['titleService'].getTitle()).toEqual('test');
  });
});
