import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import {
  APP_ARRANGEMENT_MANAGER_BASE_PATH,
  APP_CONTACT_MANAGER_BASE_PATH,
  APP_PAYMENT_ORDER_A2A_BASE_PATH,
  APP_PAYMENT_ORDER_BASE_PATH,
} from '../../service-paths.module';
import { WrappedJourneyLayoutModule } from '../wrapped-journey-layout.module';

describe('WrappedJourneyLayoutModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        WrappedJourneyLayoutModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        HttpClientTestingModule,
      ],
      providers: [
        {
          provide: APP_ARRANGEMENT_MANAGER_BASE_PATH,
          useValue: 'test',
        },
        {
          provide: APP_CONTACT_MANAGER_BASE_PATH,
          useValue: 'test',
        },
        {
          provide: APP_PAYMENT_ORDER_A2A_BASE_PATH,
          useValue: 'test',
        },
        {
          provide: APP_PAYMENT_ORDER_BASE_PATH,
          useValue: 'test',
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(WrappedJourneyLayoutModule);
    expect(module).toBeTruthy();
  });
});
