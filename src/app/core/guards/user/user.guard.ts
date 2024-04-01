import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router)

  if (localStorage.getItem('userToken') !== null && localStorage.getItem('userRole') == 'user') {
    return true;
  } else {
    console.log('Guard F');
    _Router.navigate(['/auth/login']);
    return false;
  }
};
