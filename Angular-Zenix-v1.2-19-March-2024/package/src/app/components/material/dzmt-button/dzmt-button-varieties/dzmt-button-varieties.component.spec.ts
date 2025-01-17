import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtButtonVarietiesComponent } from './dzmt-button-varieties.component';

describe('DzmtButtonVarietiesComponent', () => {
  let component: DzmtButtonVarietiesComponent;
  let fixture: ComponentFixture<DzmtButtonVarietiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DzmtButtonVarietiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DzmtButtonVarietiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
