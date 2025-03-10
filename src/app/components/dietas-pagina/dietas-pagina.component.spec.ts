import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietasPaginaComponent } from './dietas-pagina.component';

describe('DietasPaginaComponent', () => {
  let component: DietasPaginaComponent;
  let fixture: ComponentFixture<DietasPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietasPaginaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DietasPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
