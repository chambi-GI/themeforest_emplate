import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtRippleComponent } from './dzmt-ripple.component';

describe('DzmtRippleComponent', () => {
  let component: DzmtRippleComponent;
  let fixture: ComponentFixture<DzmtRippleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DzmtRippleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DzmtRippleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
