import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLogoutComponent } from './users-logout.component';

describe('UsersLogoutComponent', () => {
  let component: UsersLogoutComponent;
  let fixture: ComponentFixture<UsersLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersLogoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
