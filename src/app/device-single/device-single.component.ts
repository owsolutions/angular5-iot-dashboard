import { Component, OnInit } from '@angular/core';
import { CloudDevice, CloudDeviceType } from '@shared/iot/definitions';

@Component({
  selector: 'app-device-single',
  templateUrl: './device-single.component.html',
  styleUrls: ['./device-single.component.scss']
})
export class DeviceSingleComponent implements OnInit {

  public mode: 'edit' | 'new' = 'new';
  public form: CloudDevice = {
    type: CloudDeviceType.TemperatureSensor
  };
  constructor() { }

  ngOnInit() {
  }

}
