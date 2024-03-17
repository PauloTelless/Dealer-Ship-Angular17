import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsDeleteComponent } from './cars-delete.component';

describe('CarsDeleteComponent', () => {
  let component: CarsDeleteComponent;
  let fixture: ComponentFixture<CarsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
