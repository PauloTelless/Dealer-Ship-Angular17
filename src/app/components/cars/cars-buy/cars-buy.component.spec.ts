import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsBuyComponent } from './cars-buy.component';

describe('CarsBuyComponent', () => {
  let component: CarsBuyComponent;
  let fixture: ComponentFixture<CarsBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsBuyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarsBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
