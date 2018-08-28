import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCalendarComponent } from './angular-calendar.component';

describe('AngularCalendarComponent', () => {
  let component: AngularCalendarComponent;
  let fixture: ComponentFixture<AngularCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
