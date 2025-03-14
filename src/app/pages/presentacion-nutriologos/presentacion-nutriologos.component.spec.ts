import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionNutriologosComponent } from './presentacion-nutriologos.component';

describe('PresentacionNutriologosComponent', () => {
  let component: PresentacionNutriologosComponent;
  let fixture: ComponentFixture<PresentacionNutriologosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentacionNutriologosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresentacionNutriologosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
