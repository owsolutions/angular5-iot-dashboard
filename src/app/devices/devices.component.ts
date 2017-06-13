import { Component, OnInit } from '@angular/core';
import { times, random } from 'lodash';

/**
 * A pin is any kind of I/O port of a device.
 * it has a type, which can be input, or output
 * also there is a unique id on device.
 * value, is the current status of device, can be TRUE,FALSE for digital
 * or can be a float number for analog data, such as temperature, humidity, light
 */
interface IPin {
  type: any,
  id: any,
  value: any
}

/**
 * A device is consisting an array of pins.
 */
interface IDevice {
  uniqueid: string,
  pins: Array<IPin>
}




/**
 * Holds the all information about the application, devices, widgets
 * This object is not representing any kind other data, such as log or history,
 * only manages devices and their io
 */
class Echosystem {

  get devicesInformation () : Array<IDevice> {

    function createPins (id: Number = 2) : Array<IPin> {
      return times(8 , (index) => {
        return {
          id: index,
          type: random (0,1) == 1 ? 'input' : 'output',
          value: random(0,1)
        };
      });
    }
    function createDevices (id: Number = 6) : Array<IDevice> {
      return times(id , () => {
        return {
          uniqueid: 'dev-' + random(1111,9999),
          pins: createPins (2)
        };
      });
    }

    return createDevices() ;
  }

  get Devices () : Array<DeviceObject> {
    return this.devicesInformation.map(device => {
      return new DeviceObject(device);      
    })
  }
}

class DeviceObject {

  constructor(private native: IDevice) {

  }
  get GetTitle () {
    return this.native.uniqueid;
  }
  get IO () {
    return this.native.pins;
  }

  get Inputs () {
    return this.native.pins.filter(pin => pin.type == 'input')
  }

  get Outputs () {
    return this.native.pins.filter(pin => pin.type == 'output')
  }

}


@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss' , '../shared/checkbox-switch.scss']
})
export class DevicesComponent implements OnInit {

  constructor() { }
  public devices: Array<DeviceObject>;

  ngOnInit() {
    let eco = new Echosystem();
    
    this.devices = eco.Devices;
    
    
  }

}
