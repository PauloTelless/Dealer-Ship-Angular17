import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCarFavoriteInfoComponent } from './users-car-favorite-info.component';

describe('UsersCarFavoriteInfoComponent', () => {
  let component: UsersCarFavoriteInfoComponent;
  let fixture: ComponentFixture<UsersCarFavoriteInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersCarFavoriteInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersCarFavoriteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
