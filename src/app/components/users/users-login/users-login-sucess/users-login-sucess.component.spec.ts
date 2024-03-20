import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLoginSucessComponent } from './users-login-sucess.component';

describe('UsersLoginSucessComponent', () => {
  let component: UsersLoginSucessComponent;
  let fixture: ComponentFixture<UsersLoginSucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersLoginSucessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersLoginSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
