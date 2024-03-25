import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLoginNotSaveComponent } from './users-login-not-save.component';

describe('UsersLoginNotSaveComponent', () => {
  let component: UsersLoginNotSaveComponent;
  let fixture: ComponentFixture<UsersLoginNotSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersLoginNotSaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersLoginNotSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
