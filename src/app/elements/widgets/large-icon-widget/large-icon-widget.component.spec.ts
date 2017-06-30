import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeIconWidgetComponent } from './large-icon-widget.component';

describe('LargeIconWidgetComponent', () => {
  let component: LargeIconWidgetComponent;
  let fixture: ComponentFixture<LargeIconWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeIconWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeIconWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
