import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilNutricionistaComponent } from './perfil-nutricionista.component';

describe('PerfilNutricionistaComponent', () => {
  let component: PerfilNutricionistaComponent;
  let fixture: ComponentFixture<PerfilNutricionistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilNutricionistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilNutricionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
