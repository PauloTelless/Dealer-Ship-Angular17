import { ComponentFixture, TestBed } from '@angular/core/testing';

import UsersLoginSaveComponent from './users-login-save.component';

describe('UsersLoginSaveComponent', () => {
  let component: UsersLoginSaveComponent;
  let fixture: ComponentFixture<UsersLoginSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersLoginSaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersLoginSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
