import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersNotLoggedComponent } from './users-not-logged.component';

describe('UsersNotLoggedComponent', () => {
  let component: UsersNotLoggedComponent;
  let fixture: ComponentFixture<UsersNotLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersNotLoggedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersNotLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
