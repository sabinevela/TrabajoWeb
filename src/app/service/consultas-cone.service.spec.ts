import { TestBed } from '@angular/core/testing';

import { ConsultasConeService } from './consultas-cone.service';

describe('ConsultasConeService', () => {
  let service: ConsultasConeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultasConeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
