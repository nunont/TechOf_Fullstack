import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { neverAuthGuard } from './never-auth.guard';

describe('neverAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => neverAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
