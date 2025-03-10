import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDietasComponent } from './lista-dietas.component';

describe('ListaDietasComponent', () => {
  let component: ListaDietasComponent;
  let fixture: ComponentFixture<ListaDietasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDietasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaDietasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
