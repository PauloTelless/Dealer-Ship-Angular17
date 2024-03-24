import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPopUpLoginComponent } from './users-pop-up-login.component';

describe('UsersPopUpLoginComponent', () => {
  let component: UsersPopUpLoginComponent;
  let fixture: ComponentFixture<UsersPopUpLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersPopUpLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersPopUpLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
