import { CanActivateFn } from '@angular/router';

export const loginPacienteGuard: CanActivateFn = (route, state) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    if (localStorage.getItem("login") === "true") {
      return true;
    } else {
      return false;
    }
  }
  return false;
};
