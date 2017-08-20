import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { DevicesComponent } from './devices.component';
import { InputPinComponent } from '../shared/input-pin/input-pin.component';
import { OutputPinComponent } from '../shared/output-pin/output-pin.component';
import { PageHeaderComponent } from '@app/core/page-header/page-header.component';
import { DeviceSvgComponent } from '../shared/device-svg/device-svg.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { appReducersGenerator } from '@app/app.reducers';
import { CommunicateService } from '@app/core/services/communicate.service';
import { RequestsService } from '@app/core/services/requests.service';
import { PermissionsService } from '@app/core/services/permissions.service';
import { MocksService } from '@app/core/services/mocks.service';

describe('DevicesComponent', () => {
  let component: DevicesComponent;
  let fixture: ComponentFixture<DevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        appReducersGenerator()
      ],
      declarations: [
        DevicesComponent,
        InputPinComponent,
        OutputPinComponent,
        PageHeaderComponent,
        DeviceSvgComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      providers: [
        CommunicateService,
        RequestsService,
        MocksService,
        PermissionsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', inject([CommunicateService], (service: CommunicateService) => {
    expect(component).toBeTruthy();
  }));
});
