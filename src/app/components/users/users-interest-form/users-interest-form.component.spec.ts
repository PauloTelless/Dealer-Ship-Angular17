import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersInterestFormComponent } from './users-interest-form.component';

describe('UsersInterestFormComponent', () => {
  let component: UsersInterestFormComponent;
  let fixture: ComponentFixture<UsersInterestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersInterestFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersInterestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
