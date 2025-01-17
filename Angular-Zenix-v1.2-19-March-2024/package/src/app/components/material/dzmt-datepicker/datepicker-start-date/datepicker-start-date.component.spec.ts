import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerStartDateComponent } from './datepicker-start-date.component';

describe('DatepickerStartDateComponent', () => {
  let component: DatepickerStartDateComponent;
  let fixture: ComponentFixture<DatepickerStartDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepickerStartDateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatepickerStartDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
