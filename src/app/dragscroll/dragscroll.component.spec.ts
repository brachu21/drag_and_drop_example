import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragscrollComponent } from './dragscroll.component';

describe('DragscrollComponent', () => {
  let component: DragscrollComponent;
  let fixture: ComponentFixture<DragscrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragscrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
