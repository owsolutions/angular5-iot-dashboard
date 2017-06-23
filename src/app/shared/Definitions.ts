/**
 * A pin is any kind of I/O port of a device.
 * it has a type, which can be input, or output
 * also there is a unique id on device.
 * value, is the current status of device, can be TRUE,FALSE for digital
 * or can be a float number for analog data, such as temperature, humidity, light
 */
export interface IPin {
  type: any;
  id: any;
  value: any;
}

/**
 * A device is consisting an array of pins.
 */
export interface IDevice {
  uniqueid: string;
  pins: Array<IPin>;
}


/**
 * A place, defines the area of modules and infrustructure
 */
export interface ILocation {
  name: string,
  icon: string
}

/**
 * Represents the application store structure
 */
export interface AppState {
  devices: Array<IDevice>;
  locations: Array<any>;
}


declare global {
  export interface Window {
    io: any;
  }
}