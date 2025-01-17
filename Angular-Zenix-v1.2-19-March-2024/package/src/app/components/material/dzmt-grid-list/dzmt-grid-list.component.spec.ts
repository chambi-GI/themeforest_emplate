import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtGridListComponent } from './dzmt-grid-list.component';

describe('DzmtGridListComponent', () => {
  let component: DzmtGridListComponent;
  let fixture: ComponentFixture<DzmtGridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DzmtGridListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DzmtGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
