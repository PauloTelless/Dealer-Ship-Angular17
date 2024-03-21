import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLogoutSuccessComponent } from './users-logout-success.component';

describe('UsersLogoutSuccessComponent', () => {
  let component: UsersLogoutSuccessComponent;
  let fixture: ComponentFixture<UsersLogoutSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersLogoutSuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersLogoutSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
