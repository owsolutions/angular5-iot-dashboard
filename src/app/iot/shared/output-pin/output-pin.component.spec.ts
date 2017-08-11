import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OutputPinComponent } from './output-pin.component';
import { appReducersGenerator } from '@app/core/app.reducers';

import { CommunicateService } from '@app/core/services/communicate.service';
import { RequestsService } from '@app/core/services/requests.service';
import { PermissionsService } from '@app/core/services/permissions.service';
import { MocksService } from '@app/core/services/mocks.service';
import { ActionsService } from '@app/core/services/actions.service';

describe('OutputPinComponent', () => {
  let component: OutputPinComponent;
  let fixture: ComponentFixture<OutputPinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputPinComponent ],
      providers: [
        CommunicateService,
        RequestsService,
        PermissionsService,
        ActionsService,
        MocksService
      ],
      imports: [
        appReducersGenerator()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputPinComponent);
    component = fixture.componentInstance;
    component.pin = { id: '1', type: 'switch', value: 'ON' };
    component.device = { pins: [ { id : '2', type : 'switch', value: 'OFF' } ], uniqueid: '12' };
    component.changeAnalogData = ($event, device, pin) => '';
    component.changeDigitalData = ($event, device, pin) => 'OFF';
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
