import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeValueWidgetComponent } from './large-value-widget.component';

describe('LargeValueWidgetComponent', () => {
  let component: LargeValueWidgetComponent;
  let fixture: ComponentFixture<LargeValueWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeValueWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeValueWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
