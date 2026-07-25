import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = true; // Hardcoded for now
  if (isLoggedIn) {
    return true;
  }
  router.navigate(['/']);
  return false;
};
