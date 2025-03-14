import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SofiaPerfilComponent } from './sofia-perfil.component';

describe('SofiaPerfilComponent', () => {
  let component: SofiaPerfilComponent;
  let fixture: ComponentFixture<SofiaPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SofiaPerfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SofiaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
