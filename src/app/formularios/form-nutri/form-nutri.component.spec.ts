import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNutriComponent } from './form-nutri.component';

describe('FormNutriComponent', () => {
  let component: FormNutriComponent;
  let fixture: ComponentFixture<FormNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNutriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
