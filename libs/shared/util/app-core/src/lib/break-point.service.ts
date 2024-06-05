import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { breakPointsMapping } from './bootstrap-break-points.constants';

@Injectable({
  providedIn: 'root',
})
export class BreakPointService {
  constructor(public breakpointObserver: BreakpointObserver) {}

  public watchBreakpoints(): Observable<string> {
    return this.breakpointObserver.observe(Object.values(breakPointsMapping)).pipe(
      map((state: BreakpointState) => {
        return Object.entries(breakPointsMapping)
          .filter(([_, val]) => state.breakpoints[val])
          .reduce((_, currentValue) => {
            return currentValue[0];
          }, '');
      }),
      distinctUntilChanged(),
    );
  }
}
