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
  name: string;
  icon: string;
}

/**
 * A widget, is only a shortuct ( alias ) for a device pin,
 * to make it user friendly for normal users.
 * As a user perspective, when you want to turn on your house lamp,
 * you are not expecting to go for devices, and "set pin 4 on device x8395 to 5V",
 * so you can create alias on top of pin, and give it to users by security group to control
 * the pin
 */
export interface IWidget {
  device: IDevice;
  pin: IPin;
  name: string;
  location: ILocation;
}

/**
 * Represents the application store structure
 */
export interface AppState {
  devices: Array<IDevice>;
  locations: Array<any>;
  activities: Array<IActivity>;
  widgets: Array<IWidget>;
}


declare global {
  export interface Window {
    io: any;
  }
}


/**
 * Occures when a device changes
 */
export enum ActivityTypes {
  DevicePinChange
}
/**
 * This represents if an activity occures in application
 */
export interface IActivity {
  id: string;
  description: string;
  type: ActivityTypes;
  meta: any;
}

