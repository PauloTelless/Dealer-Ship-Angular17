import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersContactInfoComponent } from './users-contact-info.component';

describe('UsersContactInfoComponent', () => {
  let component: UsersContactInfoComponent;
  let fixture: ComponentFixture<UsersContactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersContactInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
