import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsInfoComponent } from './cars-info.component';

describe('CarsInfoComponent', () => {
  let component: CarsInfoComponent;
  let fixture: ComponentFixture<CarsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
