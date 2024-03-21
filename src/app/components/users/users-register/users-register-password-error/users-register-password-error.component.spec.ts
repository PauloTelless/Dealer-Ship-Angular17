import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRegisterPasswordErrorComponent } from './users-register-password-error.component';

describe('UsersRegisterPasswordErrorComponent', () => {
  let component: UsersRegisterPasswordErrorComponent;
  let fixture: ComponentFixture<UsersRegisterPasswordErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersRegisterPasswordErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersRegisterPasswordErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
