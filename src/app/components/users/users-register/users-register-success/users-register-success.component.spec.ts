import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRegisterSuccessComponent } from './users-register-success.component';

describe('UsersRegisterSuccessComponent', () => {
  let component: UsersRegisterSuccessComponent;
  let fixture: ComponentFixture<UsersRegisterSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersRegisterSuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersRegisterSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
