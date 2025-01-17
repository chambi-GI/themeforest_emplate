import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPanelStylingComponent } from './custom-panel-styling.component';

describe('CustomPanelStylingComponent', () => {
  let component: CustomPanelStylingComponent;
  let fixture: ComponentFixture<CustomPanelStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomPanelStylingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomPanelStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
