import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavierPerfilComponent } from './javier-perfil.component';

describe('JavierPerfilComponent', () => {
  let component: JavierPerfilComponent;
  let fixture: ComponentFixture<JavierPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavierPerfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JavierPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
