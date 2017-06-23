import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumIconWidgetComponent } from './medium-icon-widget.component';

describe('MediumIconWidgetComponent', () => {
  let component: MediumIconWidgetComponent;
  let fixture: ComponentFixture<MediumIconWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumIconWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumIconWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
