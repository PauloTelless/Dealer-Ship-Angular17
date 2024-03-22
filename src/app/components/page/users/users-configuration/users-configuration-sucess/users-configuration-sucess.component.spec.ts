import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersConfigurationSucessComponent } from './users-configuration-sucess.component';

describe('UsersConfigurationSucessComponent', () => {
  let component: UsersConfigurationSucessComponent;
  let fixture: ComponentFixture<UsersConfigurationSucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersConfigurationSucessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersConfigurationSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
