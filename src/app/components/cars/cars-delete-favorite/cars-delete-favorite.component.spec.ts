import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsDeleteFavoriteComponent } from './cars-delete-favorite.component';

describe('CarsDeleteFavoriteComponent', () => {
  let component: CarsDeleteFavoriteComponent;
  let fixture: ComponentFixture<CarsDeleteFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsDeleteFavoriteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarsDeleteFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
