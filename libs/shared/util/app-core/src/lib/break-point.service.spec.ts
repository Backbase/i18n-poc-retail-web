import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { BreakPointService } from './break-point.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { BreakPointSize, breakPointsMapping } from './bootstrap-break-points.constants';

class MockBreakpointObserver {
  private state: BehaviorSubject<BreakpointState> = new BehaviorSubject({
    matches: true,
    breakpoints: {
      [Breakpoints.XSmall]: false,
      [Breakpoints.Small]: false,
      [Breakpoints.Medium]: false,
      [Breakpoints.Large]: true,
    },
  });

  resize(breakpointValue: { [key: string]: boolean }) {
    this.state.next({ ...this.state.getValue(), breakpoints: { ...breakpointValue } });
  }

  observe(): Observable<BreakpointState> {
    return this.state.asObservable();
  }
}

describe('BreakPoint Service', () => {
  let service: BreakPointService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreakPointService, { provide: BreakpointObserver, useClass: MockBreakpointObserver }],
    });
    service = TestBed.inject(BreakPointService);
  });

  it('should give correct breakpoint value after resize', (done) => {
    service.breakpointObserver['resize']({ [breakPointsMapping[BreakPointSize.Small]]: true });
    service.watchBreakpoints().subscribe((mode) => {
      expect(mode).toBe(BreakPointSize.Small);
      done();
    });
  });

  it('should not give wrong breakpoint value after resize', (done) => {
    service.breakpointObserver['resize']({ [breakPointsMapping[BreakPointSize.Small]]: true });
    service.watchBreakpoints().subscribe((mode) => {
      expect(mode).not.toBe(BreakPointSize.Large);
      done();
    });
  });
});
