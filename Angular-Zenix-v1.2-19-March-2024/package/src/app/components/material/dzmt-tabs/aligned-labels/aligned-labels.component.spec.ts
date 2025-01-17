import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignedLabelsComponent } from './aligned-labels.component';

describe('AlignedLabelsComponent', () => {
  let component: AlignedLabelsComponent;
  let fixture: ComponentFixture<AlignedLabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlignedLabelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlignedLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
