import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCarFavoriteSuccessComponent } from './users-car-favorite-success.component';

describe('UsersCarFavoriteSuccessComponent', () => {
  let component: UsersCarFavoriteSuccessComponent;
  let fixture: ComponentFixture<UsersCarFavoriteSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersCarFavoriteSuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersCarFavoriteSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
