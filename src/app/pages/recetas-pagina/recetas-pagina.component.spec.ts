import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasPaginaComponent } from './recetas-pagina.component';

describe('RecetasPaginaComponent', () => {
  let component: RecetasPaginaComponent;
  let fixture: ComponentFixture<RecetasPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecetasPaginaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecetasPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
