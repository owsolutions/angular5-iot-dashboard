import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazingTimePickerComponent } from './amazing-time-picker.component';

describe('AmazingTimePickerComponent', () => {
  let component: AmazingTimePickerComponent;
  let fixture: ComponentFixture<AmazingTimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmazingTimePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazingTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
