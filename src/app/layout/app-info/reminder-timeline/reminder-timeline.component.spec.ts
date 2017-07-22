import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderTimelineComponent } from './reminder-timeline.component';

describe('ReminderTimelineComponent', () => {
  let component: ReminderTimelineComponent;
  let fixture: ComponentFixture<ReminderTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
