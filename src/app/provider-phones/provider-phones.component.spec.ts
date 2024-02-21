import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderPhonesComponent } from './provider-phones.component';

describe('ProviderPhonesComponent', () => {
  let component: ProviderPhonesComponent;
  let fixture: ComponentFixture<ProviderPhonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProviderPhonesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProviderPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
