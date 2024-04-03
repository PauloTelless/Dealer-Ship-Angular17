import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsBuyFormSuccessComponent } from './cars-buy-form-success.component';

describe('CarsBuyFormSuccessComponent', () => {
  let component: CarsBuyFormSuccessComponent;
  let fixture: ComponentFixture<CarsBuyFormSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsBuyFormSuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarsBuyFormSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
