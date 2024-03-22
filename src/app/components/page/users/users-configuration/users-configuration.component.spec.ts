import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersConfigurationComponent } from './users-configuration.component';

describe('UsersConfigurationComponent', () => {
  let component: UsersConfigurationComponent;
  let fixture: ComponentFixture<UsersConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersConfigurationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
