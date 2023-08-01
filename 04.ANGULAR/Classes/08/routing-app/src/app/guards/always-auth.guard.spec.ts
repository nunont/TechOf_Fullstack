import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { alwaysAuthGuard } from './always-auth.guard';

describe('alwaysAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => alwaysAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
