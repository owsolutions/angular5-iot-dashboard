import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SwitchWidgetsComponent } from './switch-widgets.component';
import { OutputPinComponent } from '../output-pin/output-pin.component';

describe('SwitchWidgetsComponent', () => {
  let component: SwitchWidgetsComponent;
  let fixture: ComponentFixture<SwitchWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SwitchWidgetsComponent,
        OutputPinComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
