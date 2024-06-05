import { TestBed } from '@angular/core/testing';
import { ChangeUsernameSuccessBundleModule } from './bundle-change-username.module';

describe('ChangeUsernameSuccessBundleModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChangeUsernameSuccessBundleModule],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(ChangeUsernameSuccessBundleModule);
    expect(module).toBeTruthy();
  });
});
