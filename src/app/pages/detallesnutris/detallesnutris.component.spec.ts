import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesnutrisComponent } from './detallesnutris.component';

describe('DetallesnutrisComponent', () => {
  let component: DetallesnutrisComponent;
  let fixture: ComponentFixture<DetallesnutrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesnutrisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallesnutrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
