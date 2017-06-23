import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPinComponent } from './output-pin.component';

describe('OutputPinComponent', () => {
  let component: OutputPinComponent;
  let fixture: ComponentFixture<OutputPinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputPinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
