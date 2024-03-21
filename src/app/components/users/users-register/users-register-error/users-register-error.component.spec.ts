import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRegisterErrorComponent } from './users-register-error.component';

describe('UsersRegisterErrorComponent', () => {
  let component: UsersRegisterErrorComponent;
  let fixture: ComponentFixture<UsersRegisterErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersRegisterErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersRegisterErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
