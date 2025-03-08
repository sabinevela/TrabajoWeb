import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarNutricionistasComponent } from './editar-nutricionistas.component';

describe('EditarNutricionistasComponent', () => {
  let component: EditarNutricionistasComponent;
  let fixture: ComponentFixture<EditarNutricionistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarNutricionistasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarNutricionistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
