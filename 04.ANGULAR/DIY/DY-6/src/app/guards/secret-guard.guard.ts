import { CanActivateFn } from '@angular/router';


export const secretGuardGuard: CanActivateFn = (route, state) => {

  let user = localStorage.getItem('username');
  let pass = localStorage.getItem('password');
  
  if (user != null && pass != null) {
    return true;
  }
  else {
    alert('You are not logged in');
    return false;
  }
};
