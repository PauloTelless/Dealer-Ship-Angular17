import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerDeleteComponent } from './seller-delete.component';

describe('SellerDeleteComponent', () => {
  let component: SellerDeleteComponent;
  let fixture: ComponentFixture<SellerDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
