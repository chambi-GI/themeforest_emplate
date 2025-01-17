import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStickyHeaderComponent } from './table-sticky-header.component';

describe('TableStickyHeaderComponent', () => {
  let component: TableStickyHeaderComponent;
  let fixture: ComponentFixture<TableStickyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableStickyHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableStickyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
