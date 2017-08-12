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


export interface IWidgetForm {
  name: string;
  location: any;
}

/**
 * A place, defines the area of modules and infrustructure
 */
export interface ILocation {
  id: Number;
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

export interface IPermission {
  title: string;
  key: string;
  group: string;
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
  id: Number;
  description: string;
  type: ActivityTypes;
  meta: any;
  icon: string;
  iconType: string;
  reason: string;
  time: string;
}

export interface IResponse {
  apiVersion?: string;
  context?: string;
  id?: string;
  params?: {
    id?: string
  };
  data?: {
    kind?: string;
    fields?: string;
    etag?: string;
    id?: string;
    lang?: string;
    updated?: string;
    deleted?: boolean;
    currentItemCount?: Number;
    itemsPerPage?: Number;
    startIndex?: Number;
    totalItems?: Number;
    pageIndex?: Number;
    totalPages?: Number;
    items?: Array<any>
  };
  error?: {
    code?: Number;
    message: string;
    errors?: Array<{
      domain?: string;
      reason?: string;
      message?: string;
      location?: string;
      locationType?: string;
      extendedHelp?: string;
      sendReport?: string;
    }>
  };
}

export interface IVPCInformation {
  administrator: string;
  administratorPassword: string;
  vpcname: string;
  vpcregion: string;
}
