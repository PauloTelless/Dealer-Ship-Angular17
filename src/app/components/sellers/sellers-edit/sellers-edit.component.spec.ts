import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersEditComponent } from './sellers-edit.component';

describe('SellersEditComponent', () => {
  let component: SellersEditComponent;
  let fixture: ComponentFixture<SellersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellersEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
