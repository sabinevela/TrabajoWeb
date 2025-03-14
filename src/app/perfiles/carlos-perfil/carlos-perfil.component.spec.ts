import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarlosPerfilComponent } from './carlos-perfil.component';

describe('CarlosPerfilComponent', () => {
  let component: CarlosPerfilComponent;
  let fixture: ComponentFixture<CarlosPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarlosPerfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarlosPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
