import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPinViewComponent } from './output-pin-view.component';

describe('OutputPinViewComponent', () => {
  let component: OutputPinViewComponent;
  let fixture: ComponentFixture<OutputPinViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputPinViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputPinViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
