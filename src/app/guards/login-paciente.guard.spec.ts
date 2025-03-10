import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loginPacienteGuard } from './login-paciente.guard';

describe('loginPacienteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loginPacienteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
