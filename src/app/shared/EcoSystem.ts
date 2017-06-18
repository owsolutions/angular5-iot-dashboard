import { times, random } from 'lodash';
import { IDevice, IPin } from './Definitions';
import { DeviceObject } from './DeviceObject';

/**
 * Holds the all information about the application, devices, widgets
 * This object is not representing any kind other data, such as log or history,
 * only manages devices and their io
 */
export class Echosystem {

  private contextDevices: Array<IDevice> = [];

  get generateMock (): Array<IDevice> {

    function createPins (id: Number = 2): Array<IPin> {
      return times(8 , (index) => {
        return {
          id: index,
          type: random (0, 1) === 1 ? 'input' : 'output',
          value: random(0, 1)
        };
      });
    }
    function createDevices (id: Number = 3): Array<IDevice> {
      return times(id , () => {
        return {
          uniqueid: 'dev-' + random(1111, 9999),
          pins: createPins (2)
        };
      });
    }

    return createDevices() ;
  }

  get Devices (): Array<DeviceObject> {
    return this.contextDevices.map(device => {
      return new DeviceObject(device);
    });
  }

  /**
   * You can pass a device object to this function,
   * it will update the devices status; if device exists,
   * just changes the values. if not exists, will create the device.
   */
  UpdateDevice (device: IDevice) {
    const _ = this.contextDevices.find($ => $.uniqueid === device.uniqueid);
    if (_) {
        this.contextDevices = this.contextDevices.filter($ => $.uniqueid !== device.uniqueid);
    }
    this.contextDevices.push(device);
  }

  UpdateDevices (devices: Array<IDevice>) {
      devices.forEach(device => {
          this.UpdateDevice(device);
      });
  }
}
