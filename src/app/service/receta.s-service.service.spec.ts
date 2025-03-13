import { TestBed } from '@angular/core/testing';

import { RecetaSServiceService } from './receta.s-service.service';

describe('RecetaSServiceService', () => {
  let service: RecetaSServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetaSServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
