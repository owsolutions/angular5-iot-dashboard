import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { SwitchWidgetsComponent } from './switch-widgets.component';
import { OutputPinComponent } from '../output-pin/output-pin.component';
import { MockComponent } from 'ng2-mock-component';
import { CommunicateService } from '../../communicate.service';
import { appReducersGenerator } from '../../app.reducers';
import { IWidget } from '../Definitions';
import { RequestsService } from '../../requests.service';
import { PermissionsService } from '../../permissions.service';
import { MocksService } from '../../mocks.service';
import { ActionsService } from '../../actions.service';

function mockWidget (): IWidget {
  const pin = {
    id: 0,
    type: 'output',
    value: 'OFF'
  };
  return {
    device: {
      uniqueid: 'dev-444',
      pins: [ pin ]
    },
    location: {
      icon: 'icon',
      name: 'Basket',
      id: 1
    },
    name: 'Test widget',
    pin
  };
}

describe('SwitchWidgetsComponent', () => {
  let component: SwitchWidgetsComponent;
  let fixture: ComponentFixture<SwitchWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SwitchWidgetsComponent,
        OutputPinComponent
      ],
      providers: [
        CommunicateService,
        RequestsService,
        PermissionsService,
        MocksService,
        ActionsService
      ],
      imports: [
        appReducersGenerator()
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchWidgetsComponent);
    component = fixture.componentInstance;
    component.widget = mockWidget ();
    fixture.detectChanges();
  });

  it('should be created', inject([CommunicateService], (service: CommunicateService) => {
    expect(service).toBeTruthy();
  }));
});
