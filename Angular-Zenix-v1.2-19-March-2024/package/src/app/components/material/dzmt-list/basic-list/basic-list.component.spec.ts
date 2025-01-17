import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicListComponent } from './basic-list.component';

describe('BasicListComponent', () => {
  let component: BasicListComponent;
  let fixture: ComponentFixture<BasicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
