import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsBuyFormComponent } from './cars-buy-form.component';

describe('CarsBuyFormComponent', () => {
  let component: CarsBuyFormComponent;
  let fixture: ComponentFixture<CarsBuyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsBuyFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarsBuyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
