import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPinComponent } from './input-pin.component';

describe('InputPinComponent', () => {
  let component: InputPinComponent;
  let fixture: ComponentFixture<InputPinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPinComponent);
    component = fixture.componentInstance;
    component.pin = { id: '', type: '', value: '' };
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
