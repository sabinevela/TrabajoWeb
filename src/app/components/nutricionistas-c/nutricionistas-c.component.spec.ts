import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutricionistasCComponent } from './nutricionistas-c.component';

describe('NutricionistasCComponent', () => {
  let component: NutricionistasCComponent;
  let fixture: ComponentFixture<NutricionistasCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutricionistasCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NutricionistasCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
