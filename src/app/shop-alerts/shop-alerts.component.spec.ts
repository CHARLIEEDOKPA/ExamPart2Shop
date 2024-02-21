import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAlertsComponent } from './shop-alerts.component';

describe('ShopAlertsComponent', () => {
  let component: ShopAlertsComponent;
  let fixture: ComponentFixture<ShopAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopAlertsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
