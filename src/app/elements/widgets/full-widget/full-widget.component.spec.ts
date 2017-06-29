import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullWidgetComponent } from './full-widget.component';

describe('FullWidgetComponent', () => {
  let component: FullWidgetComponent;
  let fixture: ComponentFixture<FullWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
