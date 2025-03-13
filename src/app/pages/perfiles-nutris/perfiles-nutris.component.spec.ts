import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilesNutrisComponent } from './perfiles-nutris.component';

describe('PerfilesNutrisComponent', () => {
  let component: PerfilesNutrisComponent;
  let fixture: ComponentFixture<PerfilesNutrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilesNutrisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilesNutrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
