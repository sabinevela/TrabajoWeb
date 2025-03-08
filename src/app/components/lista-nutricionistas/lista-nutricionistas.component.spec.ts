import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNutricionistasComponent } from './lista-nutricionistas.component';

describe('ListaNutricionistasComponent', () => {
  let component: ListaNutricionistasComponent;
  let fixture: ComponentFixture<ListaNutricionistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaNutricionistasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaNutricionistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
