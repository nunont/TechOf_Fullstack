import { CanActivateFn } from '@angular/router';

export const neverAuthGuard: CanActivateFn = (route, state) => {
  console.log('NeverAuthGuard');
  return false;
};
