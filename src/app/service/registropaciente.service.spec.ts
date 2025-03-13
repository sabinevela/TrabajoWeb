import { TestBed } from '@angular/core/testing';

import { RegistroPacienteService } from './registropaciente.service';

describe('RegistropacienteService', () => {
  let service: RegistroPacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroPacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
