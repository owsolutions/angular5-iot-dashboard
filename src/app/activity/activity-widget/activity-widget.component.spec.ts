import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityWidgetComponent } from './activity-widget.component';

describe('ActivityWidgetComponent', () => {
  let component: ActivityWidgetComponent;
  let fixture: ComponentFixture<ActivityWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
