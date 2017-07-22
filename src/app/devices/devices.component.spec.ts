import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { DevicesComponent } from './devices.component';
import { InputPinComponent } from '../shared/input-pin/input-pin.component';
import { OutputPinComponent } from '../shared/output-pin/output-pin.component';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';
import { DeviceSvgComponent } from '../shared/device-svg/device-svg.component';

describe('DevicesComponent', () => {
  let component: DevicesComponent;
  let fixture: ComponentFixture<DevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.provideStore({})],
      declarations: [ 
        DevicesComponent, 
        InputPinComponent, 
        OutputPinComponent,
        PageHeaderComponent,
        DeviceSvgComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
