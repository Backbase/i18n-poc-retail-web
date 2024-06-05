import { TestBed } from '@angular/core/testing';

import { SharedUserContextStorageService } from './shared-user-context-storage.service';

describe('SharedUserContextStorageService', () => {
  let service: SharedUserContextStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedUserContextStorageService],
    });
    service = TestBed.inject(SharedUserContextStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save context Id', () => {
    spyOn(sessionStorage, 'setItem');

    service.saveContextId('id');

    expect(service.getContextId()).toBe('id');
    expect(sessionStorage.setItem).toHaveBeenCalledWith('contextId', 'id');
  });

  it('should remove context Id', () => {
    spyOn(sessionStorage, 'setItem');
    spyOn(sessionStorage, 'removeItem');

    service.saveContextId('id');
    service.removeContextId();

    expect(service.getContextId()).toBeNull();
    expect(sessionStorage.removeItem).toHaveBeenCalledWith('contextId');
  });

  it('should get context Id from session storage', () => {
    spyOn(sessionStorage, 'getItem').and.returnValue('cachedId');

    service.removeContextId();

    expect(service.getContextId()).toBe('cachedId');
    expect(sessionStorage.getItem).toHaveBeenCalledWith('contextId');
  });
});
