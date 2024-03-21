import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLoginErrorComponent } from './users-login-error.component';

describe('UsersLoginErrorComponent', () => {
  let component: UsersLoginErrorComponent;
  let fixture: ComponentFixture<UsersLoginErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersLoginErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersLoginErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
