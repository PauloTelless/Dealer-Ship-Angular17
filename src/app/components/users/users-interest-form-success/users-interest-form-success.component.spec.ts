import { ComponentFixture, TestBed } from '@angular/core/testing';

import UsersInterestFormSuccessComponent from './users-interest-form-success.component';

describe('UsersInterestFormSuccessComponent', () => {
  let component: UsersInterestFormSuccessComponent;
  let fixture: ComponentFixture<UsersInterestFormSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersInterestFormSuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersInterestFormSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
