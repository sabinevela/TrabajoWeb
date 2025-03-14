import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutriolgosComponent } from './nutriolgos.component';

describe('NutriolgosComponent', () => {
  let component: NutriolgosComponent;
  let fixture: ComponentFixture<NutriolgosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutriolgosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NutriolgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
